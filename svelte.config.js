import adapter from '@sveltejs/adapter-vercel'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // See https://svelte.dev/docs/kit/adapter-vercel for more information about adapter options.
    adapter: adapter({
      runtime: 'nodejs22.x',
    }),
  },
}

export default config
