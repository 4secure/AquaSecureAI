import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://aquasecure.ai',
  base: '/',
  integrations: [
    // Tailwind v3 via tailwind.config.js. Base styles come from src/styles/global.css,
    // which declares @tailwind base/components/utilities.
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
});
