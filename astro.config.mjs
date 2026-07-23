import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://aquasecure.ai',
  base: '/',
  integrations: [
    icon(),
    // Tailwind v3 via existing tailwind.config.js. Base styles come from src/index.css,
    // which already declares @tailwind base/components/utilities.
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
});
