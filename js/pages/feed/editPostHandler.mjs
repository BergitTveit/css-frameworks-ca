import { editPost } from "../../components/editPost.mjs";
import { showPostFeed } from "./showPosts.mjs";

export function editPostHandler(event) {
  event.preventDefault();

  const postElement = event.target.closest(".post");

  if (!postElement) {
    console.error("Post element not found.");
    return;
  }

  const postId = postElement.dataset.postId;
  let postTitleElement = null;
  let postBodyElement = null;
  let postMediaElement = null;
  try {
    postTitleElement = postElement.querySelector(".post-title");
    postBodyElement = postElement.querySelector("p");
    postMediaElement = postElement.querySelector("img");

    console.log("Post title element:", postTitleElement);
    console.log("Post body element:", postBodyElement);
    console.log("Post media element:", postMediaElement);
  } catch (error) {
    console.error("Error accessing Post Elements:", error);
  }
  if (!postTitleElement || !postBodyElement || !postMediaElement) {
    console.error("One or more post elements not found.");
    return;
  }

  const feedContainer = document.getElementById("feedContainer");
  feedContainer.innerHTML = "";

  const editForm = document.createElement("form");

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.value = postTitleElement.textContent;
  titleInput.name = "title";

  const bodyInput = document.createElement("textarea");
  bodyInput.value = postBodyElement.textContent;
  bodyInput.name = "body";

  const mediaInput = document.createElement("input");
  mediaInput.type = "text";
  mediaInput.value = postMediaElement.src;
  mediaInput.name = "media";

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Save Changes";

  editForm.appendChild(titleInput);
  editForm.appendChild(bodyInput);
  editForm.appendChild(mediaInput);
  editForm.appendChild(submitButton);

  editForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const updatedData = {
      title: titleInput.value,
      body: bodyInput.value,
      tags: ["test-tag1", "test-tag2"],
      media: {
        url: mediaInput.value,
        alt: "Alt text for testing",
      },
    };

    if (mediaInput.value !== "") {
      updatedData.media = {
        url: mediaInput.value,
        alt: "Alt text for testing",
      };
    }
    console.log("UPDATED DATA", updatedData);
    await editPost(postId, updatedData);
    await showPostFeed();
  });

  feedContainer.appendChild(editForm);
}
