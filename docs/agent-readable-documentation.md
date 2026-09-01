# Agent-Readable Documentation Policy

**Document type:** Canonical site documentation policy
**Authority:** Canonical for documentation placement, human/agent presentation, and machine-readable publication on `licklider.ai`
**Technical authority:** Subordinate to the exact Protocol, verifier, product-contract, and release authorities named below
**Status:** Active — v1.0
**Last updated:** 2026-09-01

---

## 1. Decision

Licklider publishes documentation from one underlying claim boundary for two readers:

- a research agent deciding whether and how to use a verification capability; and
- a researcher or implementer reviewing what the agent asked, what was checked, and
  what remains outside the result.

Human and machine-readable pages may present the material differently. They must not
create different meanings, support boundaries, maturity states, or non-claims.

The public framing is **agent-readable by design**. `LLM-first` may be used as an
internal implementation shorthand, but public copy should describe the observable
benefit: correct discovery, selection, input, stopping, and interpretation.

## 2. Documentation is not a publication class

`/docs/` is a product and technical documentation surface. It is separate from the
Research / Engineering / News taxonomy governed by
[`publication-architecture.md`](publication-architecture.md).

- A documentation page does not appear in Latest merely because it was added or edited.
- A material release, measured documentation result, or reusable engineering method may
  support a separate News, Research, or Engineering article with its own job.
- The documentation page remains the durable usage and boundary reference.

## 3. Authority mapping

The website explains upstream facts; it does not independently create technical
semantics.

| Subject | Authority |
| --- | --- |
| Protocol, Record, interpretation-bundle, public check, refusal, and verification-report semantics | `licklider-ai/nomue-protocol` |
| Released local verifier behavior, package version, commands, and exit codes | `licklider-ai/nomue-verifier` |
| Agent-callable product behavior, clarification, product-side admissibility, execution, and next actions | Current versioned contract in `licklider-ai/nomue-app` |
| Comparative evaluation method, runs, and results | `licklider-ai/nomue-evaluation` |
| Reader-facing explanation and machine-readable site routing | `licklider-ai/corp-site` |

When an upstream authority and the website conflict, publication or update is blocked.
The conflict is a documentation defect; it must not be resolved by informal
interpretation.

Private product authority may support a bounded public product statement only after the
statement is intentionally approved for publication. The website must not expose
private implementation details merely because they exist in the authority source.

## 4. Required status separation

Every capability-facing page must distinguish, when applicable:

1. **Current public support** — exact released or published artifact, version, maturity,
   and scope.
2. **Product development or release preparation** — implemented or reviewed work that is
   not yet a public capability.
3. **Successor work or RFC** — proposal and review, not current support.
4. **Platform direction** — the intended product category, not evidence of implementation.

A roadmap, RFC, closed development goal, passing test, or private runtime must not be
presented as current public support.

## 5. Required capability-document order

A capability or executable-artifact page should use this order:

1. concrete title and one-sentence purpose;
2. current status, version, and maturity;
3. when to use it;
4. when not to use it;
5. required input and declarations;
6. execution or invocation example, when one is public;
7. possible outcomes and next actions;
8. common misuse patterns or facts that must not be inferred;
9. limits and explicit non-claims; and
10. public authority and evidence links.

Concept pages may adapt the order, but must expose whether they describe a public
artifact, a product contract, or an intended interaction class.

## 6. Vocabulary rules

Documentation must keep materially different states separate. At minimum, it must not
collapse:

- execution and verification;
- clarification and a failed check;
- unsupported scope and evidence of no effect;
- inadmissibility and internal failure;
- safe refusal and a numerical answer;
- one scoped passing check and an overall scientific verdict; or
- `not asserted` and `passed`.

Public pages may use ordinary-language labels before exact controlled terms. The exact
term must remain recoverable where it affects machine behavior or interpretation.

Do not write that Licklider owns or defines how the industry must speak. Explain that
the distinctions are published so agents and researchers can understand the same
boundary.

## 7. Machine-readable publication

The site provides:

- `/llms.txt` — small curated site-level discovery index;
- `/docs/llms.txt` — small documentation-specific discovery index;
- `/docs/index.md` — Markdown documentation entry point;
- `/docs/{slug}.md` — Markdown alternative for each agent-facing document; and
- `/docs/examples.json` — normalized executable and selection-boundary examples.

The HTML version of a documentation page advertises:

- its Markdown alternative with `rel="alternate"` and `type="text/markdown"`; and
- the most specific applicable `llms.txt` with `rel="describedby"`.

`llms.txt` is a discovery index, not a duplicate of the complete site. Keep it small,
state the material boundaries near the top, and link to the relevant Markdown detail.

## 8. Examples

Every example identifies:

- a stable example ID;
- whether it is executable today or only a selection-boundary example;
- the capability and version, when applicable;
- the input or scenario;
- the expected action or routing result;
- prohibited silent substitution or inference, when applicable;
- the interpretation boundary; and
- public source evidence for executable examples.

An HTML comment such as `<!-- llm:example -->` or a `data-llm-example` attribute may be
used as a build or extraction marker. It is not treated as a cross-vendor standard or as
the only way an agent discovers the example. The JSON example set is the normalized
machine-readable surface.

Executable examples must be copied from or tested against current public artifacts.
Conceptual product examples must say that they are not public API requests.

## 9. Source reuse and drift control

Stable website facts used by multiple pages live in `src/data/site-facts.ts`.
Agent-facing document structures and machine representations live in
`src/data/agent-docs.ts`.

HTML, Markdown, `llms.txt`, and JSON should be generated from these shared structures
where practical. Do not maintain separate hand-written versions of an exact support
boundary or example when one structured source can produce both.

The website source remains explanatory and subordinate. A future build integration may
consume released upstream artifacts directly, but it must use exact pins and fail on a
conflict rather than silently selecting a nearby version.

## 10. Required pre-publication check

An agent-facing documentation change is not ready until every applicable answer is yes:

- Is the exact subject, version, maturity, and current availability visible?
- Does the page distinguish current public support, development, RFC work, and platform
  direction?
- Are “when to use” and “when not to use” concrete enough to guide selection?
- Are required scientific declarations kept separate from model inference?
- Are clarification, unsupported scope, refusal, failed checks, and internal failure kept
  separate?
- Is a passing scoped result prevented from becoming an overall scientific verdict?
- Does each executable example point to a current public artifact?
- Is every conceptual example identified as non-executable when no public endpoint exists?
- Do the HTML, Markdown, `llms.txt`, and JSON surfaces agree?
- Do public evidence links support the claims around them?
- Does the site build produce every advertised machine-readable URL?

## 11. Initial public documentation boundary

The September 2026 initial surface includes:

- the verification-call concept;
- use of the public Release 1 local verifier;
- explanatory decision vocabulary;
- executable verifier examples and product-selection examples; and
- current limits and non-claims.

It does not publish an API, MCP endpoint, or installable Agent Skill. Those surfaces are
added only after their exact public product identity, version, availability, and
authority are established.
