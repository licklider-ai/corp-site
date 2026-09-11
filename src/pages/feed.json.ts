import type { APIRoute } from 'astro';
import { PUBLICATIONS, publicationModifiedInstant } from '../data/publications';

const SITE_URL = 'https://www.licklider.ai';

const content = JSON.stringify(
  {
    version: 'https://jsonfeed.org/version/1.1',
    title: 'Licklider — Latest',
    home_page_url: `${SITE_URL}/latest/`,
    feed_url: `${SITE_URL}/feed.json`,
    description: 'Research, engineering, company news, and practical Blog articles from Licklider.',
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
          content_text: `${item.summary}\n\nStatus: ${item.status}\n\nPublished ${item.date} (UTC).${item.updated ? ` Updated ${item.updated} (UTC).` : ''}\n\nRead the full article: ${url}`,
          date_published: item.publishedTime?.at,
          date_modified: publicationModifiedInstant(item),
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
