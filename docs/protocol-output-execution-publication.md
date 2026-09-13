# Protocol output and execution publication

Date: 2026-09-13 UTC. User authorized one new Engineering article, two
substantive updates and production publication after the preceding source audit.

## Fixed evidence and publication scope

- R3 PR #330: `b52389fd3efc6b8968613f59f147a578d5bbb55d`;
  reviewed implementation/evidence target `8262f8b7312888400e1cb0ce82efc53a004f7a55`.
- R4 PR #331: packet `f7be54ea8790d2d3d19a690690ed67e424eae6cb`;
  runtime `1caac8df84ba73e73e160e844fcc228fc884f31c`.
- Both PRs were draft and unmerged when checked. Candidate engineering is not
  formal adoption, registered support, release or a new numerical accuracy claim.
- New article: separating format checks from verification results.
- Substantive updates: factorial probability evidence; verification-call result
  discard. Their original URLs, publication dates and sort keys are retained.
- Ancillary changes: shared R3/R4 progress, homepage and LLM discovery links,
  and one related-reading link in the historical Holm binding article. That
  navigation-only edit does not create a new substantive-update date.
- No Research article, Protocol mutation or upstream message is part of this work.

## Editorial self-review

The continuing editor used OpenAI Codex with the prior audit visible. This is
editorial source checking, not an independent scientific or implementation review.
Read candidate.4 README and external-review intake, R4 README/POLICY and current
PR descriptions, and the corresponding existing articles.

Preserved distinctions: schema admission versus semantic checks; not-run versus
pass; changed public projection versus unchanged evaluation order; attributed
external review versus full review closure; single-worker virtual address space
versus aggregate memory; deadline observation versus universal latency guarantee;
admission probes versus an independent oracle; candidate containment versus proof
of truth. New claims link to immutable public revisions. The runtime's supported
scope is not broadened by the website.

## Validation before publication

- Astro check: 79 files, zero errors/warnings/hints; static build: 61 pages.
- Local Node 24.19.0 with existing dependencies whose lockfile matches this repo.
  The pnpm launcher attempted dependency reconciliation and stopped; the same
  Astro check and build commands were run directly. Hosted CI remains the
  required Node 22 / pnpm 10 validation.
- Generated HTML, canonical URLs, internal article links, RSS/JSON Feed uniqueness,
  sitemap inclusion, homepage/Latest/Engineering and both LLM indexes checked.
- No styling or layout changes. Automated browser screenshots were unavailable
  because the local Playwright browser executable was absent; no visual pass claimed.
- Exact production completion time is recorded only after Vercel success, through
  the metadata-only follow-up required by docs/deployment.md.

## Production completion

Content PR #37 merged as `a0044ed87c6da2871730e78dcdcec6dba681deca`.
Its uploaded tree matched the locally validated tree
`e1844edbdbea5371025d90c21aba69ea21125d5a`. Hosted build and Vercel preview
both succeeded before merge.

Production Vercel success status `54071381527`, recorded
`2026-09-13T12:56:31Z`, identifies
<https://vercel.com/licklidermvp/website/GNEnE5vjZhHbVymW5E1bJJtA8zAv>.
This instant supplies the new article's publishedTime and the two substantive
updates' updatedTime. The following metadata-only deployment preserves that
instant, original article identities and publication dates.

After content deployment, the live Cloud Browser confirmed all three article
headings, the new output-separation article, both successor sections and visible
UTC publication/update dates. Search retrieval still showed an older cached
article, so it was not used as production-state evidence. The metadata build
checks HTML, JSON Feed, RSS and sitemap timestamps against the recorded instant.
