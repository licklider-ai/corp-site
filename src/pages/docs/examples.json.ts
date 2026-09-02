import type { APIRoute } from 'astro';
import { AGENT_EXAMPLES } from '../../data/agent-docs';

const payload = {
  schema_version: 'licklider.agent-examples.v1',
  published: '2026-09-02',
  authority_note:
    'Executable examples use the public verifier or local stdio MCP release candidate. Selection-boundary examples explain product behavior and are not hosted API requests.',
  examples: AGENT_EXAMPLES,
};

export const GET: APIRoute = () =>
  new Response(`${JSON.stringify(payload, null, 2)}\n`, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
