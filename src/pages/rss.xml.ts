import type { APIRoute } from 'astro';
import { PUBLICATIONS } from '../data/publications';

const SITE_URL = 'https://www.licklider.ai';

const escapeXml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

const items = [...PUBLICATIONS]
  .sort((a, b) => b.sortKey.localeCompare(a.sortKey))
  .map((item) => {
    const url = new URL(item.href, SITE_URL).href;
    const published = new Date(`${item.sortKey}T00:00:00Z`).toUTCString();

    return `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <pubDate>${published}</pubDate>
      <category>${escapeXml(item.category)}</category>
      <description>${escapeXml(item.summary)}</description>
    </item>`;
  })
  .join('\n');

const lastBuildDate = new Date(
  `${[...PUBLICATIONS].sort((a, b) => b.sortKey.localeCompare(a.sortKey))[0]?.sortKey ?? '2026-09-01'}T00:00:00Z`,
).toUTCString();

const content = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Licklider — Latest</title>
    <link>${SITE_URL}/latest/</link>
    <description>Research, engineering, and company updates from Licklider.</description>
    <language>en</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

export const GET: APIRoute = () =>
  new Response(content, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
