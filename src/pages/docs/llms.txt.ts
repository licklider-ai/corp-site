import type { APIRoute } from 'astro';
import {
  AGENT_DOCS,
  DOCS_INDEX_MARKDOWN,
} from '../../data/agent-docs';
import {
  METHOD_IDENTITY_FINDING,
  MCP_RELEASE,
  MCP_RELEASE_BOUNDARY,
  NOMUE_GLOBAL_INSTALL_COMMAND,
  NOMUE_MCP_CLIENT_CONFIG,
  NOMUE_MCP_NPX_COMMAND,
  NOMUE_MCP_WHEN_NOT_TO_USE,
  NOMUE_MCP_WHEN_TO_USE,
  NOMUE_NPX_COMMAND,
  NOMUE_VERIFY_COMMAND,
  PAIRED_T_BOUNDARY,
  R4_DISCUSSION,
  R4_DISCUSSION_BOUNDARY,
  PLANNED_METHOD_FAMILIES,
  HOSTED_WELCH_CAPABILITY,
  PRODUCT_RELEASE_BOUNDARY,
  PUBLIC_CAPABILITY,
  PUBLIC_RELEASE,
  PUBLIC_TRUST_EVIDENCE,
  ROADMAP_POSITION,
} from '../../data/site-facts';

const content = `# Licklider agent-readable documentation

> Run the public verifier directly or through local MCP, decide when a bounded verification call applies, and interpret its returned evidence.

## Available now

- ${PUBLIC_CAPABILITY}
- npm package: [${PUBLIC_RELEASE.npmPackage}](${PUBLIC_RELEASE.npmUrl})
- CLI reference: [exact command surface](https://www.licklider.ai/docs/cli-reference.md), including the absence of help and version commands in 0.2.1-rc.0
- npm ${PUBLIC_RELEASE.npmDistTag}: ${PUBLIC_RELEASE.verifierPackage}, a release candidate rather than a stable release
- Install: \`${NOMUE_GLOBAL_INSTALL_COMMAND}\`
- Verify: \`${NOMUE_VERIFY_COMMAND}\`
- No global install: \`${NOMUE_NPX_COMMAND}\`
- Tested package path: Linux, macOS, and Windows with Node.js 20 and 22
- [Run the verifier](https://www.licklider.ai/docs/record-verification.md)
- [Machine-readable examples](https://www.licklider.ai/docs/examples.json)
- ${PUBLIC_TRUST_EVIDENCE}
- MCP package: [${MCP_RELEASE.package}@${MCP_RELEASE.version}](${MCP_RELEASE.npmUrl})
- MCP client configuration: \`${NOMUE_MCP_CLIENT_CONFIG}\`
- MCP start command: \`${NOMUE_MCP_NPX_COMMAND}\`
- MCP tool: \`${MCP_RELEASE.tool}\`. ${NOMUE_MCP_WHEN_TO_USE}
- ${NOMUE_MCP_WHEN_NOT_TO_USE}
- [MCP installation and exact result contract](https://www.licklider.ai/docs/mcp-verification.md)
- [Official MCP Registry entry](${MCP_RELEASE.registryUrl}): \`${MCP_RELEASE.registryName}\`

## Research behind expansion

- [Power scaling and factorial F](https://www.licklider.ai/engineering/power-scaling-and-factorial-f-statistics/): accepted bounded SS/F and six-fixture numerical exploration; no numerical support established.
- [Unequal-variance comparisons](https://www.licklider.ai/engineering/games-howell-approximation-and-guarantees/): source-reviewed GH, T2/T2-prime, T3/C distinctions; simulations are not universal error guarantees.
- [Control or best](https://www.licklider.ai/engineering/comparing-with-control-or-best/): source-reviewed targets, ordered testing and interval boundaries.
- [Testing graphs](https://www.licklider.ai/engineering/implementing-multiple-testing-graphs/): source-reviewed closure, ordering, weights and endpoint conventions. Release 3 methods remain unselected and unsupported.

## Start here

- [Documentation index](https://www.licklider.ai/docs/index.md): ${DOCS_INDEX_MARKDOWN.split('\n')[2]?.replace(/^> /, '')}

## Verification calls and current public artifacts

${AGENT_DOCS.map((doc) => `- [${doc.title}](https://www.licklider.ai/docs/${doc.slug}.md): ${doc.description} Status: ${doc.status}.`).join('\n')}

## Machine-readable examples

- [Examples JSON](https://www.licklider.ai/docs/examples.json): normalized executable verifier examples and call-selection boundaries

## Product access

- ${HOSTED_WELCH_CAPABILITY}
- ${PRODUCT_RELEASE_BOUNDARY}
- [Hosted limited Release 1](https://www.licklider.ai/news/nomue-welch-limited-release-1/)
- ${MCP_RELEASE_BOUNDARY}
- [Public MCP source](${MCP_RELEASE.repositoryUrl}), [npm package](${MCP_RELEASE.npmUrl}), [official registry metadata](${MCP_RELEASE.registryUrl}), and [passing CI](${MCP_RELEASE.ciUrl})
- ${PAIRED_T_BOUNDARY}
- ${R4_DISCUSSION_BOUNDARY}
- [Release 4 public discussion](${R4_DISCUSSION.issueUrl}); [scope and evidence](https://www.licklider.ai${R4_DISCUSSION.articleUrl})
- ${ROADMAP_POSITION}
- Planned scientific capability families: ${PLANNED_METHOD_FAMILIES.join('; ')}.
- [Full roadmap](https://www.licklider.ai/roadmap/)

## Research finding that informs call selection

- ${METHOD_IDENTITY_FINDING}
- This is a source-bounded Research finding. It does not add or change Protocol support.
`;

export const GET: APIRoute = () =>
  new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
