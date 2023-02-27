import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
 
export const POST = (async ({ request }) => {
  const { username, password } = await request.json();

  console.log(username, password);
  
  return json({success: true, msg: 'logged in'});
}) satisfies RequestHandler;