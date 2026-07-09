import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://superiorseniorbenefits.com', // update with real domain
  integrations: [sitemap()],
  output: 'static',
});
