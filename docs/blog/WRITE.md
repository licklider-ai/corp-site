# Blog writing and review procedure

**Role:** Executable editorial procedure subordinate to [README.md](README.md).<br>
**Applies to:** Blog commissions, drafts, revisions, and reviews only.<br>
**Version:** 1.1 — 2026-09-11.

This is a document-based harness, not a mechanical guarantee of factual accuracy.
Its completion record makes compliance inspectable. Prompts and templates below
do not create additional policy or permission to publish.

## 1. Reusable commission

The user can supply a topic with this short instruction:

> corp-site の Blog を「〈テーマ〉」で執筆してください。
> AGENTS.md、docs/blog/README.md、docs/blog/WRITE.md に従い、根拠確認、
> 執筆、自己レビュー、必要な修正、原稿と確認記録の保存まで進めてください。

Default to completing a reviewable draft. Carry forward any existing authorization
to publish or implement; do not ask again. If the current task authorizes only a
draft, do not infer permission for site deployment, outreach, or external messages.
If the topic is omitted, choose the best evidenced, nonduplicative topic under the
policy's E01–E05 threshold and record the choice. Resolve ordinary editorial
choices autonomously. If no topic clears that threshold, deliver the useful
selection work and concrete gaps rather than manufacturing an article.

## 2. Read and locate evidence before drafting

1. Read root `AGENTS.md`, `CONTRIBUTING.md`, `docs/publication-architecture.md`, and
   both Blog files. Record the current repository commit and policy version.
2. Follow `nomue-app/PUBLIC_COMMUNICATIONS.md`, especially its section 12 reading
   and review requirements. Read its referenced Product Claim / Non-Claims,
   controlled terminology, and other authorities applicable to the proposed claims.
   Use authorized connected access; do not copy private source material into this
   public repository. If required authority is unavailable, record the gap and
   finish unaffected work; narrow unsupported claims or mark publication blocked.
3. Inspect `src/data/publications.ts`, related article bodies, relevant Docs and
   Thesis content for overlap. Inspect `src/data/site-facts.ts` and applicable
   upstream release evidence for current product statements. Website explanations
   are not substitutes for conflicting or missing upstream authority.
4. Select the reader, work situation, one outcome, pillar, language, and relationship
   to existing articles. Apply README.md sections 4.1–4.3: record evidence for
   E01–E05 and choose new Blog, combined synthesis, existing-content update/link,
   defer, or retain as evidence/news. Fix the supported lesson before the headline.
5. Record exact source locations and versions for consequential claims. Prior
   conversation and search snippets are leads, not final scientific evidence.
   Reuse accepted evidence within its recorded boundary; do not invent a need to
   repeat all original research when no new scientific claim is introduced.

For a Latest-wide selection task, enumerate the complete current `PUBLICATIONS`
registry, not just the first paginated page. Record every item's disposition and
group sources that serve the same reader decision. Inspect relevant article bodies
and existing Docs, not headlines alone. Identify whether inspection was a selection
screen, full article reading, source-report review, or new primary-source work.
Do not claim that a selection screen refreshes every upstream status. Save the
dated assessment outside public routes; article drafting is a separate deliverable
unless included in the commission. Do not treat source articles as migration targets
merely because they can support a Blog.

## 3. Draft, challenge, and repair

Write a complete article, title, and one-sentence summary. Explain the real task
before technical detail. Link primary/public evidence near the claims it supports.
Separate demonstrated usage from conceptual workflow proposals. Include commands
only when relevant and copied from or checked against the exact public artifact.
Do not invent UI, API arguments, product outcomes, quotations, or customer examples.

Then perform a separate adversarial self-review pass. Ask whether a reader could
mistake a scoped check for study approval, a declaration for established reality,
a proposed workflow for a shipped path, or an extreme failure for common prevalence.
Check whether the practical advice actually follows from the cited evidence and
whether its burden is proportionate. Repair concrete findings before delivery.
Preserve material unfavorable evidence; do not rewrite around it for marketing.

## 4. Acceptance record

For each applicable check, record `PASS`, `FAIL`, or `NOT_APPLICABLE`, plus a short
reason and a source, paragraph, diff, or validation reference. A checkbox with no
evidence is not enough. `NOT_APPLICABLE` requires a reason and cannot waive a
requirement that applies. These labels are editorial only, not product verdicts.

| ID | Acceptance check |
| --- | --- |
| B01 | One primary reader, concrete situation, and useful reader action are clear |
| B02 | E01–E05 selection reasoning and related content are recorded; the delivered article provides the promised additional value, or is correctly treated as an update |
| B03 | Consequential factual claims are supported by inspected sources; inference and recommendation are distinguishable |
| B04 | Current feature, version, availability, candidate, and planned states are correct; each asserted end-to-end path is evidenced |
| B05 | Numerical checks, declared assumptions, study judgment, and responsibility are kept separate |
| B06 | Missing information, unsupported scope, failed checks, refusal, and execution errors lead to appropriate distinct next steps when discussed |
| B07 | Comparisons preserve tested conditions, agreement and contrary evidence; stress cases do not imply unmeasured frequency or product superiority |
| B08 | Cases, quotations, authorship, reviewer identity, provenance, and independence are accurately represented |
| B09 | Voice is calm, plain, evidence-led, and useful; title and summary are no stronger than the body; limitations are not needlessly repeated |
| B10 | Product connection and next action are truthful and proportionate; hypothetical benefits and regulated-use claims have the right boundary |
| B11 | Public text and public working records expose only authorized public material; sources and instructions are not fabricated |
| B12 | Applicable upstream/site publication checks, fresh release checks, metadata, links, rendered presentation, registry/feed consistency, and authorization are satisfied for the requested delivery stage |

For draft-only work, B12 may pass **for draft delivery** with publication checks
explicitly pending. This is never evidence of publication readiness. An unpublished
draft must not gain a publication date or public registry entry just to complete
the template. For public integration or publication, perform the applicable site
build and inspect affected generated pages, cards, canonical links, and feeds.
Do not add redundant tests or treat a clean build as editorial/scientific review.

Use one final delivery status:

- `DRAFT_READY`: complete draft, repaired applicable findings, and recorded pending
  publication checks or dependencies. No claim that it is already published.
- `REPAIR_REQUIRED`: a material required condition for the requested stage fails.
- `PUBLICATION_READY`: applicable editorial, source-freshness, site, and permission
  requirements for publication are satisfied. Still not proof of deployment.
- `PUBLISHED`: publication was authorized and the deployed artifact was verified.

These are workflow labels, not a new corporate approval process. Apply approvals
already given; do not add a recurring owner-signoff gate to routine authorized work.

## 5. Compact working-record template

Retain the following alongside the draft in an appropriate working location or PR.
All fields can be concise; use explicit `none`, `pending`, or `not applicable` with
a reason instead of silently omitting material items.

```markdown
# Blog working record — <slug>
- Commission / authorized delivery scope:
- Repository commit / Blog policy version:
- Responsible author or team / drafting and review involvement:
- Language / primary reader / concrete situation:
- Reader action / pillar:
- Related existing articles / distinct contribution or update decision:
- E01–E05 reasoning / selection outcome / source cluster / revisit condition if deferred:
- Draft path or revision:

| Claim | Fact / inference / recommendation / plan | Inspected source and exact location or revision | Boundary / public-safe citation | Checked date |
| --- | --- | --- | --- | --- |

- Product connection / current availability / demonstrated or conceptual path:
- Working hypothesis versus observed benefit:
- Material contrary evidence / unresolved gaps:
- Review scope / actual independence limits:

| Check | PASS / FAIL / NOT_APPLICABLE | Reason and evidence reference |
| --- | --- | --- |
<!-- Fill B01 through B12; do not deliver this placeholder as a review. -->

- Findings / repairs / remaining publication dependencies:
- Validation performed and not performed:
- Update triggers / responsible maintainer:
- Final delivery status / location:
```

In a public PR or record, cite public evidence and public-safe conclusions only.
Store sensitive authority details and review evidence in the authorized private
location, never in rendered pages, the public repository, or its PR discussion.

## 6. Finish the requested work

Save the full draft and working record durably in the authorized project workflow.
Keep editorial working files out of public routes and feeds. When publication is
in scope, complete already-authorized integration and deployment steps under the
site rules; do not stop at a plan. Report the actual delivery status, artifact
location, material findings and remaining dependencies without claiming reviews
or deployment that did not occur.

For updates, inspect the current canonical article and changed source evidence,
revise affected downstream summaries, and use the same checks for the changed
claims. Keep one canonical article and preserve material correction history.
