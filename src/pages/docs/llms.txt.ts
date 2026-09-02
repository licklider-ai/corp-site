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
  PLANNED_METHOD_FAMILIES,
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

## Start here

- [Documentation index](https://www.licklider.ai/docs/index.md): ${DOCS_INDEX_MARKDOWN.split('\n')[2]?.replace(/^> /, '')}

## Verification calls and current public artifacts

${AGENT_DOCS.map((doc) => `- [${doc.title}](https://www.licklider.ai/docs/${doc.slug}.md): ${doc.description} Status: ${doc.status}.`).join('\n')}

## Machine-readable examples

- [Examples JSON](https://www.licklider.ai/docs/examples.json): normalized executable verifier examples and call-selection boundaries

## Product access

- ${PRODUCT_RELEASE_BOUNDARY}
- ${MCP_RELEASE_BOUNDARY}
- [Public MCP source](${MCP_RELEASE.repositoryUrl}), [npm package](${MCP_RELEASE.npmUrl}), [official registry metadata](${MCP_RELEASE.registryUrl}), and [passing CI](${MCP_RELEASE.ciUrl})
- ${PAIRED_T_BOUNDARY}
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
