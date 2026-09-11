# Blog working record — before-asking-an-agent-to-compare-groups

- Commission: write the selected multi-group article; make thumbnails mandatory for Blog and provide the article image position. Complete a reviewable draft. Website publication and full Blog taxonomy integration are outside this delivery.
- Input repository: `658ebeca13cd336de5f60491e282f12105059e8f`; Blog policy v1.2 proposed in this change.
- Accountable role: site editorial steward. Drafting, diagram creation, and adversarial self-review performed by the same AI assistant (Codex). No independent reviewer or human scientific review is claimed.
- Language: English, the canonical site's default; Japanese commission title: 「AIに多群比較を依頼する前に、決めておくこと」.
- Primary reader: researcher preparing to ask an AI agent to analyse a control and two treatment groups.
- Reader action / pillar: specify and review an analysis request; Read and judge results.
- Canonical draft: [article.md](article.md), SHA-256 `14ce80a824222336389c3b37fe8a393f348891c7652eea768921e846fd09b076`.
- Reading preview: [preview.html](preview.html), generated from article.md with the original SVG embedded. A review convenience, not a second editorial source or a deployed Blog page. Regenerate when the draft changes.
- Intended eventual slug: `/blog/before-asking-an-agent-to-compare-groups/`; not an available URL, publication date, or registry entry.

## Selection and overlap

| Gate | Evidence and disposition |
| --- | --- |
| E01 | Researcher must choose an overall, control-focused, or all-pairs question before accepting an agent's proposal. Opening and question table name that task. |
| E02 | The closest Research note explains why method names lack sufficient meaning; the two Engineering notes establish bounded guarantees and distinct reference targets. This draft adds a complete editable request, an explanation of each request block, and a reply-review checklist. Existing Docs specify product usage and interpretation; Thesis explains company purpose. None supplies this multi-group request. |
| E03 | Reuse the three inspected public reports within their recorded scope; add official NIST explanations and SciPy documentation for the narrow claims listed below. No new guarantee theorem, historical attribution, benchmark, or software reproduction. |
| E04 | Delivered a three-question table, a six-part hypothetical request, annotations, and specific follow-ups for an incomplete or changed proposal. |
| E05 | The request is general advice and explicitly untested as an AI prompt. It needs no claimed nomue multi-group feature; it permits unresolved facts and discussion of alternatives. |

Outcome: combined synthesis C01 from the September 11 assessment. Preserve all existing source URLs, dates and classifications. This article does not reclassify or rewrite an existing Latest item.

## Sources and claim boundaries

Checked September 11, 2026. The three corp-site article bodies were inspected at the input repository commit; the method-name note was also retrieved from the public site. The authoritative content used for the other two reports is their complete checked-in article body. Browser retrieval of those two live URLs failed; no live deployment check is claimed for them. Source reports are reused as accepted evidence; no new original-paper inspection or reproduction was conducted. Required public-communication, product-claim, current precedence, and controlled-terminology authorities were consulted through authorized access. No private source text or implementation evidence is reproduced here.

| Claim | Kind | Inspected source and exact location | Boundary |
| --- | --- | --- | --- |
| A method name leaves the family, error criterion and conditions unspecified; FWER and FDR answer different questions | Fact, with plain-language explanation | `src/pages/research/why-statistical-method-names-are-not-enough.astro` at input commit, `#finding`, `#primary-sources`, `#limits` | Do not infer a preferred default, universal guarantee or software support. FDR definition includes zero rejections. |
| Overall rejection does not identify a specific pair; strong control includes partial-null configurations | Fact | `src/pages/engineering/what-multiple-comparison-procedures-guarantee.astro`, `#dependence` and `#comparisons`; NIST prc47, opening “What to do after equality of means is rejected” | No mandatory omnibus pre-test or proof of equality after non-rejection is claimed. NIST's broader “finished with the analysis” wording is not adopted. |
| A fixed control differs from a target based on the best treatment; tests and intervals require distinct interpretation | Fact | `src/pages/engineering/comparing-with-control-or-best.astro`, `#question`, `#control`, `#best` | No implementation of the historical procedures, general existence theorem, or unique-winner guarantee is asserted. |
| Simultaneous coverage concerns a specified set of statements | Fact | [NIST prc473](https://www.itl.nist.gov/div898/handbook/prc/section4/prc473.htm), “Applies for a finite number of contrasts” and “Interpretation of Bonferroni inequality”, retrieved 2026-09-11 | No calculation or default-method recommendation. Do not adopt the page's suggestion to choose the narrowest interval after inspecting outputs. |
| The documented Dunnett implementation has independence, normality and equal-variance assumptions | Fact | [SciPy dunnett documentation](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.dunnett.html), page identified as v1.18.0, Notes assumptions 1–3, retrieved 2026-09-11 | Describes documentation, not a new execution test or endorsement. The version-specific URL could not be retrieved; the inspected current documentation URL is used instead. |
| Write the family, units, experimental meaning, sidedness, criterion and requested outputs; ask when facts are unknown | Editorial recommendation | Practical synthesis of the above distinctions; constructed example in `## An example request to adapt` | No claim of observed time savings, user adoption, or agent compliance. The example assumes independent units; this must be replaced with actual facts. |
| 0.05 familywise level and 95% simultaneous coverage | Illustrative choices | Explicitly hypothetical request | No universal threshold, posterior probability, scientific importance, or real experimental result is implied. |

Additional overlap inspection: `src/data/publications.ts`, relevant `src/data/agent-docs.ts` descriptions of declarations and scoped outcomes, `src/pages/thesis.astro`, and `src/data/site-facts.ts`. No product release/support statement is added; product version refresh is not needed to substantiate this general request template.

## Thumbnail and UI

- Actual asset: [thumbnail.svg](thumbnail.svg); 1440 × 810; original vector diagram created for this commission. No third-party image, font file, or experimental data is embedded. Text uses system font fallbacks. SHA-256 `acfddeb3a14283efc5e94af23130b8c3d5fa0e0e9674988a9622f3a3509f0464`.
- Alt: “Three questions for groups A, B, and C: an overall test of equal means; B and C each compared with control A; or all three pairs compared.”
- Caption: “The same three groups can support different questions. Lines identify requested comparisons; they do not represent observed differences.”
- Image content: three panels. Overall has a boundary around A/B/C and no pairwise edge; control has A–B and A–C only; all-pairs adds B–C. It depicts question structure, not measured differences, significance, causality or a treatment effect.
- Placement: after title and summary, before the opening prose. The existing `src/layouts/PublicationLayout.astro` already provides this position through `slot="thumbnail"` and responsive image styles. No duplicate runtime layout is needed for draft delivery.
- Existing Latest/home lists are untouched and show no article thumbnails. The proposed Blog policy requires that behavior at future integration.
- Render review: SVG converted to PNG with Inkscape and visually inspected for labels, edges, containment, and clipping. Essential content is repeated in the article table. The HTML reading preview embeds the SVG and includes responsive widths. No browser/mobile visual QA or live Blog render is claimed.
- Future integration: place the asset at a served path, use the shared named slot, enforce a required Blog thumbnail during registry validation, and inspect the final article at desktop/mobile widths. No runtime Blog-thumbnail gate exists yet.

## Adversarial self-review

| Check | Result | Reason and evidence |
| --- | --- | --- |
| B01 | PASS | Opening, comparison table and proposal-review section give one researcher task and action. |
| B02 | PASS | E01–E05 above; request and annotations deliver the distinct contribution. |
| B03 | PASS | Claim ledger maps factual distinctions to inspected reports/official documentation. Recommendations and the invented planning scenario are labelled. |
| B04 | PASS | No current nomue support, availability, new API, or end-to-end workflow is asserted. SciPy assumptions are tied to inspected documentation. |
| B05 | PASS | Experimental declarations, method conditions, numerical execution and study judgment remain distinct; final scope paragraph states the limit. |
| B06 | PASS | Missing facts prompt questions; unavailable requested outputs prompt explanation/alternative; an incomplete or altered response prompts different follow-up. No Protocol outcome codes are invented. |
| B07 | PASS | No numerical performance comparison or stress case. Differences between statistical questions are not a product superiority claim. |
| B08 | PASS | Hypothetical example and untested prompt explicitly identified. AI drafting and self-review recorded here; no testimonial or independent review claimed. |
| B09 | PASS | Concrete opening, practical outputs, restrained headline. Necessary example context is stated adjacent to the request; general non-claims are consolidated at the end. |
| B10 | PASS | No forced product CTA; no assertion of multi-group nomue support. Closing action is to write comparisons and unknown facts. |
| B11 | PASS | Draft, asset and review use public-safe material. No private authority content, personal data or correspondence appears. |
| B12 | PASS for draft delivery | Source and local-link checks, Markdown rendering and SVG checks completed. No production files or registry changed; publication dates, full Blog integration, final rendering/build/feed checks and website publication remain pending. This is not publication readiness. |
| B13 | PASS for draft delivery | Actual SVG, alt, dimensions, provenance and placement delivered. Named slot verified in existing layout; Latest remains unchanged. Final served-asset and integration validation are pending. |

Repairs during self-review:

1. Explicitly distinguish a requested comparison family from whole-study multiplicity.
2. Give FDR's zero-rejection convention; explain strong FWER rather than leave jargon in the example.
3. State independence within/across groups and no shared clustering as hypothetical facts, rather than infer independence from distinct rows.
4. Ask for the interval construction separately; do not assume adjusted p-values automatically provide compatible intervals.
5. Restrict the “changed family” example to silently including B versus C in the adjustment family; separately labelled additional analyses need their own interpretation.
6. Replace an unverified version-specific SciPy URL with the inspected official reference page.
7. Identify the prompt as untested and the diagram as question structure, avoiding implied experimental or deployment evidence.

No unresolved scientific finding blocks this draft's bounded lesson. The remaining work is article review and authorized website integration. Upstream checklist: exact object is a Blog explanation; scientific and headline checks pass within the ledger; release, novelty, benchmark, adoption, layer-1 support and outreach checks are inapplicable because none is claimed. Site pre-publication metadata and cross-surface checks remain pending for website publication.

## Validation and maintenance

Performed: Markdown rendered with the installed `marked` parser; preview has one title, one image and one comparison table; relative image and sibling-file links resolve; internal article targets/fragments matched against source files; SVG parses and its 1440 × 810 dimensions match the draft; diagram raster inspected; B01–B13 and E01–E05 checked; Git whitespace validation. No runtime source changes or package changes.

Not performed: executing the example with an AI agent or statistical package; new primary-PDF review; independent review; browser visual QA; public Blog deployment; production build/feed checks for a new Blog route. The example is a planning request, so no synthetic p-values or performance tests were created.

Update triggers: correction to a cited source, change in relevant implementation documentation, actual reader feedback about a missing request field, change to the thumbnail policy, or authorization to integrate/publish. Responsible maintainer: site editorial steward. On publication, refresh sources, carry the image into the shared slot, assign the actual date, add one canonical Blog entry through the integrated registry/index/feeds, and verify generated presentation.

Final delivery: **DRAFT_READY**, with article.md, thumbnail.svg, preview.html and this record retained together in the repository workflow. No website publication claimed.
