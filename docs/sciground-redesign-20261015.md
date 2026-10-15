# SciGround: analysis-to-evidence website redesign

Date: 2026-10-15 UTC. Accountable direction: founder's approved Hero, section
sequence, minimal visual tone, and explicit request to implement the website.
Implementation and adversarial reviews: Codex with separate visual and content
review agents. This is design/content review, not independent scientific validation.

## Scope and sources

The product presentation assumes the completed adopted ADY portfolio. It does not
audit current implementation. Product portfolio commit
`1fd063529b8d6de571578e4b24a8547ff5d09f27` informs the scoped workflows, especially
ADY-012/013/015/016 and ADY-026–029. No private implementation is published.

The founder-approved Hero is “I finished your analysis,” says your AI. Your doubts
say otherwise. The order is Hero → concrete example → report → starting points
→ research fit → verification/public evidence → FAQ/setup.

The synthetic body-weight example intentionally illustrates source correspondence,
not an undetectable biological error. M17 changes from Treatment to its supplied
Control assignment after researcher confirmation; measurements and all 20 IDs stay
fixed. The report uses a shared numerical fixture calculated with SciPy 1.17.0.
These values are an explanatory worked example, not a product-issued verified record.
Source agreement, declared independence, approximation, and causal limits remain distinct.

## Changed and retained surfaces

Homepage, navigation, shared product scope, HTML/Markdown product guides, both
agent discovery indexes, social image, and a new sample report/CSV were updated.
Existing nomue artifacts, Research/Engineering publications, registry dates,
statuses, feeds, and company factual claims remain unchanged in meaning.
The homepage features two recent papers and links to full indexes; upstream totals
remain registry-derived. Eight Latest entries retain their category and date.
No new News item or scientific evidence is claimed for this design change.

## Validation

Actual base: `8c8aa9164b0a3f22597b2af505e43493e3944eb8`.
Content-impact inspection ran before and after the change against this base.
Node 24.19.0 with repository-pinned pnpm 10.33.0; dependency inputs unchanged.
Astro check: 104 files, zero errors/warnings/hints. Build: 83 HTML pages.
Local generated-link audit: 2,006 links, zero missing files/fragments or duplicate IDs.
The dataset review confirms one changed label, n9/11→10/10, consistent means and
Welch intervals. No mortality, general batch/RNA-seq, or arbitrary-code claims added.

## Adversarial visual review

Source review identified and corrected:
- Small mobile chart labels: increase SVG label scale and report caption sizes.
- Chart title overlapping the top gridline: move the unit title outside the SVG.
- Generic evidence disclosure: add a direct, keyboard-accessible M17 source action
  that opens and focuses the corresponding source row.

The Vercel preview for PR82 is login-protected in the available cloud browser.
Its access controls were retained. CI and Vercel builds passed. Rendered review
continues on the authorized production site; record its observations below.

## Rendered production review

PR82 merged as `726d344ac8d194f0e76aee78105e30ad5a4afe28`; Vercel production
`HQvHvTgLv2zaAVPmN3JTYsWwEbYp` reached success. The canonical live homepage
rendered the new Hero and sample. Review used ten desktop viewport screenshots,
covering the Hero, mismatch and correction states, report, expanded source evidence,
report-to-start transition, research fit, research evidence, FAQ, and closing CTA.
The separate visual reviewer found no remaining blocking desktop defect.

Observed refinements applied in the follow-up: demo status/assumption text now has
a 13px base size, step labels 12px; the final demo state links directly to the report;
Latest has an explicit disclosure indicator.

Interaction checks passed: the two confirmation steps lead to the corrected
Control assignment; M17 source opens evidence and focuses the correct row; FAQ
opens; the final CTA reaches the actual MCP/API guide; its sample link opens the
full report with all 20 source rows. No horizontal overflow at the observed desktop
viewport (1363px).

Limitations: the cloud browser exposes no viewport resizing, so responsive CSS was
reviewed but mobile rendering was not visually approved. Full-page screenshots
timed out; section screenshots supported the whole-page review. No search-console
recrawl is claimed.
