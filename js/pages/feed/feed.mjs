import { deletePost } from "../../components/delete_post.mjs";
import { editPost } from "../../components/editPost.mjs";
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

  document
    .getElementById("feedContainer")
    .addEventListener("click", (event) => {
      if (!event.target) {
        return;
      }

      if (event.target.id === "delete-post-button") {
        deletePost(event);
      } else if (event.target.id === "edit-post-button") {
        editPost(event); // todo
      } else {
        // default if smth go wromng
      }
    });
}

await feed();
