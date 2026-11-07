import { redirect } from '@sveltejs/kit'

export function load() {
  throw redirect(302, 'https://photos.app.goo.gl/bAfhmu6M6qLtonz56')
}
