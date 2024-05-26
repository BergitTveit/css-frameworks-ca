import { deletePost } from "../../components/delete_post.mjs";

import { createPostHandler } from "./createPostHandler.mjs";
import { editPostHandler } from "./editPostHandler.mjs";

import { showPostFeed } from "./showPosts.mjs";

async function feed() {
  await addevents();
  await showPostFeed();
}

async function addevents() {
  document
    .getElementById("createPostForm")
    .addEventListener("submit", createPostHandler);

  document
    .getElementById("feedContainer")
    .addEventListener("click", (event) => {
      if (!event.target) {
        return;
      }

      // if (event.target.matches("button#delete-post-button")) {
      //   event.stopPropagation();
      //   deletePost(event);
      // } else
      if (event.target.matches("button#edit-post-button")) {
        event.stopPropagation();
        editPostHandler(event);
      } else {
        // default if smth go wromng
      }
    });
}

await feed();
