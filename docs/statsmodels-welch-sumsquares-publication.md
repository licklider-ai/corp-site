# statsmodels Welch sumsquares upstream-report publication

Publication date: September 14, 2026 (UTC).

Public evidence: https://github.com/statsmodels/statsmodels/issues/10252

## Publication decision

Create one Engineering / Upstream report article at
`/engineering/statsmodels-welch-sumsquares-overflow/`. The submitted issue is a
distinct reproducible finding in a separate upstream library and at a different
first-failure stage from the existing SciPy Welch reports. It therefore has its own
durable reader-facing conclusion rather than updating an existing article.

The issue was created by `tasuku-kobayashi` at `2026-09-14T06:00:46Z`. At inspection
it was open, labeled `type-bug`, and had zero comments. Submission is verified;
maintainer confirmation, an accepted fix, and a released fix remain unestablished.

## Evidence and claim boundary

The issue body matches the prepared compact example: four observations per group,
`k=511`, exactly representable inputs and individual squared deviations, overflowing
unnormalized sumsquares, and finite mathematical variance and Welch results. Recorded
release and main runs return `(-0.0, NaN, NaN)` and capture two dot-overflow warnings
and two invalid-division warnings. Exact rational moments and three independent
high-precision tail calculations give `t=-sqrt(3/2)`, `df=6`, and
`p=0.26656970338006897957779103665614139...`.

The public page presents this as Licklider's reproduction and reporter-side source
analysis. It does not imply upstream confirmation, practical prevalence, a general
repair, or new nomue support. The upstream issue remains the public source for the
full submitted code, outputs, environment, and source trace.

## Site integration

Add the article once to `PUBLICATIONS`. This supplies Latest, the Engineering index,
homepage Latest, RSS, and JSON Feed. Add the distinct problem once to
`UPSTREAM_CONTRIBUTIONS`, bringing the total to 11 reports while leaving the three
matching merged fixes unchanged. The shared registry supplies the homepage upstream
panel, About selected work, and the agent-readable site index.

The homepage modification time and the article's exact publication time must be
recorded only after a successful production deployment, following `deployment.md`.
Until then, preserve date-only metadata and do not infer a publication instant from
the issue, commit, pull request, preview, or build time.

## Assistance and validation

OpenAI Codex inspected the submitted issue and the existing evidence, drafted the
article and integration changes under the owner's direction, and performed local
consistency checks. This is not independent human or maintainer review. No upstream
comment, issue edit, pull request, or other external message is part of this work.

The configured Astro check and production build passed locally: 80 checked source
files with zero errors, warnings, or hints, and 62 generated pages. Generated-output
checks found one canonical article, one Latest entry, one Engineering-index entry,
one JSON Feed item, one RSS item, and one sitemap URL. The homepage shows 11 reports,
three matching merged fixes, the new report in Latest, and the new panel in both the
visible and accessibility-hidden carousel copies. About and llms.txt each include the
new report; the JSON Feed contains 40 unique publication items.

Record the observed production completion time in a separate follow-up after deployment
succeeds. Recheck the live canonical page, feeds, sitemap, homepage, About, Engineering,
Latest, and llms.txt after publication.
