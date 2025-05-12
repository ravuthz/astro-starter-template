// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';
import image from '@astrojs/image';
import partytown from '@astrojs/partytown';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import solid from '@astrojs/solid-js';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), image(), partytown(), react({
    include: ['**/react/*'],
    // '**/!(*core*)*.tsx'
  }), solid({
    include: ['**/solid/*'],
    // '**/!(*react*)*.tsx'
  }), svelte({
    include: ['**/svelte/*'],
    extensions: ['.svelte'] 
  })],

  vite: {
    plugins: [tailwindcss()]
  }
});