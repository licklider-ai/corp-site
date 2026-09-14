
# Content creation and coordinated updates

Status: adopted by the founder, 2026-09-14 (UTC).
Applies to Research, Engineering, News, Blog and substantive product/documentation
updates. It executes publication-architecture.md and agent-readable-documentation.md;
Blog retains its own reader-led procedure in blog/WRITE.md. No new claim authority.

## Write a strong, bounded story

Identify the intended reader, concrete benefit and evidence before drafting.
Lead with what was achieved and why it matters; connect the result to the company
and product when supported. Give evidence, material scope and a useful next action.
Be explicit and confident about demonstrated achievements and adopted plans while
keeping available, candidate and planned capabilities distinguishable.
Consolidate limits where possible; do not repeat caveats to sound cautious.

## Fixed disclosure classes

| Class | Treatment |
| --- | --- |
| Problem, user benefit, scoped outcome, public evidence, specialist insight | Publish clearly when supported and authorized. |
| Internal structure, method-selection approach, optimization or recovery rationale | Explain at the level needed to understand the achievement; abstract production-specific mechanics. |
| Private code, exact production branch/threshold tuning, internal execution/operational data or directly transplantable unpublished implementation | Keep private unless that exact disclosure is explicitly approved under the applicable upstream process. |

Keep the input conditions, reference basis, tolerances and material comparison
differences needed to assess the claim. A public reference implementation remains
public; do not suggest that abstracting an article restores its exclusivity.
This workflow reduces unnecessary implementation disclosure, not all possible
reimplementation. Do not copy private source into public drafts, branches, PR
bodies or build output and then rely on later CI to remove it.

Papers and upstream reports follow their own publication requirements. Cite their
public or explicitly cleared artifacts, not private research workspaces. A product
comparison may be narrowly targeted and need not be a paper: state its tested scope
and meaningful conditions, and do not generalize a selected example to every use.

## Change-driven impact inspection

1. Read current main and the actual task base. Identify the changed fact, status,
   article or usage instruction and its owning public/cleared source.
2. Run `pnpm content:impact --base <base-commit>` before editing and again on the
   completed candidate. The script includes tracked changes and new files. If Git
   comparison is unavailable, it reports full-scope inspection rather than zero impact.
3. Inspect the candidate surfaces below and existing inbound references. Search
   for the old title, URL, package version and affected claim. Shared-source updates
   propagate mechanically; editorial or conceptual dependencies need judgment.
4. Update only affected meanings. In the PR describe changed surfaces and any
   material candidate intentionally left unchanged, using a brief reason.
5. Run `pnpm build`. It prints the impact scope and generates shared surfaces;
   inspect the generated human and machine representations for agreement.
6. When publication is authorized, merge and confirm the actual production
   deployment. Follow deployment.md for UTC timestamps; policy-only changes do not
   create News, a Latest entry or an article update date.

| Change | Inspect |
| --- | --- |
| Article addition/update | Article, PUBLICATIONS, Latest/category/homepage, RSS, JSON Feed, related links and metadata. |
| Product scope, version, availability, supported use or limits | site-facts.ts, product/roadmap/evaluation pages as relevant, agent-docs.ts, HTML/Markdown docs, examples, both llms.txt indexes. |
| Research/upstream status | Original article, shared outcome/counts, links and other pages repeating the same claim. |
| URL or title | Inbound references, canonical URLs, feed identity and sitemap; avoid changing stable URLs unnecessarily. |

`/llms.txt` and `/docs/llms.txt` are small discovery indexes, not complete article
copies. Update them when discovery or usage meaning changes; do not add every
article to every machine surface. The script's static import graph cannot detect
all semantic dependencies, dynamic references or external pages. Its successful
exit is not a factual or publication approval.
