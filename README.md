# Blank Svelte App

## create-svelte

Built by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

```bash
# create a new project in my-app
npm init svelte my-app
cd my-app
npm install ;#(or pnpm install,etc)
git init && git add -A && git commit -m "Initial commit" (optional)
```

## Developing

Start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of the app:

```bash
npm run build
```

To preview the production build, execute `npm run preview`.

To deploy the app, need to install an [adapter](https://kit.svelte.dev/docs/adapters) for the target environment.

## Additions

Adddesktop support using Tauri.

### Remove Default Server

Explicitly opt out of SvelteKit’s assumption needing a server. Just attach the @sveltejs/adapter-static

```bash
npm i -D @sveltejs/adapter-static
```

```js
- import adapter from '@sveltejs/adapter-auto';
+ import adapter from '@sveltejs/adapter-static';
```

### Add Tauri

```bash
npm i -D @tauri-apps/api @tauri-apps/cli
```

Add script to package.json:

```json
  {
    scripts {
-      "dev": "svelte-kit dev",
-      "build": "svelte-kit build",
+      "dev": "tauri dev",
+      "build": "tauri build",
+      "svelte:dev": "svelte-kit dev --port 3000",
+      "svelte:build": "svelte-kit build",
+      "tauri": "tauri",
    }
  }
```

```bash
npm run tauri init
# Use ../build for "Where are your web assets (HTML/CSS/JS) located"
```

Add ssr:false to src/hooks.ts:

```ts
export const handle: Handle = async ({ event, resolve }) => {
    ...
-  const response = await resolve(event);
+  const response = await resolve(event, {
+    ssr: false, // For Tauri (since 1.0.0-next.222)
+  });
  return response;
};
```
