import type { APIRoute } from 'astro';
import { SCIGROUND_DOCS_INDEX } from '../../data/sciground-docs';
export const GET: APIRoute = () => new Response(SCIGROUND_DOCS_INDEX, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
