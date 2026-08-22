# Public Information Architecture and Publication Taxonomy

**Document type:** Canonical site publication policy  
**Authority:** Canonical for placement, labels, and required metadata on `licklider.ai`  
**Claim authority:** Subordinate to `licklider-ai/nomue-app/PUBLIC_COMMUNICATIONS.md`  
**Outreach authority:** Media outreach is governed separately by `licklider-ai/nomue-pr`  
**Status:** Active — v1.0  
**Last updated:** 2026-08-23

---

## 1. Decision

Licklider publishes through three primary classes:

| Primary class | Question answered | Canonical index |
| --- | --- | --- |
| **Research** | What did we study or find? | `/research/` |
| **Engineering** | What did we build, debug, measure, or learn in implementation? | `/engineering/` |
| **News** | What externally meaningful event happened? | `/news/` |

The home page uses **Latest**, not News, when it mixes these classes. Every row must show its primary class.

An item has exactly **one primary class**. It may be linked from another index, but duplicate canonical articles are not created.

These classes describe the nature of the public item. They do **not** determine whether media outreach is appropriate.

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
| Formally submitted; review not started or not confirmed | **Submitted to {journal} — peer review pending; not accepted** |
| External peer review has started | **In peer review — not accepted** |
| Journal has issued an acceptance decision | **Accepted — publication pending** |
| Version of record is public | **Published — peer reviewed** |
| Material post-publication change | **Corrected**, **Withdrawn**, or **Retracted**, with date and reason |

Do not use **under review** merely because submission is complete. Do not use a journal logo or journal citation before acceptance or publication.

A submission changes the public status, but it does not by itself create News, prove the claims, or change a paper's relationship to nomue Protocol.

### Current manuscript status

For *Correctly Rounded or Refused: Toward a Certified Numerical Contract for the Paired Student-t Test in IEEE Binary64*:

> **Preprint v0.2, available on Zenodo. Submitted to ACM Transactions on Mathematical Software (ToMS) in August 2026. Peer review is pending; the manuscript has not been accepted or published.**

The canonical public preprint remains [Zenodo record 22025200](https://zenodo.org/records/22025200). v0.1 remains version history and is not announced as a separate current publication.

---

## 6. Required metadata

### 6.1 Every item

- title
- primary class and article type
- first-publication date
- last-updated date when changed
- named author or responsible team
- one-sentence summary
- canonical URL
- public evidence links
- scope and important limitations
- correction or update history

### 6.2 Research additions

- manuscript or report version
- DOI or persistent identifier when available
- peer-review and journal status
- paper, code, data, benchmark, and reproduction links as applicable
- relation to nomue Protocol: `none`, `informative`, `experimental`, or `normative`
- explicit non-claim when scientific validity is not established

### 6.3 Engineering additions

- affected component and exact version or commit
- reproduction conditions
- observed impact
- Licklider reproduction status
- upstream issue, pull request, maintainer decision, and released-fix status
- unresolved uncertainty

### 6.4 News additions

- effective event date
- what is publicly available now
- maturity such as experimental, preview, release candidate, or stable
- direct call to action
- supporting evidence and material non-claims

---

## 7. Current routing examples

| Item | Primary class | Treatment |
| --- | --- | --- |
| Zenodo paper v0.2 and ToMS submission status | Research / `publication` | One current Research entry; v0.1 only in version history |
| New paper version with no material new result | Research update | Update existing entry; no separate News item |
| SciPy issue reproduced by Licklider | Engineering / `upstream_report` | State Licklider reproduction separately from upstream confirmation |
| Upstream maintainer confirms and releases a fix | Engineering update | Update the canonical report; News only if the external consequence is material |
| nomue verifier becomes publicly usable | News / `product` | State exact maturity; link repository and runnable evidence |
| nomue Protocol public release | News / `product` | Announce availability; place design rationale in a separate Engineering item if useful |
| Journal acceptance | Research status update | News is optional and requires a separate externally meaningful reason |
| Journal publication | Research status update | May support News or outreach, but peer review alone does not require either |

---

## 8. Home page rule

The existing home-page section named **News** must not absorb Research or Engineering items.

When the first Research or Engineering item is published, either:

- rename the mixed home-page list to **Latest** and show a class label on every row; or
- keep separate Research, Engineering, and News blocks.

The preferred implementation is **Latest + three dedicated indexes**. It gives a small publication program one compact feed without erasing the difference between scholarly status, technical experience, and company events.

---

## 9. Authority boundaries

- `PUBLIC_COMMUNICATIONS.md` controls what Licklider and nomue may claim.
- This document controls where an allowed claim is presented and which status metadata must accompany it.
- `nomue-pr` controls whether a published item becomes a media-outreach campaign.
- A page on `licklider.ai` is an owned publication surface, not a new scientific or protocol authority.
