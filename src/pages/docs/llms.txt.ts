import type { APIRoute } from 'astro';
import {
  AGENT_DOCS,
  DOCS_INDEX_MARKDOWN,
} from '../../data/agent-docs';
import {
  NOMUE_GLOBAL_INSTALL_COMMAND,
  NOMUE_NPX_COMMAND,
  NOMUE_VERIFY_COMMAND,
  PRODUCT_RELEASE_BOUNDARY,
  PUBLIC_CAPABILITY,
  PUBLIC_RELEASE,
} from '../../data/site-facts';

const content = `# Licklider agent-readable documentation

> Run the public verifier, decide when a bounded verification call applies, and interpret its returned evidence.

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

## Start here

- [Documentation index](https://www.licklider.ai/docs/index.md): ${DOCS_INDEX_MARKDOWN.split('\n')[2]?.replace(/^> /, '')}

## Verification calls and current public artifacts

${AGENT_DOCS.map((doc) => `- [${doc.title}](https://www.licklider.ai/docs/${doc.slug}.md): ${doc.description} Status: ${doc.status}.`).join('\n')}

## Machine-readable examples

- [Examples JSON](https://www.licklider.ai/docs/examples.json): normalized executable verifier examples and call-selection boundaries

## Product access

- ${PRODUCT_RELEASE_BOUNDARY}
`;

export const GET: APIRoute = () =>
  new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
