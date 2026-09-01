# Public Information Architecture and Publication Taxonomy

**Document type:** Canonical site publication policy  
**Authority:** Canonical for placement, labels, and required metadata on `licklider.ai`  
**Claim authority:** Subordinate to `licklider-ai/nomue-app/PUBLIC_COMMUNICATIONS.md`  
**Outreach authority:** Media outreach is governed separately by `licklider-ai/nomue-pr`  
**Status:** Active — v1.4<br>
**Last updated:** 2026-09-01

---

## 1. Decision

Licklider publishes through three primary classes:

| Primary class | Question answered | Canonical index |
| --- | --- | --- |
| **Research** | What did we study or find? | `/research/` |
| **Engineering** | What did we build, debug, measure, or learn in implementation? | `/engineering/` |
| **News** | What externally meaningful event happened? | `/news/` |

`/latest/` is the chronological view across all three classes. The global header links to
**Latest**, rather than listing all three classes. The class indexes remain canonical,
and every item in a mixed list must show its primary class.

`/rss.xml` (RSS 2.0) and `/feed.json` (JSON Feed 1.1) are subscription views of the same
publication registry. They must be generated from `PUBLICATIONS`, linked through HTML
feed-discovery metadata, and must not maintain a separate list or stronger wording.

An item has exactly **one primary class**. It may be linked from another index, but duplicate canonical articles are not created.

These classes describe the nature of the public item. They do **not** determine whether media outreach is appropriate.

Product and technical documentation under `/docs/` is not a fourth publication class.
Documentation placement, human/agent variants, and machine-readable discovery are
governed by [`agent-readable-documentation.md`](agent-readable-documentation.md).
Ordinary documentation changes do not create Latest entries.

---

## 2. Why this structure

The reviewed peers separate editorial purpose from research maturity:

- [Anthropic Research](https://www.anthropic.com/research) has a dedicated research surface organized by research area and publications.
- [Anthropic Engineering](https://www.anthropic.com/engineering) separately publishes implementation lessons, technical methods, reliability reports, and postmortems.
- [Anthropic Newsroom](https://www.anthropic.com/news) carries product, feature, announcement, policy, and company events.
- [OpenAI Newsroom](https://openai.com/news/) uses topic classes including Research, Engineering, Product, Company, Safety, and Security.
- [OpenAI Research Index](https://openai.com/research/index/) separately distinguishes output or maturity types such as Publication, Conclusion, Milestone, and Release.
- OpenAI describes [Engineering](https://openai.com/news/engineering/) as stories about its technology and builders.

The adopted lesson is not to copy every peer category. Licklider is smaller and should keep only the three distinctions that prevent material misunderstanding: research evidence, engineering experience, and externally meaningful events.

**Observation date:** 2026-08-23. Peer structures are precedent evidence, not authority for Licklider claims.

---

## 3. Classification rule

Classify by the article's primary contribution.

1. Does it present a research question, method, experiment, benchmark result, or scholarly conclusion?  
   → **Research**
2. Does it explain implementation, debugging, verification, operations, an upstream issue, or a postmortem?  
   → **Engineering**
3. Does it announce availability, a release, partnership, company action, policy, commitment, or correction?  
   → **News**

When one event supports more than one useful article, the articles must have different jobs. Example: a protocol release can have one News announcement about availability and one Engineering article about design and verification. Neither may copy the other as a second canonical announcement.

### 3.1 New article or update

Decide from the public state change, not from pull-request count or elapsed time.

Create a new article when the work has its own durable reader-facing conclusion and
materially changes at least one of these states:

- public availability or the way a reader can use an artifact;
- closure of a major evidence, safety, or engineering requirement;
- selection, ratification, support, or release maturity;
- an externally reviewed disposition or a distinct reproducible finding; or
- the scope of what can truthfully be claimed or used.

Update the existing canonical article when the change supplies instructions, evidence,
clarification, repair, or incremental implementation within the same reader-facing
conclusion. Several pull requests may form one article when they answer the same reader
question and share one maturity boundary. Conversely, publication proximity is not a
reason to hide a distinct state change inside an older article.

A useful test is whether the proposed item can state, in one durable sentence, what is
true now that was not true before. If it cannot, prefer an update or no publication. If
it can, confirm that the sentence describes a public outcome rather than internal work
volume before creating a Latest entry.

---

## 4. Allowed article types

### 4.1 Research

| Type | Use |
| --- | --- |
| `publication` | Paper, preprint, accepted manuscript, or journal publication |
| `research_note` | Bounded original finding or analysis that is not presented as a full paper |
| `benchmark_report` | Method, dataset, benchmark, or validation result with reproducible evidence |

A Research item must expose the evidence and its maturity. It must not imply that publication on `licklider.ai` is peer review.

### 4.2 Engineering

| Type | Use |
| --- | --- |
| `implementation_note` | Architecture, performance, tooling, or implementation lesson |
| `upstream_report` | Reproduction and disposition of an issue in an external dependency |
| `postmortem` | What happened, impact, timeline, resolution, and prevention |
| `technical_method` | Reusable engineering or verification method |

An Engineering item may report a bug or measurement without becoming a research paper. Its status must track upstream confirmation and resolution separately from Licklider's reproduction.

### 4.3 News

| Type | Use |
| --- | --- |
| `product` | Public product, protocol, specification, verifier, or major availability change |
| `company` | Leadership, financing, acquisition, or other material company event |
| `partnership` | A confirmed external partnership with a public counterparty |
| `policy_commitment` | A public policy, commitment, response, or material correction |
| `update` | A material change to a previous News item |

News is not the catch-all for every new URL, repository commit, paper version, or submission milestone.

---

## 5. Research maturity labels

Use the most specific fact that is true. Do not shorten a status in a way that implies external validation.

| State | Public label |
| --- | --- |
| Public manuscript, no journal submission | **Preprint — not peer reviewed** |
| Formally submitted; review not started or not confirmed | **Submitted for journal consideration — not peer reviewed; not accepted** |
| External peer review has started | **In peer review — not accepted** |
| Journal has issued an acceptance decision | **Accepted — publication pending** |
| Version of record is public | **Published — peer reviewed** |
| Material post-publication change | **Corrected**, **Withdrawn**, or **Retracted**, with date and reason |

Do not use **under review** merely because submission is complete. Do not use a journal logo or journal citation before acceptance or publication.

A submission changes the public status, but it does not by itself create News, prove the claims, or change a paper's relationship to nomue Protocol.

### Current manuscript status

For *Correctly Rounded or Refused: Toward a Certified Numerical Contract for the Paired Student-t Test in IEEE Binary64*:

> **Preprint v0.2 — not peer reviewed. Submitted for journal consideration in August 2026. No acceptance decision has been made.**

The canonical public preprint remains [Zenodo record 22025200](https://zenodo.org/records/22025200). v0.1 remains version history and is not announced as a separate current publication.

The public site does not name a submitted journal before acceptance. Exact venue,
submission date, manuscript identifier, and editorial history remain in the internal
record. A rejection, withdrawal, or resubmission changes the current status but does
not create a News item.

---

## 6. Public writing standard

This section is the canonical editorial standard for reader-facing titles, summaries,
index text, status notices, and article bodies. Scientific and technical precision must
be preserved, but internal vocabulary must not be used as a shortcut for explanation.

The assumed reader is an informed non-specialist who may know neither the project nor its
internal terminology. A specialist must still be able to recover the exact claim, status,
scope, and evidence from the same page.

### 6.1 Required information order

Write each item in this order unless a documented reason requires otherwise:

1. **Title:** name the concrete finding, event, or available artifact.
2. **One-sentence summary:** state what happened or what the reader can learn or do.
3. **Current status:** expose maturity, review state, or unresolved disposition.
4. **Plain-language explanation:** explain the result before implementation detail.
5. **Technical detail and evidence:** provide exact functions, versions, methods, links,
   and reproducer information needed by the relevant specialist.
6. **Scope and limits:** state what the evidence does not show in ordinary language.
7. **Relationship or next step:** include only when it materially prevents
   misunderstanding, such as a paper's relationship to nomue Protocol.

This follows the useful pattern observed in Anthropic and OpenAI publishing: a short,
concrete headline and summary establish the subject before the page introduces technical
detail, evidence, and limitations. Their wording is precedent, not authority for
Licklider claims.

### 6.2 Sentence and terminology rules

- Put the concrete subject and action in the first sentence. Do not open with taxonomy,
  governance, or implementation vocabulary.
- Prefer active verbs and observable outcomes: **returns**, **checks**, **reported**,
  **remains open**, **is available**.
- Keep the index summary to one sentence and normally no more than 30 words.
- Keep one main claim per sentence. Split a sentence when its clauses answer different
  reader questions.
- Define an unavoidable technical term at first use with a short explanation or example.
- On an index or in a standfirst, replace specialist shorthand with the concrete behavior
  it describes. Technical shorthand may appear later when it helps specialists.
- State maturity and uncertainty directly. Never let words such as **release**,
  **verified**, **reviewed**, or **fixed** imply a stronger state than the evidence.
- Preserve necessary limitations, but express them as concrete non-claims rather than
  compressed legal, governance, or specification language.
- Use internal enum names, policy terms, and conformance vocabulary only when the reader
  needs the exact term. Do not make readers decode the repository's internal model.

Examples:

| Avoid as the first explanation | Prefer |
| --- | --- |
| “issuer-independent verification of scoped Record properties” | “anyone can run the verifier on their own computer to check the supported parts of a Record” |
| “wrong-sign and wrong-finiteness result” | “positive infinity instead of a large negative value” |
| “informative, not normative, for the Protocol” | “the paper does not define or change the Protocol” |
| “all applicable scoped checks pass” | “every check supported by this version passes” |

Words such as `normative`, `informative`, `admissibility`, `attestation`, `candidate
bundle`, `numerical surface`, and `finiteness` are not prohibited. They require a
reader-facing explanation and normally do not belong in a title, standfirst, or index
summary.

### 6.3 Category-specific lead

- **Research:** begin with the question or finding and the studied scope. Show peer-review
  status before discussing journal process, methods, or protocol implications.
- **Engineering:** begin with the observed behavior and practical impact. Then distinguish
  Licklider's reproduction, a contributor's response, an upstream maintainer's decision,
  an accepted fix, and a released fix.
- **News:** begin with what is publicly available or what materially changed. Give the
  reader a direct next action and show whether the item is a preview, release candidate,
  or stable release.

### 6.4 Editorial history and public corrections

Do not publish internal editorial history, discarded headlines, copy-editing changes, or
an explanation that wording was previously too broad. Those facts do not help the reader
understand the current subject.

Publish a correction or update history only when a previous public version contained a
material factual error, changed a consequential claim, or when transparency about the
change is itself important. A maturity change such as acceptance, withdrawal, confirmed
cause, accepted fix, or released fix may be recorded as an update. Ordinary wording and
layout revisions are not public correction events.

### 6.5 Mandatory pre-publication check

An item is not ready to publish until every applicable question below can be answered
**yes**:

- Can a new reader understand the subject from the title and one-sentence summary alone?
- Does the first paragraph say what happened, what was found, or what is available?
- Is every specialist term in the opening explained or moved to the technical section?
- Is the exact maturity or unresolved status visible without inference?
- Are observation, third-party response, confirmation, acceptance, and release kept
  separate?
- Are the scope and important non-claims stated in ordinary language?
- Have internal editorial deliberation and non-material revision history been removed?
- Do the home page, Latest, category index, metadata, and article use consistent wording?
- Does the item appear once, with the same title, summary, date, and URL in RSS and JSON Feed?
- Do public evidence links support the claims immediately around them?

When a precise claim cannot be made both accurate and understandable, keep the precise
claim and add an explanation. Do not remove the precision and do not leave the shorthand
unexplained.

---

## 7. Required metadata

### 7.1 Every item

- title
- primary class and article type
- first-publication date
- last-updated date when changed
- named author or responsible team
- one-sentence summary
- canonical URL
- public evidence links
- scope and important limitations
- correction or update history when material under section 6.4

### 7.2 Research additions

- manuscript or report version
- DOI or persistent identifier when available
- peer-review and journal status
- paper, code, data, benchmark, and reproduction links as applicable
- relation to nomue Protocol: `none`, `informative`, `experimental`, or `normative`
- explicit non-claim when scientific validity is not established

### 7.3 Engineering additions

- affected component and exact version or commit
- reproduction conditions
- observed impact
- Licklider reproduction status
- upstream issue, pull request, maintainer decision, and released-fix status
- unresolved uncertainty

### 7.4 News additions

- effective event date
- what is publicly available now
- maturity such as experimental, preview, release candidate, or stable
- direct call to action
- supporting evidence and material non-claims

---

## 8. Current routing examples

| Item | Primary class | Treatment |
| --- | --- | --- |
| Zenodo paper v0.2 and journal-submission status | Research / `publication` | One current Research entry; v0.1 only in version history; submitted journal unnamed before acceptance |
| New paper version with no material new result | Research update | Update existing entry; no separate News item |
| SciPy issue reproduced by Licklider | Engineering / `upstream_report` | State Licklider reproduction separately from upstream confirmation |
| Upstream maintainer confirms and releases a fix | Engineering update | Update the canonical report; News only if the external consequence is material |
| nomue verifier becomes publicly usable | News / `product` | State exact maturity; link repository and runnable evidence |
| nomue Protocol public release | News / `product` | Announce availability; place design rationale in a separate Engineering item if useful |
| Journal acceptance | Research status update | News is optional and requires a separate externally meaningful reason |
| Journal publication | Research status update | May support News or outreach, but peer review alone does not require either |

---

## 9. Latest aggregation and navigation rule

Research, Engineering, and News remain distinct canonical classes and retain their own
indexes and article URLs. **Latest** is an aggregation, not a fourth class.

The required public structure is:

- `/latest/` lists all three classes in reverse chronological order;
- the global header links to **Latest**, rather than repeating all three class links;
- every mixed row shows its primary class and links to the canonical article;
- category indexes remain available from item labels and lower-page navigation; and
- the home-page mixed list is named **Latest** and follows the same classification rule.

This gives a small publication program one compact entry point without erasing the
difference between scholarly status, technical experience, and company events.

---

## 10. Authority boundaries

- `PUBLIC_COMMUNICATIONS.md` controls what Licklider and nomue may claim.
- This document controls where an allowed claim is presented and which status metadata must accompany it.
- `nomue-pr` controls whether a published item becomes a media-outreach campaign.
- A page on `licklider.ai` is an owned publication surface, not a new scientific or protocol authority.
