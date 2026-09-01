import type { APIRoute } from 'astro';
import { AGENT_EXAMPLES } from '../../data/agent-docs';

const payload = {
  schema_version: 'licklider.agent-examples.v1',
  published: '2026-09-01',
  authority_note:
    'Executable examples are derived from the public verifier fixtures. Selection-boundary examples explain product behavior and are not public API requests.',
  examples: AGENT_EXAMPLES,
};

export const GET: APIRoute = () =>
  new Response(`${JSON.stringify(payload, null, 2)}\n`, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
