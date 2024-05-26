import { fetchPostsAccordingToSearch } from "../../api/posts/search.mjs";
import { displayPostsSorted } from "./displayPostsSorted.mjs";
import { createPostHandler } from "./createPostHandler.mjs";
import { deletePostHandler } from "./deletePostHandler.mjs";
import { displayPostFeed } from "./displayPostFeed.mjs";
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
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");

  searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const searchQuery = searchInput.value.trim();

    localStorage.setItem("searchQuery", searchQuery);

    if (searchQuery) {
      const filteredPosts = await fetchPostsAccordingToSearch(searchQuery);
      await displayPostFeed(filteredPosts);
    } else {
      await showPostFeed();
    }
  });

  document
    .getElementById("sort-select")
    .addEventListener("change", displayPostsSorted);

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
