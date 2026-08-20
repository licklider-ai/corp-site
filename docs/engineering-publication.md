# Engineering Publication Mechanics

**Document role:** publication mechanics only  
**Status:** Active — initial foundation  
**Applies to:** Engineering articles published from this repository  
**Public communication authority:** external/private upstream Public Communication policy  

## 0. Authority boundary

This document does not define what Licklider or nomue may claim publicly.

Public-claim rules — including evidence discipline, version and maturity wording, comparison claims, scientific claims, third-party defect disclosure, corrections, and release/launch terminology — are governed by the upstream Public Communication authority maintained with the product governance sources.

If this document and the upstream Public Communication authority appear to conflict, stop publication and resolve the conflict upstream. Do not reinterpret this document as an alternate communication authority.

This document defines only:

- the Engineering content schema;
- publication states;
- article classes;
- automated repository checks;
- the minimal editorial workflow;
- static-site rendering mechanics;
- automatically measurable publication signals.

## 1. Purpose

The Engineering surface is the durable public evidence surface for how Licklider builds, tests, and reasons about nomue.

It is not a content-marketing quota system. The repository does not require a publication cadence, monthly article count, manual citation hunt, manual CRM tagging, PR-reuse ledger, or recurring human audit.

The normal path is:

```text
real engineering work
→ public-worthy evidence exists
→ article draft
→ automated repository checks
→ independent AI review
→ one human publication approval
→ merge / publish
→ analytics collected automatically when available
```

Human operations are deliberately minimized. A new recurring manual operation requires a concrete failure mode that cannot reasonably be handled by code, repository metadata, source control, or automated analysis.

## 2. Initial information architecture

Only `Engineering` is in scope for this foundation.

Do not create an empty `Research` collection in advance. Research publishing should receive its own design only when an actual research publication candidate exists.

Company/product announcements remain distinct from Engineering content.

The initial public URL namespace is:

```text
/engineering/
/engineering/<slug>/
```

The URL namespace is stable. The visible editorial brand is intentionally not frozen as a separate "Licklider Engineering" product identity. Article metadata and copy should make the connection to nomue clear when the article is about nomue.

## 3. Article classes

Engineering articles use one of four initial `kind` values.

### `explainer`

Architecture, design rationale, verification boundaries, implementation concepts, or technical explanations.

Typical evidence burden: public references as needed; no benchmark-specific fields required.

### `measurement`

Numerical experiments, benchmark methodology, performance measurements, oracle comparisons, or other measured technical behavior.

Additional publication metadata required:

- at least one `softwareVersions` entry;
- at least one `publicEvidenceRefs` entry.

### `postmortem`

A technical failure, incident, incorrect assumption, or design correction in Licklider/nomue work.

The article must distinguish observed facts from causal hypotheses and preserve substantive corrections.

### `third_party_issue`

A defect, regression, unexpected behavior, or technical issue involving a third-party project.

Additional publication metadata required:

- at least one `upstreamRefs` entry;
- at least one `publicEvidenceRefs` entry.

Public wording, attribution, disclosure order, and whether publication is allowed are governed by the upstream Public Communication authority, not by this document.

## 4. Content schema

The build-time schema lives in `src/content.config.ts`.

### Required for every entry

- `title`
- `description`
- `kind`
- `status`

### Automatically defaulted

- `authors` defaults to `Licklider`;
- evidence/reference arrays default to empty arrays;
- `corrections` defaults to an empty array.

### Conditional requirements

- non-draft content requires `publishedAt`;
- `measurement` requires `softwareVersions` and `publicEvidenceRefs`;
- `third_party_issue` requires `upstreamRefs` and `publicEvidenceRefs`;
- `corrected` requires at least one correction record;
- `superseded` requires `supersededBy`;
- `updatedAt`, if present, must not precede `publishedAt`.

Do not add frontmatter fields for facts already recorded reliably by Git/GitHub, such as reviewers or review completion booleans.

Do not add `claimReviewed`, `technicalReviewed`, `evidenceStatus`, manual citation scores, or manually maintained related-article lists.

A new field should satisfy at least one of these tests:

1. it changes rendering, discovery, or machine validation; or
2. it is required to preserve a durable public correction/supersession state.

## 5. Publication states

The initial states are:

- `draft`
- `published`
- `corrected`
- `superseded`
- `withdrawn`

`draft` is never part of the public listing or generated public article routes.

`corrected`, `superseded`, and `withdrawn` are durable states. Published material is not silently deleted merely because its conclusion later changes.

Rendering must make these states visible to readers when they are used.

## 6. Article structure

The following is a default reasoning structure, not a mandatory visual template:

1. What happened / what problem is being examined?
2. Why does it matter?
3. How was it found or investigated?
4. Method / environment / versions, when material.
5. Evidence / measurements.
6. Root cause or current hypothesis.
7. Limitations / what this does not establish.
8. What happens next.
9. Public references / artifacts.

Writers may omit or merge sections that are not useful. The structure must not turn every Engineering article into a paper-shaped document.

Observation and inference must remain distinguishable. Unconfirmed root cause is written as hypothesis, not fact.

## 7. Editorial workflow

### Default path

```text
draft
→ automated schema + publication hygiene checks
→ independent AI review
→ one human publication approval
→ merge
```

There is no routine requirement for multiple human reviewers.

### High-risk path

When the upstream Public Communication rules identify a claim as high risk — for example a scientific claim, security-sensitive disclosure, third-party defect, superiority claim, novelty/first claim, or material benchmark comparison — the review should add automated/AI review depth before the same human final approval:

```text
primary-source verification pass
→ adversarial communication review
→ one human publication approval
```

A specialist human review is an exception used when the claim itself genuinely requires domain expertise that cannot be established from existing authoritative evidence.

## 8. Automation-first operating rule

Do not create recurring human work merely to maintain the publication system.

Specifically, the initial system does not require:

- manual external-citation counts;
- quarterly article-origin tagging in CRM;
- manual PR-reuse counts;
- publication-cadence enforcement;
- quarterly risk-class spot audits;
- hand-maintained related-content graphs;
- manual correction metrics.

Where a useful signal can be obtained automatically, prefer automated measurement. Where it cannot, accept incomplete measurement unless the missing information blocks a real decision.

## 9. Publication hygiene lint

`pnpm publication:lint` performs repository-level checks that are safe to define locally because they concern publication mechanics rather than claim semantics.

The lint may block:

- public article files containing machine-local paths or sandbox URLs;
- a `published`/`corrected`/`superseded`/`withdrawn` source containing unresolved `TODO`/`TBD` markers;
- obvious references to private product-repository paths in public article source.

It must not duplicate the upstream Public Communication vocabulary or attempt to become a second claim-policy engine.

Claim semantics are reviewed against upstream authority.

## 10. Metrics

Primary publication signals should be automatically collectible.

### Primary signal A — Engineering → nomue assisted conversion

When analytics are available, measure transitions from Engineering articles to relevant nomue/product/GitHub/contact calls to action.

This answers whether technical credibility is creating product or strategic interest.

### Primary signal B — qualified external traffic

Measure automatically observable external referral and technical organic-search traffic to Engineering articles.

This is a directional signal, not a proxy for scientific authority.

### Automated health metrics

May be observed without becoming targets:

- article pageviews;
- engaged time;
- CTA click-through;
- organic impressions;
- referring domains;
- publication PR open-to-merge time where GitHub exposes it automatically.

Do not introduce manual collection to fill gaps in these metrics.

## 11. Cadence

There is no minimum publication cadence.

Engineering is an evidence archive / technical essay surface, not a newsroom promise. Do not publish filler to create activity or keep a monthly schedule.

The site should avoid UI language that implies a fixed cadence (`weekly`, `latest every month`, etc.).

## 12. Technology boundary

Initial implementation:

- Astro static output;
- Astro Content Collections;
- Markdown content;
- Git/GitHub editorial workflow;
- Vercel/static deployment already used by this repository;
- no CMS;
- no SSR requirement;
- no publication database;
- no comments/reactions system.

MDX is not added until an article has a concrete requirement that plain Markdown cannot satisfy. This avoids adding a dependency before it has value.

## 13. First-publication gate

The Engineering routes should not be promoted in global navigation until at least one article is actually publication-ready under the upstream Public Communication authority.

Infrastructure may exist before the first article. Empty-category promotion should not.

Before the first public Engineering article:

1. automated schema checks pass;
2. `pnpm publication:lint` passes;
3. the article has completed an independent AI review;
4. current upstream Public Communication rules have been applied;
5. one human has explicitly approved publication.
