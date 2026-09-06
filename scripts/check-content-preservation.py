#!/usr/bin/env python3
"""Compare two static builds after a presentation-only change.

Usage: python scripts/check-content-preservation.py BEFORE_DIST AFTER_DIST
Uses only Python's standard library. UI-only controls may use data-ui; content,
link labels/destinations, metadata, code examples and public feeds must match.
"""
import json
import re
import sys
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path


def normalized(text):
    return re.sub(r"\s+", " ", text).strip()


class Page(HTMLParser):
    def __init__(self, html):
        super().__init__(convert_charrefs=True)
        self.body = False
        self.ignored = 0
        self.stack = []
        self.text = []
        self.links = []
        self.anchor = None
        self.meta = []
        self.ids = set()
        self.structured = []
        self.json_buffer = None
        self.code = []
        self.code_buffer = None
        self.title = []
        self.in_title = False
        self.images = []
        self.feed(html)

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "body": self.body = True
        if tag == "title": self.in_title = True
        if "id" in a: self.ids.add(a["id"])
        if tag == "meta": self.meta.append(tuple(sorted(attrs)))
        if tag == "link" and a.get("rel") not in ("stylesheet", "modulepreload", "preload"):
            self.meta.append(tuple(sorted(attrs)))
        if tag == "script" and a.get("type") == "application/ld+json": self.json_buffer = []
        ignored = tag in ("script", "style") or "data-ui" in a
        if tag not in ("area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"):
            self.stack.append((tag, ignored))
            if ignored: self.ignored += 1
        if self.body and not self.ignored:
            if tag == "a": self.anchor = (a, [])
            if tag == "pre": self.code_buffer = []
            if tag == "img": self.images.append((a.get("src"), a.get("alt")))

    def handle_endtag(self, tag):
        if tag == "title": self.in_title = False
        if tag == "script" and self.json_buffer is not None:
            self.structured.append(json.loads("".join(self.json_buffer)))
            self.json_buffer = None
        if tag == "pre" and self.code_buffer is not None:
            self.code.append("".join(self.code_buffer))
            self.code_buffer = None
        if tag == "a" and self.anchor is not None:
            a, label = self.anchor
            self.links.append((a.get("href"), normalized(" ".join(label)), a.get("target"), a.get("rel")))
            self.anchor = None
        if self.stack and self.stack[-1][0] == tag:
            _, ignored = self.stack.pop()
            if ignored: self.ignored -= 1
        if tag == "body": self.body = False

    def handle_data(self, data):
        if self.json_buffer is not None: self.json_buffer.append(data)
        if self.in_title: self.title.append(data)
        if self.body and not self.ignored:
            self.text.append(data)
            if self.anchor is not None: self.anchor[1].append(data)
            if self.code_buffer is not None: self.code_buffer.append(data)


def check(before, after):
    failures = []
    old_pages = {p.relative_to(before) for p in before.rglob("*.html")}
    new_pages = {p.relative_to(after) for p in after.rglob("*.html")}
    if old_pages != new_pages: failures.append("HTML route set changed")
    for rel in sorted(old_pages & new_pages):
        a = Page((before / rel).read_text())
        b = Page((after / rel).read_text())
        checks = {
            "text in reading order": normalized(" ".join(a.text)) == normalized(" ".join(b.text)),
            "links and labels": Counter(a.links) == Counter(b.links),
            "metadata": sorted(a.meta) == sorted(b.meta),
            "structured data": a.structured == b.structured,
            "code examples": a.code == b.code,
            "title": a.title == b.title,
            "images": a.images == b.images,
            "existing anchors": a.ids <= b.ids,
        }
        failures.extend(f"{rel}: {label}" for label, ok in checks.items() if not ok)
    surfaces = {p.relative_to(before) for p in before.rglob("*")
                if p.is_file() and p.suffix in (".md", ".txt", ".json", ".xml") and "_astro" not in p.parts}
    for rel in sorted(surfaces):
        if not (after / rel).exists() or (before / rel).read_bytes() != (after / rel).read_bytes():
            failures.append(f"{rel}: public data changed")
    for public_asset in ("og.png", "favicon.svg", "CNAME"):
        if (before / public_asset).read_bytes() != (after / public_asset).read_bytes():
            failures.append(f"{public_asset}: existing public asset changed")
    if failures:
        print("FAIL\n" + "\n".join(failures))
        return 1
    print(f"PASS: {len(old_pages)} HTML pages retain text, links, metadata, structured data, code, images and anchors.")
    print(f"PASS: {len(surfaces)} public data/feed files and 3 existing public assets are byte-identical.")
    return 0


if __name__ == "__main__":
    if len(sys.argv) != 3:
        raise SystemExit(__doc__)
    raise SystemExit(check(Path(sys.argv[1]), Path(sys.argv[2])))
