import type { APIRoute } from 'astro';
import { AGENT_DOCS } from '../data/agent-docs';
import {
  COMPANY_POSITION,
  EVALUATION_BOUNDARY,
  MARKET_SCOPE,
  PAIRED_T_BOUNDARY,
  PLATFORM_SCOPE,
  PRODUCT_RELEASE_BOUNDARY,
  PUBLIC_CAPABILITY,
} from '../data/site-facts';

const content = `# Licklider

> ${COMPANY_POSITION}

## Available now

- ${PUBLIC_CAPABILITY}
- [Run the public verifier](https://www.licklider.ai/docs/record-verification.md)
- [Fetch machine-readable examples](https://www.licklider.ai/docs/examples.json)

## Product and platform

- ${PRODUCT_RELEASE_BOUNDARY}
- ${PAIRED_T_BOUNDARY}
- ${EVALUATION_BOUNDARY}
- ${PLATFORM_SCOPE}
- ${MARKET_SCOPE}

## Interpretation boundary

- A clean verification report is a set of scoped results, not an overall claim that the research is correct.

## Agent-readable documentation

- [Documentation index](https://www.licklider.ai/docs/index.md): how to decide when verification applies and how to use current public artifacts
- [Documentation llms.txt](https://www.licklider.ai/docs/llms.txt): detailed agent-readable documentation index
${AGENT_DOCS.map((doc) => `- [${doc.title}](https://www.licklider.ai/docs/${doc.slug}.md): ${doc.description}`).join('\n')}

## Company and product

- [Licklider](https://www.licklider.ai/): company and platform overview
- [nomue](https://www.licklider.ai/nomue/): scientific verification product, scope, availability, and limits
- [Evaluation](https://www.licklider.ai/evaluation/): comparison design and current claim boundary
- [Thesis](https://www.licklider.ai/thesis/): why AI-generated work needs a separate verification layer

## Public technical authority

- [nomue Protocol](https://github.com/licklider-ai/nomue-protocol): public Layer 1 specification and Release 1 artifacts
- [nomue verifier](https://github.com/licklider-ai/nomue-verifier): local verifier for supported Release 1 Records

## Evidence and updates

- [Research](https://www.licklider.ai/research/): papers and research notes
- [Engineering](https://www.licklider.ai/engineering/): implementation work and upstream reports
- [Latest](https://www.licklider.ai/latest/): all public updates in reverse chronological order
`;

export const GET: APIRoute = () =>
  new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
