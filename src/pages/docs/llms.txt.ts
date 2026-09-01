import type { APIRoute } from 'astro';
import {
  AGENT_DOCS,
  DOCS_INDEX_MARKDOWN,
} from '../../data/agent-docs';

const content = `# Licklider agent-readable documentation

> Public documentation for deciding when a bounded verification call applies, using current public nomue artifacts, and interpreting their limits.

Important: read the status and current limits on each page before acting. The existence of a page does not imply a public API or MCP endpoint.

## Start here

- [Documentation index](https://www.licklider.ai/docs/index.md): ${DOCS_INDEX_MARKDOWN.split('\n')[2]?.replace(/^> /, '')}

## Verification calls and current public artifacts

${AGENT_DOCS.map((doc) => `- [${doc.title}](https://www.licklider.ai/docs/${doc.slug}.md): ${doc.description} Status: ${doc.status}.`).join('\n')}

## Machine-readable examples

- [Examples JSON](https://www.licklider.ai/docs/examples.json): normalized executable verifier examples and call-selection boundaries
`;

export const GET: APIRoute = () =>
  new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
