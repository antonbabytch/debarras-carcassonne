// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://debarras-carcassonne.fr',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/merci') &&
        !page.includes('/__forms') &&
        !page.includes('/mentions-legales') &&
        !page.includes('/politique-confidentialite'),
    }),
  ],
});
