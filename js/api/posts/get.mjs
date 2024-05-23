import { API_BASE, API_POSTS } from "../constants.mjs";
import { headers } from "../headers.mjs";

export async function getPosts() {
  const response = await fetch(API_BASE + API_POSTS, {
    headers: headers(),
  });

  return await response.json();
}

await getPosts();
