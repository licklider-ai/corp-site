# Review scope and pinned state

## Purpose

This temporary package supports an independent adversarial review of the Engineering
article “Certifying paired-t numerical evidence before protocol support,” its index
entries, and the deployment/repository changes that published it.

## Pinned identities

| Surface | Identity |
|---|---|
| corp-site target | `2c7376fab6c14908cc9c89a42c0897bf7f3a35f8` |
| corp-site publication commit | `3a744cc2a5d8ef036aad9b9c14b1ee861584f151` |
| corp-site baseline | `b10f3199c9b14e0598da1c824352a8c6ea75e370` |
| nomue Protocol merged candidate | `fd703bc9f6ae9c855571f1a9e59e6c50fc73564f` |
| D5 table-evidence reviewed head | `6f58c340889de416a040ca28037736b301402f8a` |

The local protocol snapshot included in the ZIP has the same reviewed content tree as
the merged candidate for the selected evidence files; the merge commit itself is the
public authority for comparison.

## Expected corp-site delta

```text
.github/workflows/deploy.yml                       |   2 +-
src/data/publications.ts                           |  11 ++
src/pages/engineering/certifying-paired-t-numerical-evidence.astro | 178 +
3 files changed, 190 insertions(+), 1 deletion(-)
```

## Recorded checks before packaging

- Local `pnpm build`: success.
- Astro diagnostics: 27 files, 0 errors, 0 warnings, 0 hints.
- Static generation: 13 routes, including the new article, Engineering, and Latest.
- GitHub CI run `33143253003`: success.
- Vercel commit status for `2c7376f`: success.
- Canonical article, Engineering, Latest, and home URLs returned HTTP 200 and contained
  the new title; article, Engineering, and Latest displayed the status
  “Reviewed candidate evidence — not protocol support.”
- GitHub Pages run `33143253009`: build successful through `pnpm build`, then failure at
  `actions/configure-pages` because Pages is not enabled. The same Pages workflow had
  failed on earlier main commits and is not the canonical Vercel production route.

These are claims for the reviewer to reproduce, not substitutes for review evidence.

## Authority boundary

The publication reports candidate engineering evidence only. It must not be interpreted
as issuing identifiers, completing R2-D5, fixing the final table or content hash,
registering a bundle or Public Check, or announcing Release 2 support.

