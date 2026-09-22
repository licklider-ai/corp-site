# statsmodels contingency-table chi-square tail upstream-report publication

Publication date: September 22, 2026 (UTC).

Public evidence: https://github.com/statsmodels/statsmodels/issues/10274

## Publication decision

Create one Engineering / Upstream report article at
`/engineering/statsmodels-contingency-table-tail-loss/`. The submitted issue is a
distinct reproducible finding in statsmodels' contingency-table code. It has its own
durable reader-facing conclusion: a representable positive chi-square upper tail is
lost when the implementation subtracts a rounded CDF from one.

At inspection, the issue was open, labeled `type-bug`, and had zero comments.
Submission and reporter-side reproduction are verified; maintainer confirmation, an
accepted fix, and a released fix remain unestablished.

## Evidence and claim boundary

The public issue contains a self-contained example for `[[40, 1], [1, 40]]`. The
method returns a finite Pearson statistic of `74.19512195121949` with one degree of
freedom and a p-value of `0.0`; `scipy.stats.chi2.sf` returns
`7.07649484571079e-18`. A separate 100-decimal evaluation of
`erfc(sqrt((3042/41)/2))` gives `7.0764948457107158...e-18` and independently
confirms the magnitude.

The report records a fresh statsmodels 0.15.0 environment and a reproduction from
`main` commit `2cb70c2ce39740b9b8fd848578ee97a0fdd06573`. It also records the
milder `[[30, 1], [1, 30]]` case, where subtraction has already lost precision.

The public page presents these facts as the reporter's reproduction and source
analysis. It does not imply upstream confirmation, practical prevalence, a complete
audit of similar expressions, an accepted repair, or new nomue support.

## Site integration

Add the article once to `PUBLICATIONS`. This supplies Latest, the Engineering index,
homepage Latest, RSS, JSON Feed, and the sitemap. Add the distinct submitted problem
once to `UPSTREAM_CONTRIBUTIONS`, bringing the total to 12 reports while leaving the
three matching merged fixes unchanged. The shared registry supplies the homepage
upstream panel, About selected work, About counts, and the agent-readable site index.

The article's exact publication time and the homepage modification time must come
from the successful production deployment under `deployment.md`, not from the issue,
commit, pull request, preview, or build time.

## Assistance and validation

OpenAI Codex inspected the submitted issue and the recorded reproductions, drafted
the article and integration changes under the owner's direction, and performed local
consistency checks. This is not independent human or maintainer review. No upstream
comment, issue edit, pull request, or other external message is part of this site work.
