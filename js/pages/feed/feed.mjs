import { createPostHandler } from "./createPostHandler.mjs";

import { showPostFeed } from "./showPosts.mjs";

async function feed() {
  await addevents();
  await showPostFeed();
}

async function addevents() {
  document
    .getElementById("createPostForm")
    .addEventListener("submit", createPostHandler);

 
}

await feed();
