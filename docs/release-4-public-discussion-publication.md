# Release 4 public discussion publication

Date: 2026-09-09. Accountable role: Product / Communication Steward.

## Purpose and authorization

Announce the opening of a bounded Protocol proposal and invite researchers and
implementers to challenge its scope, representation, and failure rules. The
maintainer accepted the publication proposal and requested a comprehensive site
alignment, with paired-t and Release 4 in one homepage progress section.
This author-side editorial check is not an independent scientific review.

Category: News. Type: public consultation. Canonical article:
`/news/nomue-protocol-release-4-public-discussion/`.

Core message: Researchers and developers can now comment on a concrete proposal
connecting assumptions, results, and verification evidence for balanced two-factor
experiments. The desired action is to read the pinned proposal and comment on
issue #261 with a clause, example, and proposed correction.

## Claim and evidence map

| Public claim | Authority and boundary |
| --- | --- |
| Discussion is open | [Issue #261](https://github.com/licklider-ai/nomue-protocol/issues/261), opening `2026-09-09T05:59:47Z`; checked open during preparation |
| The discussed scope is balanced replicated fixed 2×2, signed estimates and individual F tests | [Fixed candidate](https://github.com/licklider-ai/nomue-protocol/blob/21453d82109106e9e811571383228dcef8f60fac/governance/drafts/release-4-preparation/opening-rfc-candidate.md), blob `807e4bf0c22e5270b8fc15824329d04b5c37b146` |
| Opening confirmation is GO with no additional findings | [PR #260 report](https://github.com/licklider-ai/nomue-protocol/blob/36b40134321337d99417828368b5f690c70f5d07/review-inputs/r4-opening-rfc-boundary/assessment-20260909/REVIEW-RESULT.md), blob `935995bff4db9800fdc3458bdac4930e959bd8d1`; reused evidence and independence limits preserved |
| The paper/derivation division is accepted for this bounded scope | [Acceptance record](https://github.com/licklider-ai/nomue-protocol/blob/0abdca8f822d0de3faf35f218f762a951fd75e9e/governance/drafts/release-4-preparation/normal-model-steward-acceptance-2026-09-09.md); no fresh source closure asserted by this publication |
| Minimum discussion is 30 days | Issue #261, STABLE-INTENT; earliest decision `2026-10-09T05:59:47Z`, not automatic adoption or a ship date |
| No new numerical support is established | Candidate and issue #261 preserve numerical, operational, issuance, and broader source holds |
| Paired-t candidate readiness remains a separate milestone | Existing canonical paired-t engineering article and its linked PR #157 readiness evidence; no Release 2 adoption inferred from the R4 event |

Do not describe this as Release 4 shipped, general ANOVA support, certified
numerical accuracy, a causal guarantee, simultaneous error control, or journal
peer review. The current public execution scope is still Release 1 Welch.

## Placement and coverage

| Surface | Treatment |
| --- | --- |
| New News article | Event, four-condition example, proposal choices, evidence, scope, and participation window |
| Homepage | One Protocol progress section for paired-t and R4; retain research gate, four schemas, numerical closures, four work groups, and migration evidence; preserve old paired-t anchor |
| Homepage research section | Research explanations and links, without duplicating the release-status cards |
| Roadmap | Add the open proposal alongside candidate work; no implied R3 calendar prerequisite or ship date |
| nomue | Combine both Protocol stages in the existing progress area; leave current-use instructions intact |
| About | Shared progress card now routes to discussion with the earlier numerical study as background |
| Earlier factorial article | Date the transition to discussion, preserve coefficient-level findings and their limits |
| Docs index and limits HTML/Markdown | Separate proposals from executable capabilities using shared facts |
| Root/docs llms.txt and docs/index.md | Same R4 scope and discussion links as human-facing pages |
| Latest, News, home listing, RSS, JSON Feed | One registry entry; title, summary, date, category and canonical URL shared |
| Metadata and sitemap | New article is generated normally; homepage/Roadmap modification dates updated |
| CLI/MCP commands, examples, verifier structured data | Inspected for accidental capability expansion; no R4 execution instructions or support added |
| Other research articles and evaluation pages | No new R4-dependent claim requiring edits; unrelated release histories are outside this event |

The site publication taxonomy now includes public consultation. Article status
appears in prose under the existing date-only header convention. General limits
are consolidated rather than repeated after every claim.

## Publication and follow-up

Sequence: existing public Protocol proposal and issue, site article and aligned
navigation, then any separately authorized external distribution. This task does
not authorize social posts, email, media outreach, or new Protocol decisions.

Maintain current status from issue #261 and its eventual disposition. If the
scope changes materially, update the article, shared facts, affected navigation,
and agent-readable output together. The maintainer owns that correction path.
Useful outcomes are substantive discussion comments and reproducible
counterexamples; no traffic, adoption, or superiority result is claimed.

## Validation

- Reconciled the intervening main commit
  `8443a23bc043d01db65b25904358d0e9336e12d5` before final validation. Its limited
  Release 1 article and approved-recipient access updates are preserved.
- Installed the unchanged lockfile with pnpm 10.33.0; Node 24.19.0.
- Astro check: 63 files, zero errors, warnings, and hints.
- Astro production build: 44 HTML pages, plus generated documentation, feeds,
  and sitemap.
- Checked 817 local HTML links and their fragments: no missing targets.
- New article title and summary agree across article, home, Latest, News, RSS,
  and JSON Feed; the new item occurs once per feed.
- Homepage contains one Protocol progress section and one Reviewed candidate
  label. The old paired-t anchor is retained.
- Limits HTML/Markdown, docs/index.md, both llms.txt indexes, nomue, and Roadmap
  contain the R4 proposal boundary. The stale discussion-not-open statement is gone.
- Proposal, review, and acceptance links resolve to the pinned expected blobs.
- Existing numerical study content is preserved except its dated status paragraph;
  no CLI command, package version, execution example, or numerical algorithm changed.
- Diff whitespace check passes.
- Chromium rendering checked home, article, Roadmap, nomue, and About at 1440px
  and 390px: no horizontal overflow; homepage progress uses two columns on
  desktop and one on mobile. Inspected homepage and article screenshots.
  Local rendering used fallback fonts; remote font loading is not certified.
  The standard browser download timed out, so the check used the npm-packaged
  Chromium binary. No browser dependency was added to the repository.
