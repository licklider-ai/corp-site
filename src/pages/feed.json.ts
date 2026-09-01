import type { APIRoute } from 'astro';
import { PUBLICATIONS } from '../data/publications';

const SITE_URL = 'https://www.licklider.ai';

const content = JSON.stringify(
  {
    version: 'https://jsonfeed.org/version/1.1',
    title: 'Licklider — Latest',
    home_page_url: `${SITE_URL}/latest/`,
    feed_url: `${SITE_URL}/feed.json`,
    description: 'Research, engineering, and company updates from Licklider.',
    language: 'en',
    authors: [
      {
        name: 'Licklider, Inc.',
        url: SITE_URL,
      },
    ],
    items: [...PUBLICATIONS]
      .sort((a, b) => b.sortKey.localeCompare(a.sortKey))
      .map((item) => {
        const url = new URL(item.href, SITE_URL).href;

        return {
          id: url,
          url,
          title: item.title,
          summary: item.summary,
          date_published: `${item.sortKey}T00:00:00Z`,
          tags: [item.category, item.type],
        };
      }),
  },
  null,
  2,
);

export const GET: APIRoute = () =>
  new Response(content, {
    headers: {
      'Content-Type': 'application/feed+json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
