// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';
import image from '@astrojs/image';
import partytown from '@astrojs/partytown';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), image(), partytown()],

  vite: {
    plugins: [tailwindcss()]
  }
});