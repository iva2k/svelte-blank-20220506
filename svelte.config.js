// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    // https://github.com/sveltejs/kit/tree/master/packages/adapter-static
    adapter: adapter({
      pages: 'build', // default
      assets: 'build', // default
      // fallback: null, // default
      fallback: 'index.html',
      precompress: false // default
    }),
    // ssr: false, // For Tauri // Moved to src/hooks.ts:handle() 1.0.0-next.222
    prerender: {
      // This can be false when using a fallback (i.e. SPA mode)
      default: true
    },

    paths: {
      base: dev ? '' : '/your-repo-name', // TODO: Repo name for Github pages.
    },
    // If you are not using a .nojekyll file, change your appDir to something not starting with an underscore.
    // For example, instead of '_app', use 'app_', 'internal', etc.
    appDir: 'internal',

    // Override http methods in the Todo forms
    methodOverride: {
      allowed: ['PATCH', 'DELETE']
    }
  }
};

export default config;
