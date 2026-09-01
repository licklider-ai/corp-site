import type { APIRoute, GetStaticPaths } from 'astro';
import {
  AGENT_DOCS,
  renderDocMarkdown,
  type AgentDoc,
} from '../../data/agent-docs';

export const getStaticPaths = (() =>
  AGENT_DOCS.map((doc) => ({
    params: { slug: doc.slug },
    props: { doc },
  }))) satisfies GetStaticPaths;

export const GET: APIRoute<{ doc: AgentDoc }> = ({ props }) =>
  new Response(renderDocMarkdown(props.doc), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
