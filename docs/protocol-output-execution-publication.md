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
