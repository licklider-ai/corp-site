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
  PLANNED_METHOD_FAMILIES,
  PLATFORM_SCOPE,
  PRODUCT_RELEASE_BOUNDARY,
  PUBLIC_CAPABILITY,
  PUBLIC_RELEASE,
  PUBLIC_TRUST_EVIDENCE,
  ROADMAP_POSITION,
  UPSTREAM_CONTRIBUTIONS,
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

- ${PRODUCT_RELEASE_BOUNDARY}
- ${MCP_RELEASE_BOUNDARY}
- [Public MCP source](${MCP_RELEASE.repositoryUrl}), [npm package](${MCP_RELEASE.npmUrl}), [official registry metadata](${MCP_RELEASE.registryUrl}), and [passing cross-platform CI](${MCP_RELEASE.ciUrl})
- ${PAIRED_T_BOUNDARY}
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
- The SciPy, Boost.Math, R, and Julia/HypothesisTests.jl numerical defect reports listed below were filed under his name. Three now have fixes merged upstream; the R report remains open and unconfirmed, while the Julia issue remains open and its matching fix is not yet in a registered release.

## Public technical authority

- [nomue Protocol](${PUBLIC_RELEASE.protocolUrl}): public Layer 1 specification and Release 1 artifacts
- [nomue verifier on npm](${PUBLIC_RELEASE.npmUrl}): public release-candidate package for supported Release 1 Records
- [nomue verifier source](${PUBLIC_RELEASE.verifierUrl}): source and release evidence
- [nomue MCP on npm](${MCP_RELEASE.npmUrl}): public local stdio release candidate
- [nomue MCP in the official registry](${MCP_RELEASE.registryUrl}): exact registry metadata for ${MCP_RELEASE.registryName}

## Public upstream contributions

- Current public record: ${UPSTREAM_CONTRIBUTIONS.length} upstream defect reports; ${upstreamFixCount} fixes merged upstream, as of September 3, 2026.
${UPSTREAM_CONTRIBUTIONS.map((item) => `- [${item.project}: ${item.title}](https://www.licklider.ai${item.href}): ${item.status}. [Upstream evidence](${item.evidenceHref}). ${item.credit}.`).join('\n')}

## Evidence and updates

- [Research](https://www.licklider.ai/research/): papers and research notes
- [Engineering](https://www.licklider.ai/engineering/): implementation work and upstream reports
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
