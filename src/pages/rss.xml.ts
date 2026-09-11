import type { APIRoute } from 'astro';
import { PUBLICATIONS } from '../data/publications';

const SITE_URL = 'https://www.licklider.ai';

const escapeXml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

const items = [...PUBLICATIONS]
  .sort((a, b) => b.sortKey.localeCompare(a.sortKey))
  .map((item) => {
    const url = new URL(item.href, SITE_URL).href;
    const published = item.publishedTime ? new Date(item.publishedTime.at).toUTCString() : undefined;

    return `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      ${published ? `<pubDate>${published}</pubDate>` : ''}
      <category>${escapeXml(item.category)}</category>
      <description>${escapeXml(`${item.summary}\n\nStatus: ${item.status}\n\nPublished ${item.date} (UTC).${item.updated ? ` Updated ${item.updated} (UTC).` : ''}`)}</description>
    </item>`;
  })
  .join('\n');

// Feed generation time is distinct from an article's publication/update time.
const lastBuildDate = new Date().toUTCString();

const content = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Licklider — Latest</title>
    <link>${SITE_URL}/latest/</link>
    <description>Research, engineering, company news, and practical Blog articles from Licklider.</description>
    <language>en</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

export const GET: APIRoute = () =>
  new Response(content, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
