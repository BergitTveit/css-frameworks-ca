// import { deletePost } from "../../components/delete_post.mjs";

import { createPostHandler } from "./createPostHandler.mjs";
import { deletePostHandler } from "./deletePostHandler.mjs";
import { editPostHandler } from "./editPostHandler.mjs";
import { showPostFeed } from "./showPosts.mjs";

async function feed() {
  console.log("start");
  await addevents();
  await showPostFeed();
}

await feed();

async function addevents() {
  document
    .getElementById("createPostForm")
    .addEventListener("submit", createPostHandler);

  const feedContainer = document.getElementById("feedContainer");

  feedContainer.addEventListener("click", async (event) => {
    if (!event.target) {
      return;
    }
    const deleteButton = event.target.closest(".delete-post-button");

    if (deleteButton) {
      event.stopPropagation();
      const postElement = event.target.closest(".post");
      if (postElement) {
        const postId = postElement.dataset.postId;
        deletePostHandler(event, { id: postId });
      }
    }

    const editButton = event.target.closest(".edit-post-button");
    if (editButton) {
      event.stopPropagation();
      editPostHandler(event);
    }
  });
}
