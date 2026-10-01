# Upstream status review — October 1, 2026

Accountable role: website publication owner, acting on the founder’s request to
check all listed reports without a matching merged fix and update production.
Review basis: `main` at `a6419a448cbfcf6bab2c78d02f5f9001c669e6a9`.
Source check: October 1, 2026, UTC. This review checks public upstream dispositions;
it does not rerun the numerical experiments or independently review proposed patches.

## Results

The existing registry has 14 submitted problems and 5 matching merged fixes.
The remaining 9 were investigated. Eight public trackers were read successfully;
the agricolae email report has no accessible new correspondence in this review.
No newly merged matching fix was found among the reviewed reports.

| Report | Source | Latest verified disposition |
| --- | --- | --- |
| SciPy Student-t subnormal tail | [#26290](https://github.com/scipy/scipy/issues/26290) | Closed with `state_reason=not_planned` at `2026-09-30T13:00:50Z`. MPArray alternative demonstrated; reporter agreed with the decision not to pursue a NumPy-backend repair. |
| jStat noncentral-t CDF | [#300](https://github.com/jstat/jstat/issues/300) | Open. The sole comment is the reporter’s implementation suggestion; no maintainer confirmation or accepted repair. |
| SciPy Welch degrees of freedom | [#26169](https://github.com/scipy/scipy/issues/26169), [PR #26209](https://github.com/scipy/scipy/pull/26209) | Issue and PR open. MPArray reference results posted. Proposed NumPy fix not merged. |
| SciPy Studentized-range tail | [#17832](https://github.com/scipy/scipy/issues/17832#issuecomment-5614555048) | Tracking issue open. Reporter’s September 24 mathematical-reduction follow-up present; no new maintainer response to that reproducer. |
| SciPy Welch ANOVA | [#26146](https://github.com/scipy/scipy/issues/26146), [PR #26209](https://github.com/scipy/scipy/pull/26209) | Issue and PR open. MPArray reference results posted. Proposed NumPy fix not merged. |
| agricolae REGW labels | [Published report](https://www.licklider.ai/engineering/agricolae-regw-treatment-labels/) | Last recorded state retained: emailed September 10; confirmation pending. Private reply history was not available, so this is not a newly verified no-response claim. |
| SciPy Mann–Whitney U batching | [#26115](https://github.com/scipy/scipy/issues/26115) | Open with `needs-decision`. Community source analysis and reporter follow-ups present; intended API behavior and remedy undecided. |
| SciPy one-sample / paired t-test range | [#26113](https://github.com/scipy/scipy/issues/26113), [PR #26135](https://github.com/scipy/scipy/pull/26135) | Issue and NumPy repair PR open; no reviews or discussion on the PR. MPArray results are an alternative backend, not a merged NumPy repair. |
| R exact Wilcoxon | [Bugzilla PR#19144 REST](https://bugs.r-project.org/rest/bug/19144), [comments](https://bugs.r-project.org/rest/bug/19144/comment) | `UNCONFIRMED`, empty resolution; last change `2026-09-03T06:30:41Z`. ARM macOS commenter did not reproduce the out-of-range symptom; reporter’s follow-up distinguishes that symptom from tail accuracy. HTML retrieval returned HTTP 418, but the public REST API succeeded. |

Direct REST reads of PR #26209 at head
`621ef46923643946801023569b46d64869709d43` reported `merged=false`,
`mergeable=true`, `mergeable_state=clean`, and 56/56 successful check runs.
The normalized metadata response initially differed on mergeability; the direct
REST response was used, with the same head. This transient integration property
does not establish scientific review or adoption. The existing website wording
therefore remained valid and its September 30 article update date was preserved.
PR #26135 remained unmerged and mergeable, with `mergeable_state=unstable`.

## Editorial decision and evidence

The #26290 discussion is about limited practical benefit, maintenance cost and an
available alternative, not an empirical estimate of failure frequency:

- [Maintainer’s MPArray demonstration and rationale](https://github.com/scipy/scipy/issues/26290#issuecomment-5858319705), September 27.
- [Reporter’s agreement](https://github.com/scipy/scipy/issues/26290#issuecomment-5860814406), September 27.
- [Maintainer’s follow-up](https://github.com/scipy/scipy/issues/26290#issuecomment-5863786732), September 28.

Keep this finding in the 14-report denominator and exclude it from the 5 merged
fixes. Record a distinct `closed_not_planned` outcome. Do not infer confirmed-bug
counts from tracker labels, convert closure into acceptance, or present merge rate
as a standalone correctness score. Do not generalize the #26290 disposition to
the other still-open issues, even though the maintainer suggested considering a
similar course for other MPArray-addressable reports.

## Affected surfaces and validation

- Update the #26290 canonical article, status, panel and substantive-update date.
- Keep original publication date, sort key, URL and feed identity.
- Homepage retains 14 submitted reports and 5 merged fixes; add a compact link to
  the Engineering explanation of distinct findings and outcomes.
- Engineering overview shows 1 report closed without a planned fix, with a link
  to its rationale. This count is derived from the same registry.
- Latest, About, RSS and JSON Feed inherit the canonical status automatically.
- Update site-level `llms.txt`, including the now-successful R tracker check.
- Supplement the R article with the previously unreflected September 2–3 exchange:
  a different build returns in-range values, while the reporter identifies a tail
  accuracy difference. Keep upstream status unconfirmed and add an October 1
  substantive-update date. This is not a new October upstream reply.
- Product, Protocol, supported capability, numerical examples and the other
  articles have no changed meaning; their content and update dates are preserved.
- Run content-impact against the actual base, build and inspect generated output.
  Check the deployed pages and feeds before reporting publication complete.

Local validation passed: Astro checked 97 files with zero errors and warnings;
the static build completed. Generated homepage, Engineering, Latest, About, both
updated articles, JSON Feed, RSS and `llms.txt` were checked for consistent counts,
disposition, canonical URLs and retained publication identity. No numerical
calculation or capability contract changed.

## Production completion

- Content revision: `3e6a518b52d83aa52f3783f6a1783d89ea2517c6`.
- Vercel production success status: `55329891493`.
- Recorded completion: `2026-10-01T03:59:39Z`.
- [Successful deployment](https://vercel.com/licklidermvp/website/CujDhKMnqDcLg9yVG332rTuqQm5Y).
- GitHub Actions [CI run 36813006833](https://github.com/licklider-ai/corp-site/actions/runs/36813006833) succeeded.
- The public Engineering outcome section was opened and its rendered counts,
  closure wording and layout verified.
- The metadata-only follow-up records this completion time for the two updated
  articles; it does not create another content update.
