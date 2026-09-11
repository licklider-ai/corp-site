# Latest-to-Blog selection assessment — September 11, 2026

**Record type:** Dated editorial selection; not a second policy or a publication approval.<br>
**Policy:** [Blog editorial policy v1.1, sections 4.1–4.3](../README.md#41-threshold-for-a-new-blog-article).<br>
**Inventory input:** corp-site main `469ed3796093f22b3a1c38c3a44a56cdfad8500c`.<br>
**Responsible role:** Site editorial steward; author-side selection and self-review.

## Scope and result

The complete `src/data/publications.ts` inventory contains **33 items: 23
Engineering, 7 News, and 3 Research**. All registered URLs have an article source.
The selection screen inspected every item's registry metadata, article headings,
opening, and ending. Candidate-bearing passages were read in more detail,
including the method-identity, multiple-comparison, control/best, approximation,
batch-selection, Record, numerical-evidence, factorial-scaling, and welfare notes.
Relevant `src/data/agent-docs.ts` usage and interpretation sections were also checked.
This is not a new review of all original papers, an independent scientific review,
a reproduction run, or a refresh of every upstream issue's status.

**Recommendation:** four distinct Blog commissions are ready for drafting within
the boundaries below; two additional themes are deferred until their stated gaps
are resolved. No existing article is recommended for migration or reclassification.
All 33 remain useful in their current evidence or announcement roles. The four
commissions are not four articles per source family and are not a permanent quota.
Selection readiness does not mean that an unwritten article has passed B01–B12.
Public Blog integration is still pending and does not block drafting.

## Selected commissions, in suggested order

### C01 — What to decide before asking an agent to compare several groups

- **E01:** A researcher is preparing a multi-group analysis request for an agent
  or collaborator and needs to specify the actual question.
- **E02:** The method-name note establishes a source finding; the control/best
  and guarantee notes explain technical distinctions. The Blog adds a usable
  analysis-request brief rather than another explanation that names are insufficient.
- **E03:** Source items 21, 8, and 12 are the core. Relevant sections are
  "The finding", "Decide what ‘better’ is relative to", "An overall test does not
  identify the differing pairs", and "Turning source distinctions into verification
  requirements". Items 7, 9, 14, 18, and 5 are supporting context, not eight articles.
- **E04:** Deliver one annotated hypothetical three-group request distinguishing
  overall, fixed-control, and pairwise questions, plus a brief specifying the
  comparison family, target, required output, declared conditions, and intended
  error criterion. Explain unresolved choices instead of choosing a default test.
- **E05:** This is usable as a human/agent planning aid now. It neither guarantees
  that declarations are true nor claims current multi-group support in nomue.

The source notes themselves already contain practical explanations. If the draft
does not actually deliver the annotated request and distinct decision support,
update or link those notes instead of publishing this Blog.

### C02 — What to keep fixed when moving an analysis into a batch

- **E01:** A research-agent developer is turning separate analyses into a batch
  and wants to detect unintended changes in the intended procedure or comparison.
- **E02:** The existing Mann–Whitney article reports one implementation behavior.
  The Blog adds a workflow-change review: what was meant to remain unchanged,
  what method was actually selected, and which result belongs to which comparison.
- **E03:** Item 15's "The change comes from method selection" and "Why this matters
  for verification" support the core lesson. Item 4 provides a separate label-mapping
  example; its mechanism and reporter-side status must remain distinct.
- **E04:** Deliver a before/after review table for data membership, comparison
  identity, requested and effective method, settings, and result association. Use
  the reported batched/individual example with a short explanation of what to
  investigate when the observed method changes.
- **E05:** The proposal is a development check, not a universal promise that all
  batched and separate procedures are equivalent. The reported exact and asymptotic
  values must not be presented as one correct and one numerically broken answer.
  Do not recommend forcing exact calculation on tied data or claim nomue detects
  either upstream behavior. Recheck versions and upstream disposition when writing.

### C03 — What to send with a statistical verification result

- **E01:** A researcher is handing an existing result and its checks to a
  collaborator who must understand what evidence they can reuse.
- **E02:** Release notes explain availability and Docs explain invocation, exit
  codes, and replay. The Blog adds the sender/recipient handoff and an annotated
  example that distinguishes completed checks from unresolved research questions.
- **E03:** Core item 30, "What anyone can check" and "What this release does not
  establish"; supporting items 11, 20, 22, and 33. Also inspect Docs
  `record-verification`, `mcp-verification` (result and replay), and
  `decision-vocabulary`; avoid rewriting their command reference.
- **E04:** Deliver a human-readable handoff cover note for an existing public
  fixture and its scoped report: exact Record/input identity, check and version,
  covered results, unasserted questions, and recipient's next step. Keep the cover
  note separate from the Protocol schema; no new mandatory Record fields.
- **E05:** Use existing public fixtures for any executable illustration. The
  current hosted release announcement explicitly excludes public Record emission
  for local replay, so it cannot supply an invented hosted-to-local pipeline.
  The handoff note does not establish source-data truth, clinical suitability,
  audit compliance, automatic approval, or a shipped collaboration feature.

### C04 — What agreement between two calculations can establish

- **E01:** A reviewer has two matching numerical outputs and needs to state
  exactly what that agreement supports before relying on it.
- **E02:** The paired-t evidence note describes a numerical proof pipeline; the
  factorial article reports an interval-checker counterexample. The Blog adds a
  reader's comparison record that separates the target, implementation/reference
  dependence, rounding or tolerance, and the property actually checked.
- **E03:** Core items 28, "Why ordinary reference values are not enough" and
  "A second numerical route", and 1, "Matching rounded answers does not prove an
  interval is valid". Items 23, 25–27, and 31 provide historical background,
  not new evidence that the candidate is a released capability.
- **E04:** Deliver an annotated table contrasting repeatability, two-route
  agreement, and evidence that an interval contains its target. Use one published
  bounded example, preserve shared-dependency limits, and include the useful
  positive evidence agreement provides rather than dismissing it.
- **E05:** Do not imply that every research task requires certified final-digit
  arithmetic. State the precision/property the task needs. Do not import unpublished
  nomue-evaluation results or assert a numerical advantage over baseline tools.
  Refresh any status claim about research candidates instead of treating an old
  article's status as the current upstream state.

## Deferred themes and exact revisit conditions

| Theme | Present gap against the threshold | Condition for reconsideration |
| --- | --- | --- |
| H01 — When changing scale does and does not help | E02 is not yet established: items 6 and 13 already explain input loss, calculation error, examples, and scaling limits; a new overview also overlaps C04. A universal rescaling recipe would fail E03/E05. | Define a separate data-import or diagnostic decision with an evidence-backed annotated input/transformation/output example that the existing pages do not already serve. Otherwise link the existing scaling article from C04. |
| H02 — What an unmeasured outcome record does and does not say | A broad missing-data treatment guide would fail E03/E05: item 17 establishes a boundary in three welfare documents, not a missingness model or a recommended analysis. A paraphrase would fail E02. | Narrow the piece to a distinct recording/hand-off example separating observed event, time, action, absent measurement, and unresolved interpretation. Add appropriate sources and review if recommending a statistical treatment; do not introduce clinical or animal-care advice through the example. |

Deferred means that the proposed treatment needs definition or evidence, not that
the underlying research is defective or unimportant. Neither theme is an automatic
fifth or sixth publication.

## Items without a separate Blog commission

Numerical-range and upstream-fix reports (items 2, 19, 24, 29, and 32) remain
evidence records. A list of striking failures, or "a p-value must be in [0,1]",
does not yet provide a distinct new reader action. They can support C04 if a
particular comparison needs them, without each receiving a Blog rewrite.

Release 4's consultation announcement (item 10) remains News. Its current task is
to explain the proposal and invite feedback. A second announcement in Blog adds
no useful action. The same reasoning applies to the other release and consultation
sources even when they are reused as background for C01 or C03.

Do not separately convert every method, bug, numerical table, review closure,
runtime candidate, npm release, or MCP release into a Blog. Preserve each
canonical record; select at the level of the reader's different decision.

## Complete inventory disposition

Each source appears exactly once below. The cluster column is its primary
editorial assignment for this snapshot, not a change to its publication class.
`Evidence only` and `News only` mean no standalone Blog commission. Optional
reuse in another article does not add another inventory entry.

| # | Source article | Current class | Primary cluster | Disposition rationale |
| --- | --- | --- | --- | --- |
| 1 | [Checking factorial statistics without trusting rounded intermediates](https://www.licklider.ai/engineering/checking-factorial-statistics-and-tail-bounds/) | Engineering | C04 | Core: rounded agreement does not establish interval containment. |
| 2 | [A nonzero Studentized-range tail disappears in SciPy](https://www.licklider.ai/engineering/scipy-studentized-range-tail-loss/) | Engineering | Evidence only | A striking tail-loss example alone does not establish a new reader action. |
| 3 | [Exact rescaling can reverse SciPy’s Welch ANOVA decision](https://www.licklider.ai/engineering/scipy-welch-anova-weight-sum-overflow/) | Engineering | H01 | Extreme rescaling witness; no inferred everyday prevalence. |
| 4 | [Renaming treatment groups changes agricolae’s REGW result](https://www.licklider.ai/engineering/agricolae-regw-treatment-labels/) | Engineering | C02 | Separate group-label mapping example; preserve distinct mechanism. |
| 5 | [nomue Protocol opens Release 3 public discussion for independent groups and multiple comparisons](https://www.licklider.ai/news/nomue-protocol-release-3-public-discussion/) | News | C01 | Consultation context, not another announcement. |
| 6 | [What power-of-two scaling can and cannot repair](https://www.licklider.ai/engineering/power-scaling-and-factorial-f-statistics/) | Engineering | H01 | Existing article already explains scaling outcomes and limits. |
| 7 | [What “approximate” means for Games–Howell comparisons](https://www.licklider.ai/engineering/games-howell-approximation-and-guarantees/) | Engineering | C01 | Approximation boundaries support the comparison brief. |
| 8 | [Comparing with a control and comparing with the best answer different questions](https://www.licklider.ai/engineering/comparing-with-control-or-best/) | Engineering | C01 | Core: distinguish the comparison target. |
| 9 | [What must stay fixed in a multiple-testing graph](https://www.licklider.ai/engineering/implementing-multiple-testing-graphs/) | Engineering | C01 | Keep the declared family and rule identifiable. |
| 10 | [nomue Protocol opens Release 4 public discussion for two-factor experiments](https://www.licklider.ai/news/nomue-protocol-release-4-public-discussion/) | News | News only | Consultation invitation already has a concrete action; retain News. |
| 11 | [nomue launches limited Release 1 for agent-callable Welch verification](https://www.licklider.ai/news/nomue-welch-limited-release-1/) | News | C03 | Hosted capability boundary; no assumed Record export path. |
| 12 | [What a multiple-comparison procedure actually guarantees](https://www.licklider.ai/engineering/what-multiple-comparison-procedures-guarantee/) | Engineering | C01 | Core: match the output to its guarantee. |
| 13 | [When floating-point calculations change a tiny factorial effect](https://www.licklider.ai/engineering/floating-point-tiny-factorial-effects/) | Engineering | H01 | Existing article already separates input loss from calculation error. |
| 14 | [Checking multiple-testing procedures against their original papers](https://www.licklider.ai/engineering/checking-multiple-testing-against-original-papers/) | Engineering | C01 | Source distinctions support the brief, not a separate methods series. |
| 15 | [SciPy’s automatic Mann–Whitney U test can change a result when tests are batched](https://www.licklider.ai/engineering/scipy-mannwhitneyu-batch-method-selection/) | Engineering | C02 | Core: batch-wide method selection and a before/after workflow check. |
| 16 | [SciPy t-tests can return p=0 or p=1 after exact rescaling](https://www.licklider.ai/engineering/scipy-ttest-scale-range-loss/) | Engineering | H01 | Extreme t-test scale witness; no universal repair advice. |
| 17 | [What three welfare guidance documents define, and what they leave to statistics](https://www.licklider.ai/research/humane-endpoints-and-the-unmeasured-outcome/) | Research | H02 | Recording boundary is sourced; statistical treatment is not selected. |
| 18 | [Cataloguing every multi-group procedure before proposing any of them](https://www.licklider.ai/engineering/cataloguing-multi-group-procedures/) | Engineering | C01 | Catalogue is evidence organization, not a user checklist. |
| 19 | [A Julia signed-rank p-value above 1, now fixed in a release](https://www.licklider.ai/engineering/julia-signed-rank-pvalue-above-one/) | Engineering | Evidence only | Track the actual released fix; no standalone Blog rewrite. |
| 20 | [nomue Record Verifier MCP release candidate is available](https://www.licklider.ai/news/nomue-mcp-on-npm/) | News | C03 | MCP transport and report identity; retain release announcement. |
| 21 | [Why a statistical method name is not enough](https://www.licklider.ai/research/why-statistical-method-names-are-not-enough/) | Research | C01 | Core: a method name leaves consequential choices open. |
| 22 | [nomue verifier Release 1 candidate is available on npm](https://www.licklider.ai/news/nomue-verifier-on-npm/) | News | C03 | Local package availability; link Docs rather than duplicate installation. |
| 23 | [From numerical bounds to a controlled paired-t execution candidate](https://www.licklider.ai/engineering/bounding-paired-t-arithmetic-and-pvalues/) | Engineering | C04 | Candidate-stage context, not another maturity announcement. |
| 24 | [R’s exact Wilcoxon test can return p-values outside the valid range](https://www.licklider.ai/engineering/r-wilcoxon-exact-pvalue-out-of-range/) | Engineering | Evidence only | Range versus accuracy evidence; optional C04 source, not a separate commission. |
| 25 | [Tracing a paired-t calculation from observations to p-value](https://www.licklider.ai/engineering/tracing-paired-t-from-observations-to-pvalue/) | Engineering | C04 | Execution binding supplies context for what a check establishes. |
| 26 | [Building paired-t numerical tables and input-specific error checks](https://www.licklider.ai/engineering/building-paired-t-tables-and-error-checks/) | Engineering | C04 | Tables and input-specific evidence belong in the same synthesis. |
| 27 | [Testing a paired-t evaluator at floating-point boundaries](https://www.licklider.ai/engineering/testing-paired-t-floating-point-boundaries/) | Engineering | C04 | Boundary examples provide context, not a separate Blog increment. |
| 28 | [Certifying paired-t numerical evidence before protocol support](https://www.licklider.ai/engineering/certifying-paired-t-numerical-evidence/) | Engineering | C04 | Core: numerical references and actual independence limits. |
| 29 | [A SciPy exact Wilcoxon p-value error, fixed upstream](https://www.licklider.ai/engineering/scipy-wilcoxon-exact-pvalue/) | Engineering | Evidence only | Canonical issue/fix evidence; no new user decision from rewriting it. |
| 30 | [nomue Protocol Release 1 Public Draft is now available](https://www.licklider.ai/news/nomue-protocol-release-1/) | News | C03 | Core: scoped Record verification and interpretation boundary. |
| 31 | [Correctly Rounded or Refused — preprint v0.2](https://www.licklider.ai/research/correctly-rounded-or-refused/) | Research | C04 | Preprint background; preserve its scholarly status and distinct scope. |
| 32 | [An extreme-tail sign error in SciPy’s Student-t quantile](https://www.licklider.ai/engineering/scipy-student-t-extreme-tail/) | Engineering | Evidence only | Canonical upstream dependency/fix record; no separate defect-list article. |
| 33 | [nomue verifier Release 1 candidate is now public](https://www.licklider.ai/news/nomue-verifier-release-1-candidate/) | News | C03 | Historical verifier availability and fixtures; preserve original date. |


## Follow-up and validation boundary

Reassess on a new Blog commission, materially new public evidence, or a concrete
reader question. Recheck public availability, upstream status, and cited evidence
at drafting/publication; the snapshot is not a substitute. No original articles,
publication dates, registry entries, feeds, or site routes change in this work.
The new policy and procedure require recording the selection threshold before
future drafting. This assessment recommends topics; it does not itself draft or
publish them.
