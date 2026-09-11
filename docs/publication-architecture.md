# Public Information Architecture and Publication Taxonomy

**Document type:** Canonical site publication policy  
**Authority:** Canonical for placement, labels, and required metadata on `licklider.ai`  
**Claim authority:** Subordinate to `licklider-ai/nomue-app/PUBLIC_COMMUNICATIONS.md`  
**Outreach authority:** Media outreach is governed separately by `licklider-ai/nomue-pr`  
**Status:** Active — v2.1<br>
**Last updated:** 2026-09-11

---

## 1. Decision

Licklider publishes through four primary classes:

| Primary class | Question answered | Canonical index |
| --- | --- | --- |
| **Research** | What did we study or find? | `/research/` |
| **Engineering** | What did we build, debug, measure, or learn in implementation? | `/engineering/` |
| **News** | What externally meaningful event happened? | `/news/` |
| **Blog** | What can a reader decide or do using the evidence? | `/blog/` |

`/latest/` is the chronological view across all four classes. The global header links to
**Latest**, rather than listing all four classes. The class indexes remain canonical,
and every item in a mixed list must show its primary class.

`/rss.xml` (RSS 2.0) and `/feed.json` (JSON Feed 1.1) are subscription views of the same
publication registry. They must be generated from `PUBLICATIONS`, linked through HTML
feed-discovery metadata, and must not maintain a separate list or stronger wording.

`/latest/` is paginated at ten items per page. The first page retains `/latest/`; later
pages use `/latest/2/`, `/latest/3/`, and so on. Pagination changes only the HTML index:
the home page keeps its own latest-item limit, and RSS and JSON Feed continue to expose
the complete publication registry. Every pagination page has its own canonical URL and
uses ordinary links to the newer and older page.

An item has exactly **one primary class**. It may be linked from another index, but duplicate canonical articles are not created.

These classes describe the nature of the public item. They do **not** determine whether media outreach is appropriate.

Product and technical documentation under `/docs/` is not a publication class.
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

The adopted lesson is not to copy every peer category. Licklider is smaller and should keep distinctions that prevent material misunderstanding: research evidence, engineering experience, externally meaningful events, and practical reader guidance. Blog was added on September 11, 2026 under the downstream policy in section 11.

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
4. Does it apply existing evidence to a distinct reader decision or action?
   → **Blog**, subject to the downstream E01–E05 selection threshold

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

### 4.2.1 Upstream report counting and email submissions

The company metric **upstream reports** counts distinct problems submitted by
Licklider or its accountable reporter to the responsible upstream project through
an issue tracker or the designated maintainer email. A retained submission record
is required; drafts and unsent candidates are excluded. A sender-confirmed email
counts as a submission, without implying recipient acknowledgement or acceptance.

Count a problem once across email, issue, article, follow-up, pull request and fix.
Track reporting channel, our reproduction, upstream confirmation, accepted fix and
released fix separately. **Fixes merged upstream** requires corresponding upstream
merge evidence and does not imply that Licklider authored or caused every fix.

The main report total is not restricted to publicly archived correspondence. Avoid
calling the aggregate a “public record” or saying every report has external tracker
evidence when email submissions are included. Each entry must state its actual
status and link to available technical or upstream evidence with an accurate label.
The report-count date does not imply every upstream disposition was rechecked then.

An Engineering / upstream_report article may publish a reproducible finding before
upstream confirmation. Provide public code, observed results, environment, scope
and reporting status. A self-published reproducer supports the technical observation;
it is not proof that a maintainer received, confirmed or accepted the report. Do not
publish private correspondence or contact details merely to substantiate a count.
The usual evidence, confidentiality and publication-authorization rules still apply.

### 4.3 News

| Type | Use |
| --- | --- |
| `product` | Public product, protocol, specification, verifier, or major availability change |
| `public_consultation` | An open invitation to comment on a specific public proposal; distinguish discussion from adoption and product support |
| `company` | Leadership, financing, acquisition, or other material company event |
| `partnership` | A confirmed external partnership with a public counterparty |
| `policy_commitment` | A public policy, commitment, response, or material correction |
| `update` | A material change to a previous News item |

News is not the catch-all for every new URL, repository commit, paper version, or submission milestone.

---

### 4.4 Blog

Use `practical_guide` (display: **Practical guide**) for evidence-backed explanations
and worked planning examples. Follow [Blog policy](blog/README.md) and its E01–E05
threshold. A Blog is not evidence of new research, product support, or peer review.

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
index text, product pages, roadmap pages, status notices, and article bodies.

Licklider's baseline stance is **evidence-bound ambition**: state the strongest useful
interpretation that current evidence supports, then make its scope recoverable. Accuracy
is not a reason to make the company, product, or result appear smaller than the evidence
shows. Ambition is not permission to turn a plan into a shipped capability.

The assumed reader is an informed non-specialist who may know neither the project nor its
internal terminology. A specialist must still be able to recover the exact claim, status,
scope, and evidence from the same page.

### 6.1 Foundation: lead with the positive case

Every durable page must first answer the positive reader question appropriate to its job:

- **Company / home:** what large problem Licklider is solving and why its approach can
  become important;
- **Product:** what the reader or agent can do, what becomes possible next, and why the
  architecture can expand;
- **Research / Engineering:** what was learned, changed, or proved and why that matters;
- **News:** what became publicly available or materially changed; and
- **Roadmap:** how the first working slice expands into a larger product and platform.

Do not make a reader assemble the positive case from caveats. Do not begin a company or
product page with a catalogue of absences. Do not describe a first vertical slice as
though it were the intended ceiling when an adopted roadmap establishes a broader
architecture.

Required limitations remain part of the page, but their job is to make the positive claim
dependable. They must not become the page's dominant narrative unless the page exists
specifically to document limits, safety, or a correction.

### 6.2 Default narrative architecture

For company, product, and roadmap pages, use this order by default:

1. **Vision:** name the important category, user, and outcome.
2. **Working proof:** show what exists now and the best public evidence that the team can
   execute the thesis.
3. **Expansion:** show the adopted path from the current slice to the larger platform,
   separating current, candidate, next-release, and planned work.
4. **Current scope:** state the exact present support boundary once, clearly.
5. **Detailed boundaries:** route readers who need every non-claim to the relevant
   product or technical documentation.

This order is summarized as:

```text
Vision → Proof → Expansion → Current scope → Detailed boundaries
```

For a specific Research, Engineering, or News item, use this event-level order unless a
documented reason requires otherwise:

1. **Title:** name the concrete finding, event, or available artifact.
2. **One-sentence summary:** state what happened or what the reader can learn or do.
3. **Current status:** expose maturity, review state, or unresolved disposition.
4. **Plain-language explanation:** explain the result before implementation detail.
5. **Technical detail and evidence:** provide exact functions, versions, methods, links,
   and reproducer information needed by the relevant specialist.
6. **Scope and limits:** state what the evidence does not show in ordinary language.
7. **Relationship or next step:** include only when it materially prevents
   misunderstanding, such as a paper's relationship to nomue Protocol.

The first screen or opening paragraph should normally contain category, value, and proof
or a path to proof. Maturity language belongs beside the artifact or result it qualifies;
it does not need to interrupt every statement of the broader company thesis.

### 6.3 Limitation placement and density

- State one material qualifier near a claim when omitting it would change the claim's
  meaning: for example, `release candidate`, `planned`, or `not peer reviewed`.
- Consolidate general non-claims into one current-scope or interpretation section. Link
  to detailed Docs rather than repeating the same list after every positive statement.
- On the home page, use one compact current-scope statement. Do not alternate a positive
  claim with a limitation paragraph throughout the page.
- On a product page, explain the value and expansion path before the complete
  interpretation boundary.
- On a limits or reference page, completeness takes priority and the full boundary may
  be the main content.
- A limitation must describe the boundary of a real positive capability whenever
  possible. Prefer “This result establishes X; Y remains a separate question” to a bare
  list of everything the system does not establish.
- Never duplicate caveats merely to appear prudent. Repetition is required only when a
  claim would otherwise become materially misleading in that local context.

### 6.4 Roadmap and future scale

An adopted product plan is a legitimate public fact about company direction. Present it
confidently, using status labels that prevent it from being mistaken for current support.

Use these distinctions:

| Status | Meaning in public copy |
| --- | --- |
| **Available now** | A reader can use or inspect the named public artifact now |
| **Public source candidate** | Candidate implementation and evidence are public, but the stated distribution or client gate is still open |
| **Next release work** | The next approved product or Protocol outcome; not current support |
| **Planned platform** | An adopted architectural step with no implied ship date |
| **Planned capability family** | An adopted scientific family that still requires its own method, evidence, activation, and release decisions |

Do not replace a substantive adopted roadmap with “more checks someday.” Name the
platform steps and scientific families that are actually planned. Do not invent dates,
collapse planned work into availability, or imply that every listed capability will ship
at once.

When the first implementation is narrow, explain its role in the larger system. The
preferred structure is “X is the first working vertical slice of Y,” followed by the
evidence that X is real and the adopted steps that make Y credible.

### 6.5 Translate technical proof into company meaning

Technical achievements must be connected to the company thesis when that relationship is
real. An upstream defect report, independent oracle, public verifier, or cross-platform
test is not merely an isolated engineering detail: it can be evidence of Licklider's
ability to build verification infrastructure.

State both layers:

1. the exact technical outcome and external evidence; and
2. what capability of the company or platform that outcome demonstrates.

Do not inflate the technical result into product traction or scientific superiority. Do
not leave a strong proof point framed so narrowly that readers mistake it for the whole
business.

### 6.6 Sentence and terminology rules

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
- Prefer positive capability language before boundary language: **can**, **checks**,
  **produces**, **enables**, **expands**, **demonstrates**.
- Avoid consecutive paragraphs led by `not`, `does not`, `cannot`, `only`, `until`, or
  `remains`. Rewrite them around the supported capability and consolidate the boundary.
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

### 6.7 Category-specific lead

- **Research:** begin with the question or finding and the studied scope. Show peer-review
  status before discussing journal process, methods, or protocol implications.
- **Engineering:** begin with the observed behavior and practical impact. Then distinguish
  Licklider's reproduction, a contributor's response, an upstream maintainer's decision,
  an accepted fix, and a released fix.
- **News:** begin with what is publicly available or what materially changed. Give the
  reader a direct next action and show whether the item is a preview, release candidate,
  or stable release.

### 6.8 Editorial history and public corrections

Do not publish internal editorial history, discarded headlines, copy-editing changes, or
an explanation that wording was previously too broad. Those facts do not help the reader
understand the current subject.

Publish a correction or update history only when a previous public version contained a
material factual error, changed a consequential claim, or when transparency about the
change is itself important. A maturity change such as acceptance, withdrawal, confirmed
cause, accepted fix, or released fix may be recorded as an update. Ordinary wording and
layout revisions are not public correction events.

### 6.9 Mandatory pre-publication check

An item is not ready to publish until every applicable question below can be answered
**yes**:

- Can a new reader understand the subject from the title and one-sentence summary alone?
- Does the opening state why the subject matters before it lists general limitations?
- Does the first paragraph say what happened, what was found, or what is available?
- Is every specialist term in the opening explained or moved to the technical section?
- Is the exact maturity or unresolved status visible without inference?
- Are observation, third-party response, confirmation, acceptance, and release kept
  separate?
- Are the scope and important non-claims stated in ordinary language?
- Are repeated limitations consolidated, with detailed non-claims routed to Docs?
- If the current capability is a first vertical slice, does the page accurately show the
  adopted expansion path rather than implying that the slice is the company boundary?
- Are planned items visibly separated from available and candidate items without making
  the plan disappear into vague language?
- Does each major technical proof point explain what it demonstrates about the product or
  company, without converting it into an unsupported traction or superiority claim?
- Have internal editorial deliberation and non-material revision history been removed?
- Do the home page, Latest, category index, metadata, and article use consistent wording?
- Does the item appear once, with the same title, summary, date, and URL in RSS and JSON Feed?
- Do public evidence links support the claims immediately around them?

When a precise claim cannot be made both accurate and understandable, keep the precise
claim and add an explanation. Do not remove the precision and do not leave the shorthand
unexplained.

---

## 7. Required metadata

### Article layout and images

All Research, Engineering, News, and Blog articles use `PublicationLayout.astro`.
The title, summary, publication dates, and body share a centered reading column of at most
52rem. Text remains left-aligned. The surrounding article canvas remains at most
62rem; images can use that wider canvas. Both widths shrink to the available
space on mobile, preserving the page gutters.

Thumbnails are optional, including for Blog. Without a thumbnail, no image region
or placeholder is rendered. Latest and homepage Latest rows remain image-free.

For an article thumbnail, pass a `figure` or `img` in the layout's named
`thumbnail` slot. It appears between the article header and body at the wide canvas
width. For body images, place a `figure`, `picture`, or standalone `img` directly
inside the body or an article section. Image-only paragraphs also expand to the
wide canvas. Use `figure` with `figcaption` for captioned images; captions retain
the centered reading width. Keep wide figures outside narrow callouts and tables.
Provide meaningful `alt` text and intrinsic `width` and `height` on images, and
use `loading="lazy"` for below-the-fold images. Existing inline icons are not
treated as wide article media.

This is an in-page image layout convention. It does not generate images or
change social-sharing image metadata.

### Visible article metadata

Article headers show only publication dates above the title:
`Published September 1, 2026 | Updated September 4, 2026`.
Omit the separator and Updated portion when no update date exists. Use semantic
`time` elements, keep the line visually simple, and allow wrapping on small screens.
Do not show the category/type eyebrow or a By/Published/Updated/Status metadata box.
Keep authorship and category in structured data and the publication registry.
Material maturity and unresolved scientific or upstream status belong in the article
body near the relevant claim; they do not require a metadata panel.

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
- correction or update history when material under section 6.8

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

### 7.5 UTC dates, times, and precision

**Operational decision adopted 2026-09-11 (UTC):** UTC is the single time basis
for this website. This applies to visible dates, article headers, homepage and
Latest lists, documentation, Markdown, LLM indexes, feeds, structured data,
sitemaps, and publication operations. Do not select a date from an operator's
local timezone or localize it to the reader's timezone. The UI may show only the
UTC calendar date; displaying a clock time is not required. Dates of external
events remain source facts, separate from the website's publication/update date;
preserve source precision and attribution rather than guessing an event time.

`src/data/publications.ts` is the canonical article metadata registry. `date`,
`updated`, and `sortKey` are UTC calendar dates. Optional `publishedTime` and
`updatedTime` records contain `at` (RFC 3339 UTC, seconds, trailing `Z`) and an
`evidence` link. Record both publication and substantive-update times going
forward. A timestamp's UTC date must agree with its visible date; builds reject
disagreement, missing evidence, invalid timestamps, or an update before publication.

Use the recorded completion time of the successful production deployment that
first made the article or substantive revision available. For the current
Vercel workflow, the successful production-deployment notification is the
operational completion record. It is not a measurement of the first HTTP
response. A draft timestamp, PR merge time, preview deployment, or build clock
does not establish public availability. Finalize timestamps after production
success using the procedure in `deployment.md`; the metadata-only follow-up
does not create another substantive update or reset the recorded time.

For historical articles, backfill only when the exact revision and successful
production completion record can be identified. Otherwise retain the existing
date and leave the time absent. Do not manufacture midnight, infer a timezone
change for an unknown historical date, or treat metadata repair as new content.
If publication time is known but the latest update time is unknown, keep the
latest modification date at day precision; do not reuse the older instant.

Machine representations must preserve this precision:

- HTML `time` and Article JSON-LD use the recorded UTC instant when known and
  `YYYY-MM-DD` otherwise. Open Graph article timestamps are omitted if unknown.
- JSON Feed `date_published` and `date_modified` contain known instants only.
  These optional RFC 3339 fields are omitted when the relevant time is unknown;
  the known UTC dates remain in `content_text`.
- RSS `pubDate` contains the known original instant, rendered as GMT (UTC).
  Omit it when unknown; retain the UTC publication/update dates in the description.
  `lastBuildDate` records actual feed generation time, never an article time.
- Publication sitemap `lastmod` is emitted only for a known latest instant,
  because the current serializer expands date-only inputs into midnight.
  Article JSON-LD retains the known date even when sitemap `lastmod` is absent.

Preserve canonical URLs, feed IDs, original publication dates, and original
`sortKey` on substantive updates. Latest ordering remains by original UTC
publication day, with stable registry order within a day. Time backfills do not
reorder historical entries. Documentation's canonical metadata remains in
`src/data/agent-docs.ts`; the same UTC and evidence/precision rules apply.

#### Verified historical completion records

The initial migration backfills only the following records:

| Production revision | Successful Vercel status | Recorded completion (UTC) | Article metadata affected |
| --- | --- | --- | --- |
| `c80d7a39d5c711e5f9ad5fbb690d5e5f83381793` (PR #26) | `53971073923` | `2026-09-11T07:57:49Z` | First publication of Holm binding and factorial probability evidence; update of factorial statistics/tail bounds |
| `d14a7bcc3316cdd6c017a567ecdd31c21bbd5727` (PR #29) | `54021671154` | `2026-09-11T21:21:55Z` | First publication of verification-call discard controls; update of Holm binding |

The corresponding Vercel deployment links are retained with the registry records.
Other historical times remain unknown; this is not an assertion that they cannot
be recovered later.

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

Research, Engineering, News, and Blog remain distinct canonical classes and retain their own
indexes and article URLs. **Latest** is an aggregation, not a publication class.

The required public structure is:

- `/latest/` lists all four classes in reverse chronological order;
- the global header links to **Latest**, rather than repeating all four class links;
- every mixed row shows its primary class and links to the canonical article;
- category indexes remain available from item labels and lower-page navigation; and
- the home-page mixed list is named **Latest** and follows the same classification rule.

This gives a small publication program one compact entry point without erasing the
difference between scholarly status, technical experience, and company events.

---

## 10. Authority boundaries

Publication dates and evidenced times belong in `PUBLICATIONS` and follow
section 7.5. Article layouts, feeds, and publication sitemap metadata reuse
this registry with their supported precision. Feed text includes the article's
maturity/status boundary. JSON Feed must include `content_text` or `content_html`
as well as any summary. Never replace an article's publication date with its
update date merely to move it to the top of Latest.

- `PUBLIC_COMMUNICATIONS.md` controls what Licklider and nomue may claim.
- This document controls where an allowed claim is presented and which status metadata must accompany it.
- `nomue-pr` controls whether a published item becomes a media-outreach campaign.
- A page on `licklider.ai` is an owned publication surface, not a new scientific or protocol authority.

## 11. Blog-specific downstream policy

[Blog editorial policy](blog/README.md) is the canonical downstream policy for
Blog audience, purpose, voice, topic selection, and editorial acceptance.
[Blog writing procedure](blog/WRITE.md) applies it to each commission. It does
not change the rules for Research, Engineering, News, Docs, or other site pages.

Blog is integrated through `/blog/`, canonical article routes, and `PUBLICATIONS`.
Latest, homepage Latest, RSS and JSON Feed reuse that registry. Thumbnails remain
optional under the Blog policy; the shared article layout provides their placement.

For Blog only, a distinct evidence-backed reader judgment or action can justify
a new article without a new event under section 3.1. The Blog narrative follows
its reader situation rather than the event-first order in section 6.2. Site-wide
claim boundaries, positive framing, limitation density, metadata, and publication
checks still apply. This delegation does not itself publish an article, change
the live site, or authorize outreach.
