# jStat noncentral-t upstream-report publication

Prepared September 23, 2026 UTC. Accountable role: Product / Communication Steward.
Owner authorized the website's homepage and Latest update after submitting issue #300.

## Evidence and editorial decision

Publish one Engineering / Upstream report at
`/engineering/jstat-noncentral-t-probability-collapse/` for users of scientific
software and readers assessing Licklider's verification work. The concrete outcome
is a submitted, reproducible probability-collapse report with an independent
mathematical contradiction. No product release or new support is announced.

Public source: https://github.com/jstat/jstat/issues/300 (open, zero comments at
inspection). Reporter: Tasuku Kobayashi; submission recorded at
2026-09-23T16:35:25Z. This event time is not the website publication time.
Only the public issue and its public evidence bundle inform article details.

Claim/evidence mapping:
- CDF about 0.4410 returned as zero: jStat 1.9.6 reproduction at (40,10,40).
- CDF about 0.4414 returned as 1.892e-40: reproduction at (30,10,30).
- Both probabilities exceed 0.2202466425326062: defining-variable event bound.
- Numerical reference: positive integral at 50/80 digits, not certified enclosure.
- Cause: early stopping and zero starting weights; 1000-iteration diagnostic
  distinguishes them and is not presented as a completed patch.
- Current source: unchanged distribution module at
  72f367f6dbd45c2d903053ee3f9981489912cad4, Git blob
  db887ad36328cff47d6df38473178e5306043c84, over npm 1.9.6 core/special functions.
  Not a complete current-source build.
- Prior art: #131 / #135 already discussed large-noncentrality convergence.
  No claim that the general problem was previously unknown.

## Coordinated surfaces and boundaries

One PUBLICATIONS entry generates Engineering, Latest, homepage Latest, RSS, JSON
Feed and sitemap metadata. One UPSTREAM_CONTRIBUTIONS entry generates the homepage
panel, About evidence and totals, and /llms.txt. Reports become 13; merged fixes
remain 4. Existing contribution entries are unchanged. The first-seven display
limit is retained. Product/roadmap, /docs/ and /docs/llms.txt do not change because
the report introduces no usage, availability or support change. No private product
code, numerical results or internal impact assessment is included in the site.

## Review and validation

OpenAI Codex drafted and self-reviewed the site change under the owner's direction;
this is not independent human or upstream review. Checked publication architecture,
content workflow, Public Communications policy, Charter claim/non-claim boundaries,
Glossary controlled language and the communication review checklist. The article
states observation, submission, prior work and unresolved disposition separately.

Baseline: corp-site 40c7fa78e074c52642595203792f92c9f723175c.
Run content:impact against that baseline before and after editing; build and inspect
generated human/machine views. Record the successful production revision and time
below once available, then backfill article/homepage timestamps per deployment.md.
