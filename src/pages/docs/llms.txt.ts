import type { APIRoute } from 'astro';
import {
  AGENT_DOCS,
  DOCS_INDEX_MARKDOWN,
} from '../../data/agent-docs';
import { PRODUCT_RELEASE_BOUNDARY, PUBLIC_CAPABILITY } from '../../data/site-facts';

const content = `# Licklider agent-readable documentation

> Run the public verifier, decide when a bounded verification call applies, and interpret its returned evidence.

## Available now

- ${PUBLIC_CAPABILITY}
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
