// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { PUBLICATIONS, publicationModified } from './src/data/publications.ts';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.licklider.ai',
  output: 'static',
  integrations: [sitemap({
    serialize(item) {
      const publication = PUBLICATIONS.find((entry) => entry.href === new URL(item.url).pathname);
      if (publication) item.lastmod = publicationModified(publication);
      return item;
    },
  })],
});
