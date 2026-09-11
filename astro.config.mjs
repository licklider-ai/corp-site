// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { PUBLICATIONS, publicationModifiedInstant } from './src/data/publications.ts';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.licklider.ai',
  output: 'static',
  integrations: [sitemap({
    serialize(item) {
      const publication = PUBLICATIONS.find((entry) => entry.href === new URL(item.url).pathname);
      // The sitemap serializer expands date-only values to midnight. Omit an
      // unknown instant here; the article's JSON-LD retains its known UTC date.
      if (publication) item.lastmod = publicationModifiedInstant(publication);
      return item;
    },
  })],
});
