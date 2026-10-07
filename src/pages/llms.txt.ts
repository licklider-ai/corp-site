import type { APIRoute } from 'astro';
import { SCIGROUND } from '../data/sciground';
import { SCIGROUND_DOCS } from '../data/sciground-docs';

const content = `# Licklider / SciGround

> ${SCIGROUND.description}

## SciGround

${SCIGROUND_DOCS.map((doc) => `- [${doc.title}](https://www.licklider.ai/docs/${doc.slug}.md): ${doc.description}`).join('\n')}

SciGround works from available design and data toward supported claims, checking the meaning and conditions of each connection. It distinguishes established results, conditions that do not hold, and unresolved obligations. Changes require rechecking the affected guarantees against a new version. External assumptions and statistical uncertainty remain explicit.

Connection details: use the server address, authentication, and versioned API contract supplied for SciGround access. Do not infer an endpoint, credential, tool name, or request schema from the marketing page. Published nomue npm packages do not install the complete SciGround workflow.

## Documentation

- [Documentation index](https://www.licklider.ai/docs/index.md)
- [Documentation discovery](https://www.licklider.ai/docs/llms.txt)

## Earlier nomue artifacts

- [nomue documentation](https://www.licklider.ai/docs/nomue.md): original named artifacts, package versions, commands, and boundaries
- [nomue product reference](https://www.licklider.ai/nomue/)
- [nomue roadmap reference](https://www.licklider.ai/roadmap/)
- [nomue examples](https://www.licklider.ai/docs/examples.json): apply only to the named nomue artifacts

## Public evidence and company

- [Research](https://www.licklider.ai/research/): papers and research notes; each retains its own scope and review status
- [Engineering](https://www.licklider.ai/engineering/): implementation work and upstream reports; submission, confirmation, merge, and release are distinct
- [Evaluation](https://www.licklider.ai/evaluation/): scoped nomue studies, not a full SciGround evaluation
- [Latest](https://www.licklider.ai/latest/): public updates across Research, Engineering, News, and Blog
- [About Licklider](https://www.licklider.ai/about/)
- [RSS](https://www.licklider.ai/rss.xml)
- [JSON Feed](https://www.licklider.ai/feed.json)

Publication and update dates use UTC. Earlier publications retain their original names and evidence; they do not establish every SciGround capability.
`;
export const GET: APIRoute = () => new Response(content, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
