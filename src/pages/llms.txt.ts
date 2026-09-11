import type { APIRoute } from 'astro';
import { AGENT_DOCS } from '../data/agent-docs';
import {
  COMPANY_POSITION,
  EVALUATION_BOUNDARY,
  MARKET_SCOPE,
  MCP_RELEASE,
  MCP_RELEASE_BOUNDARY,
  METHOD_IDENTITY_FINDING,
  NOMUE_GLOBAL_INSTALL_COMMAND,
  NOMUE_MCP_CLIENT_CONFIG,
  NOMUE_MCP_NPX_COMMAND,
  NOMUE_MCP_WHEN_NOT_TO_USE,
  NOMUE_MCP_WHEN_TO_USE,
  NOMUE_NPX_COMMAND,
  NOMUE_VERIFY_COMMAND,
  PAIRED_T_BOUNDARY,
  R3_DISCUSSION,
  R3_EXPERIMENT_PROGRESS,
  R3_SOURCE_PROGRESS,
  R4_DISCUSSION,
  R4_EXPERIMENT_PROGRESS,
  R4_DISCUSSION_BOUNDARY,
  PLANNED_METHOD_FAMILIES,
  PLATFORM_SCOPE,
  HOSTED_WELCH_CAPABILITY,
  PRODUCT_RELEASE_BOUNDARY,
  PUBLIC_CAPABILITY,
  PUBLIC_RELEASE,
  PUBLIC_TRUST_EVIDENCE,
  ROADMAP_POSITION,
  UPSTREAM_CONTRIBUTIONS,
  UPSTREAM_REPORTS_AS_OF,
} from '../data/site-facts';

const upstreamFixCount = UPSTREAM_CONTRIBUTIONS.filter(
  (item) => item.outcome === 'fix_merged',
).length;

const content = `# Licklider

> ${COMPANY_POSITION}

## Available now

- ${PUBLIC_CAPABILITY}
- [Run the public verifier](https://www.licklider.ai/docs/record-verification.md)
- [Inspect the exact CLI](https://www.licklider.ai/docs/cli-reference.md): shipped subcommands, arguments, output behavior, and unsupported help/version flags
- [${PUBLIC_RELEASE.npmPackage}](${PUBLIC_RELEASE.npmUrl}): public npm package; ${PUBLIC_RELEASE.npmDistTag} points to ${PUBLIC_RELEASE.verifierPackage}, a release candidate rather than a stable release
- Install globally: \`${NOMUE_GLOBAL_INSTALL_COMMAND}\`
- Verify a local Record: \`${NOMUE_VERIFY_COMMAND}\`
- Run without a global install: \`${NOMUE_NPX_COMMAND}\`
- Package-path CI: Linux, macOS, and Windows with Node.js 20 and 22
- [nomue verifier source](${PUBLIC_RELEASE.verifierUrl}): Apache-2.0; Record verification remains local and does not call a nomue server after installation
- [${MCP_RELEASE.package}@${MCP_RELEASE.version}](${MCP_RELEASE.npmUrl}): public local stdio MCP release candidate, exact-version pinned
- MCP client configuration: \`${NOMUE_MCP_CLIENT_CONFIG}\`
- Direct start: \`${NOMUE_MCP_NPX_COMMAND}\`
- Tool: \`${MCP_RELEASE.tool}\`. ${NOMUE_MCP_WHEN_TO_USE}
- ${NOMUE_MCP_WHEN_NOT_TO_USE}
- [Official MCP Registry entry](${MCP_RELEASE.registryUrl}): \`${MCP_RELEASE.registryName}\`
- [MCP installation and result contract](https://www.licklider.ai/docs/mcp-verification.md)
- [Fetch machine-readable examples](https://www.licklider.ai/docs/examples.json)
- ${PUBLIC_TRUST_EVIDENCE}

## Product and platform

- ${HOSTED_WELCH_CAPABILITY}
- ${PRODUCT_RELEASE_BOUNDARY}
- [Hosted limited Release 1](https://www.licklider.ai/news/nomue-welch-limited-release-1/)
- ${MCP_RELEASE_BOUNDARY}
- [Public MCP source](${MCP_RELEASE.repositoryUrl}), [npm package](${MCP_RELEASE.npmUrl}), [official registry metadata](${MCP_RELEASE.registryUrl}), and [passing cross-platform CI](${MCP_RELEASE.ciUrl})
- ${PAIRED_T_BOUNDARY}
- ${R4_DISCUSSION_BOUNDARY}
- ${R3_SOURCE_PROGRESS}
- [Release 3 public discussion](${R3_DISCUSSION.issueUrl}); [scope and evidence](https://www.licklider.ai${R3_DISCUSSION.articleUrl})
- [Release 4 public discussion](${R4_DISCUSSION.issueUrl}); [scope and evidence](https://www.licklider.ai${R4_DISCUSSION.articleUrl})
- ${EVALUATION_BOUNDARY}
- ${PLATFORM_SCOPE}
- ${MARKET_SCOPE}
- ${ROADMAP_POSITION}
- Planned scientific capability families: ${PLANNED_METHOD_FAMILIES.join('; ')}.
- [Full product roadmap](https://www.licklider.ai/roadmap/)

## Interpretation boundary

- Source-bounded Research finding: ${METHOD_IDENTITY_FINDING}
- A clean verification report is a set of scoped results, not an overall claim that the research is correct.

## Agent-readable documentation

- [Documentation index](https://www.licklider.ai/docs/index.md): how to decide when verification applies and how to use current public artifacts
- [Documentation llms.txt](https://www.licklider.ai/docs/llms.txt): detailed agent-readable documentation index
${AGENT_DOCS.map((doc) => `- [${doc.title}](https://www.licklider.ai/docs/${doc.slug}.md): ${doc.description}`).join('\n')}

## Company and product

- [Licklider](https://www.licklider.ai/): company and platform overview
- [nomue](https://www.licklider.ai/nomue/): scientific verification product, scope, availability, and limits
- [Roadmap](https://www.licklider.ai/roadmap/): current artifacts, next releases, platform evolution, and planned scientific capability families
- [Evaluation](https://www.licklider.ai/evaluation/): comparison design and current claim boundary
- [Thesis](https://www.licklider.ai/thesis/): why AI-generated work needs a separate verification layer

## Founder

- [Tasuku Kobayashi](https://www.licklider.ai/about/#tasuku-kobayashi) is Licklider's founder and CEO. He leads product, Protocol, research, and engineering work.
- He previously worked at Recruit and founded two companies before Licklider, exiting both through share sales.
- He is the sole author of [Correctly Rounded or Refused — preprint v0.2](https://zenodo.org/records/22025200), which has not been peer reviewed.
- The ${UPSTREAM_CONTRIBUTIONS.length} numerical and method-selection reports listed below span SciPy, Boost.Math, R, agricolae, and Julia/HypothesisTests.jl and were submitted under his name through issue trackers or maintainer email. The agricolae REGW report was emailed on September 10, 2026; upstream confirmation is pending. ${upstreamFixCount} have matching fixes merged upstream. The SciPy variance-range, Mann–Whitney U method-selection, Welch ANOVA weight-sum, and Studentized-range tail reports and the R report remain open without accepted fixes; the Julia matching fix shipped in v0.12.0 and remains in v0.12.1. SciPy PR #26135 proposes a variance-range repair but is not yet reviewed or merged. The R tracker could not be rechecked on September 9; its open status is the last recorded state.

## Public technical authority

- [nomue Protocol](${PUBLIC_RELEASE.protocolUrl}): public Layer 1 specification and Release 1 artifacts
- [nomue verifier on npm](${PUBLIC_RELEASE.npmUrl}): public release-candidate package for supported Release 1 Records
- [nomue verifier source](${PUBLIC_RELEASE.verifierUrl}): source and release evidence
- [nomue MCP on npm](${MCP_RELEASE.npmUrl}): public local stdio release candidate
- [nomue MCP in the official registry](${MCP_RELEASE.registryUrl}): exact registry metadata for ${MCP_RELEASE.registryName}

## Upstream contributions

- ${UPSTREAM_CONTRIBUTIONS.length} distinct upstream reports submitted through issue trackers or maintainer email; ${upstreamFixCount} matching fixes merged upstream. Report count updated ${UPSTREAM_REPORTS_AS_OF}; existing upstream dispositions retain their last recorded observation dates. Articles, follow-up messages and fixes for the same problem do not add reports.
${UPSTREAM_CONTRIBUTIONS.map((item) => `- [${item.project}: ${item.title}](https://www.licklider.ai${item.href}): ${item.status}. [${item.evidenceLabel}](${item.evidenceHref}). ${item.credit}.`).join('\n')}

## Evidence and updates

- [When a verification call must discard its result](https://www.licklider.ai/engineering/when-a-verification-call-must-discard-its-result/): ${R3_EXPERIMENT_PROGRESS}
- [Binding Holm corrections](https://www.licklider.ai/engineering/binding-holm-corrections-to-comparisons/): original declaration and supplied-p arithmetic experiment, updated with the candidate.3 successor and execution-control evidence; no added public support.
- [Checking factorial probability evidence](https://www.licklider.ai/engineering/checking-factorial-probability-evidence/): ${R4_EXPERIMENT_PROGRESS}
- [Exact factorial arithmetic and tail bounds](https://www.licklider.ai/engineering/checking-factorial-statistics-and-tail-bounds/): updated September 11, 2026 to connect the original numerical findings and overlap-checker limitation to the successor experiments.
- [Power scaling and factorial F](https://www.licklider.ai/engineering/power-scaling-and-factorial-f-statistics/): accepted bounded SS/F and six-fixture numerical exploration; no numerical support established.
- [Unequal-variance comparisons](https://www.licklider.ai/engineering/games-howell-approximation-and-guarantees/): source-reviewed GH, T2/T2-prime, T3/C distinctions; simulations are not universal error guarantees.
- [Control or best](https://www.licklider.ai/engineering/comparing-with-control-or-best/): source-reviewed targets, ordered testing and interval boundaries.
- [Testing graphs](https://www.licklider.ai/engineering/implementing-multiple-testing-graphs/): source-reviewed closure, ordering, weights and endpoint conventions. Release 3 method adoption and public support remain separate decisions from the experiments.

- [Multiple-testing source review](https://www.licklider.ai/engineering/checking-multiple-testing-against-original-papers/): six original papers reviewed; Rom table/equation conflict confirmed in the project review. Historical Release 3 source evidence; the bounded supplied-source RFC is now open for discussion. Bounded SR-C acceptance is recorded; later SR-F, SR-I, SR-D and SR-J source results also have scoped acceptance. Historical counts describe their pinned snapshots. Overall sources remain incomplete; no Release 3 support is announced.

- [Research](https://www.licklider.ai/research/): papers and research notes
- [Engineering](https://www.licklider.ai/engineering/): implementation work and upstream reports
- [Blog](https://www.licklider.ai/blog/): practical guidance for researchers using AI
- [Latest](https://www.licklider.ai/latest/): all public updates in reverse chronological order
- [RSS](https://www.licklider.ai/rss.xml): RSS 2.0 feed for all public updates
- [JSON Feed](https://www.licklider.ai/feed.json): JSON Feed 1.1 for all public updates
`;

export const GET: APIRoute = () =>
  new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
