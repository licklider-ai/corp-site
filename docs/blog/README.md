# Blog editorial policy

**Document type:** Canonical, Blog-specific editorial policy<br>
**Authority:** Downstream of [site publication policy](../publication-architecture.md)
and its upstream claim authorities; local to corp-site Blog<br>
**Owner:** Site editorial steward<br>
**Status:** Active editorial policy — v1.0; public Blog integration pending<br>
**Adopted:** 2026-09-11

## 1. Scope and authority

This is the single source of truth for Blog purpose, audience, voice, topic
selection, and editorial acceptance. [WRITE.md](WRITE.md) is its execution
procedure, including the reusable commission and review record. Do not create a
second style authority in a prompt, template, article, or personal instruction.

Apply this policy to Blog planning, drafts, revisions, reviews, and Blog-specific
presentation. Do not apply its audience priorities, narrative order, or cadence
to Research, Engineering, News, Docs, Thesis, product pages, or the homepage.
A Blog card or excerpt on another surface retains the Blog article's claim
boundary; this does not turn the containing page into a Blog article.

The authority chain is:

1. Applicable upstream scientific, product, terminology, release, and strategy
   authorities; `nomue-app/PUBLIC_COMMUNICATIONS.md` for public claims.
2. `docs/publication-architecture.md` for site-wide placement, labels, metadata,
   public writing standards, and publication requirements.
3. This policy for Blog-specific editorial choices.
4. `WRITE.md`, then the individual commission, evidence record, and draft.

These are subject-specific authorities, not permission to let marketing redefine
science. Use the authority mapping in
[agent-readable-documentation.md](../agent-readable-documentation.md#3-authority-mapping)
when technical claims arise. Resolve a material conflict at its owning authority;
do not silently override it in Blog copy. Follow the current user's authorization
and do not request an approval already given in the session.

This policy creates no scientific guarantee, supported method, product behavior,
release, industry standard, target-market change, or regulatory qualification.
Package versions and current feature availability must be checked per commission,
not copied into this policy as a permanently current capability list.

## 2. Purpose and reader outcome

Help people using AI in research, and people checking their results, determine
what has been checked, what remains unknown, and what to do next.

Each article must enable one concrete judgment or action in a named work situation.
Show both how to stop an unsupported step and how to continue once the necessary
conditions are met. Explain benefits such as clearer handoffs and less repeated
checking as proposed benefits until use evidence establishes them.

An article should improve a reader's judgment even without nomue. When nomue is
relevant, explain the specific supported contribution, remaining human judgment,
and a proportionate next action. A product mention or sales CTA is not mandatory.
Never force the conclusion that only Licklider can solve the problem.

M&A, valuation, novelty, reach, and engagement are not article acceptance criteria.
Expert trust does not establish adoption, and adoption does not establish a future
acquisition outcome. Do not frame the business as limited to a few specialist
buyers merely because an article serves a narrow reader need.

## 3. Audience

| Priority | Reader and situation | Editorial job |
| --- | --- | --- |
| Primary | Researchers using AI, and collaborators or PIs checking a result before sharing or using it | Make conditions, evidence, unresolved questions, and next steps understandable |
| Primary | Developers integrating research agents or research infrastructure | Explain how scoped checks, requests for information, and unsupported outcomes enter a workflow |
| Expert dialogue | Statisticians, methodologists, and research reviewers | Provide enough precise evidence to challenge the reasoning and design |
| Later domain focus | Clinical, pharmaceutical, CRO, and regulated-workflow specialists | Write domain-specific operational guidance only with appropriate sources, review, and truthful product boundaries |

Choose one primary reader and situation per article; secondary readers must not
turn every piece into a general survey. Retain English-speaking academic users
as the initial adoption context. This policy does not reverse the initial
Clinical exclusion or announce domain expansion. Specialist readers are welcome
without implying the product is ready for their regulated use.

Public Blog prose defaults to English, consistent with the site. A requested
Japanese review draft is legitimate; identify its language and publication intent
in the commission and do not maintain divergent claims across translations.

## 4. Topics and relation to existing content

Use three editorial pillars, not a growing set of public subcategories:

| Pillar | Useful outcome |
| --- | --- |
| Read and judge results | Distinguish checked properties from assumptions and remaining questions |
| Share and operate results | Give the next person or agent enough evidence and context to continue |
| Learn from verification | Derive an actionable lesson from investigation, comparison, failure, or repair |

Cases are a format usable in any pillar. Label constructed, synthetic, and
hypothetical examples accurately. Real customer stories require actual evidence
and permission for attributable details; never invent users, meetings, testimonials,
adoption, or professional experience.

| Existing surface | Its job | Blog's distinct contribution |
| --- | --- | --- |
| Research | Establish what was studied or found | Apply that evidence to a reader's decision |
| Engineering | Explain implementation, reproduction, or technical investigation | Explain what to check or preserve in a work situation |
| News | Announce a material event | Explain implications for a user's practice |
| Docs | Specify current usage and interpretation | Explain when and why a workflow choice is useful; link exact instructions |
| Thesis | Explain the company's enduring rationale | Examine one concrete situation rather than repeating the thesis |
| Latest | Aggregate publications | Discover the single canonical Blog article after integration |

Check overlap by reader question, conclusion, and action, not merely keywords.
Reusing evidence is welcome; paraphrasing an existing article without a different
reader outcome is insufficient. Update or link the existing article when it already
does the job. New research results still need their appropriate evidence surface;
publishing them as Blog does not bypass scientific or numerical review.

Avoid generic AI-future essays, acquisition pitches, technical-report rewrites,
and product promotion without a useful reader decision. No quota requires a
new article when evidence or a distinct purpose is missing.

## 5. Voice and character

Write as a careful researcher or engineer helping the reader inspect a decision.
Be calm, direct, curious, and practically useful. Respect the reader's experience;
do not pose as an inspector warning ignorant practitioners.

- Start with the concrete situation and useful outcome. Explain before introducing
  specialist shorthand. Preserve exact terms when they change interpretation.
- State established facts clearly. Identify inference, recommendation, and future
  design as such. Avoid both exaggeration and excessive defensive caveats.
- Explain what works, then the material boundary and the next useful step. Follow
  the site's limitation-placement rules instead of adding warnings everywhere.
- Use connected paragraphs; tables for real comparisons and lists for real steps.
  Avoid formulaic openings, repeated slogans, inflated adjectives, and forced CTAs.
- Use "we" for documented company work. Use "I" only for an attributable author's
  own experience or judgment. Do not invent a biography or practical experience.
- Identify the responsible author/team through existing metadata conventions.
  Follow [CONTRIBUTING.md](../../CONTRIBUTING.md) for material provenance. Automated
  drafting must not be represented as human review, personal experience, or
  independent assessment.
- Learning, tradeoffs, and changes of mind can show character when relevant to the
  topic. Internal copy-editing history is not reader-facing content.

Prefer a title such as "What does running an analysis twice actually check?" to
the categorical "Running it twice is not independent verification." The article
must distinguish repeated execution, independent implementations or references,
and shared assumptions rather than settle the question with a slogan.

## 6. Claim boundaries specific to these topics

These are editorial distinctions, not new Protocol result codes or product states.

| Topic | Required distinction |
| --- | --- |
| Verification and approval | A scoped numerical or methodological check supplies evidence; it does not approve an entire study or transfer responsibility |
| Declared conditions | Checking a declaration does not establish that the real experiment satisfied it |
| Records and audits | A retained record is not, by itself, a compliant or audit-ready workflow |
| Replay and provenance | Replaying covered calculations does not prove the truth or completeness of source data and experimental history |
| Downstream gates | A next step needs explicit acceptance conditions; a generic passing label is insufficient |
| Refusal and failure | Keep missing information, unsupported scope, failed checks, numerical refusal, and execution errors distinct; map to current exact vocabulary when applicable |
| Value of stopping | Explain why the stop is appropriate and how to continue or route elsewhere; refusal count alone is not quality evidence |
| Independent verification | State the actual separation and shared dependencies; a new chat, another run, or author self-review alone does not establish independence |
| Comparisons | Report the tested conditions and limits, including agreement, no demonstrated gain, and nomue weaknesses when material |
| Numerical thresholds | A p-value crossing a selected threshold is not proof of scientific importance or automatic permission to use a conclusion |

Do not manufacture anxiety or mock upstream projects. A deliberate stress case
does not establish everyday failure prevalence. Distinguish numerical errors from
changes in method selection. Preserve reproduction, contributor observation,
maintainer confirmation, accepted fix, and released fix as separate facts.
Finding an upstream issue does not establish that nomue supports that method or
detects that issue. Do not turn architecture differences into superiority claims.

For operational examples, separate a generally proposed workflow from a demonstrated
nomue workflow. Confirm every connection between components, not just that each
component exists. Never infer that a hosted response can be exported and replayed
locally without evidence for that exact path. Current capability, reviewed candidate,
proposal, and planned work remain distinct. "Audit-ready", regulatory compliance,
and clinical suitability require their own applicable authoritative evidence and
qualified review; omit unsupported claims rather than add a generic disclaimer.

## 7. Article shape and required working record

Use this adaptable order: concrete situation and benefit; relevant evidence;
plain-language explanation; practical judgment or steps; meaningful boundary;
next action. This is not a mandatory set of public section headings. A limits
article may lead with the limit when that is its reader question.

Retain a compact working record using `WRITE.md`: reader/situation, desired action,
overlap decision, claim-to-source mapping, current capability boundary, review
results, publication scope, and update triggers. Keep it outside `src/pages/` and
`public/`; place it in a private authorized workspace when it contains nonpublic
material. This public repository may retain only public-safe records. A source
being accessible to the writer does not authorize exposing it.

Use existing site metadata, visual design, shared layout, and citation conventions.
Dates remain the visible article-header metadata; do not introduce a Blog-only
author/status panel, sidebar, color system, or duplicate capability reference.

## 8. Review and maintenance

Follow the acceptance checks in `WRITE.md`. Ordinary explanation of accepted
evidence needs proportional editorial/factual review. New mathematical, benchmark,
comparative, or regulated-use claims need the applicable additional evidence and
review; reclassifying the article as Blog never lowers those requirements.

An author's adversarial self-check must be called self-review. Record actual
reviewer involvement and independence limits. Do not fabricate additional reviewers
or launch a separate reviewer merely to make a routine article look independent.

Recheck changeable facts on publication day. Record relevant update triggers:
source correction, upstream disposition, package or support changes, broken
instructions, and changes in the assumptions behind the advice. Update the
canonical article and affected summaries, cards, or feeds consistently. Apply
the site policy's distinction between material corrections and copy edits.

As an initial operating hypothesis, aim for two useful articles per month and
review the program after six to eight weeks. This is neither a quota nor a
scheduled automation. Track reader feedback, relevant documentation visits,
attempted use, useful inquiries, and repeat use when observable. Distinguish
views from adoption and hypothesized benefits from measured outcomes.

## 9. Public integration boundary

Editorial use is active immediately. `/blog/`, `/blog/{slug}/`, a Blog publication
class, and Blog discovery are planned integration, not already available features.
The present runtime still supports Research / Engineering / News only.

When integration is commissioned, use one canonical article, a Blog index, and
the existing `PUBLICATIONS` registry for Latest and both feeds. Update taxonomy,
types, navigation, shared layout compatibility, and policy descriptions together;
do not publish a Blog article disguised as Engineering just to fit the old union.
Preserve existing article URLs. A curated first-reading entry point can be added
with the corresponding homepage work; this policy does not install it.

Unlike an event report, a Blog can justify a new article through a distinct,
evidence-backed reader action without a new release or research event. This local
rule is recognized in publication policy section 11; it does not change the
new-article criteria for other publication classes. Drafting can finish before
public integration; report any remaining delivery dependency accurately.
