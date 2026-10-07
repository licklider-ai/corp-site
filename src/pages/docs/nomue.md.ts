import type { APIRoute } from 'astro';
import { NOMUE_DOCS_INDEX_MARKDOWN } from '../../data/agent-docs';
export const GET: APIRoute = () => new Response(NOMUE_DOCS_INDEX_MARKDOWN, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
