const path = require('path');

const preprocess = require('svelte-preprocess');

const alias = {
  // $app: path.resolve(__dirname, '../node_modules/@sveltejs/kit/assets/runtime/app'),
  // '@components': path.resolve('./src/lib/components'),
  // '@lib': path.resolve('./src/lib'),
  // '@utils': path.resolve('./src/lib/utils')
};

module.exports = {
  // Customize Vite config
  async viteFinal(config, { configType }) {
    config.resolve.alias = alias;
    return config;
  },

  addons: [
    '@storybook/addon-links',
    //'@storybook/addon-docs',
    //'@storybook/addon-controls',
    '@storybook/addon-essentials',
    '@storybook/addon-svelte-csf',
    '@storybook/addon-interactions',
  ],
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true,
  },
  framework: '@storybook/svelte',
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'
  ],
  svelteOptions: {
    // preprocess: import('../svelte.config.js').then( ({default: m}) => m.preprocess; // import() is async, won't work in main.cjs.
    preprocess: preprocess(),
  },
  features: {
    // storyStoreV7: false, // Disable on-demand stories loading. Not loading any stories in storybook v6.5.3
    storyStoreV7: true, // Enable on-demand stories loading/ Not loading .stories.svelte in storybook v6.5.3
  }
};