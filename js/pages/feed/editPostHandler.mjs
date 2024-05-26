import { editPost } from "../../components/editPost.mjs";
import { showPostFeed } from "./showPosts.mjs";

// export async function editPostHandler(event, post) {
//   event.preventDefault();

//   await editPost(post.id);

//   await showPostFeed();
// }

export function editPostHandler(event) {
  event.preventDefault();
  const editButton = event.target;

  const postElement = event.target.closest(".post");

  if (!postElement) {
    console.error("Post element not found.");
    return;
  }

  const postId = postElement.dataset.postId;
  console.log("WITHIN EDITHANDLER ID : ", postId);

  console.log("PostELEMENT", postElement);
  try {
    const postBodyElement = postElement.querySelector("p");
    const postTagsElement = postElement.querySelector(".tags");
    const postMediaElement = postElement.querySelector("img");

    console.log("Post title element:", postTitleElement);
    console.log("Post body element:", postBodyElement);
    console.log("Post tags element:", postTagsElement);
    console.log("Post media element:", postMediaElement);
  } catch (error) {
    console.error("Error accessing Post Elements:", error);
  }
  if (
    !postTitleElement ||
    !postBodyElement ||
    !postTagsElement ||
    !postMediaElement
  ) {
    console.error("One or more post elements not found.");
    return;
  }

  const feedContainer = document.getElementById("feedContainer");
  feedContainer.innerHTML = "";

  const editForm = document.createElement("form");

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.value = postTitle;
  titleInput.name = "title";

  const bodyInput = document.createElement("textarea");
  bodyInput.value = postBody;
  bodyInput.name = "body";

  const tagsInput = document.createElement("input");
  tagsInput.type = "text";
  tagsInput.value = postTags;
  tagsInput.name = "tags";

  const mediaInput = document.createElement("input");
  mediaInput.type = "text";
  mediaInput.value = postMedia;
  mediaInput.name = "media";

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Save Changes";

  editForm.appendChild(titleInput);
  editForm.appendChild(bodyInput);
  editForm.appendChild(tagsInput);
  editForm.appendChild(mediaInput);
  editForm.appendChild(submitButton);

  editForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const updatedData = {
      title: titleInput.value,
      body: bodyInput.value,
      tags: tagsInput.value.split(",").map((tag) => tag.trim()),
      media: {
        url: mediaInput.value,
      },
    };

    await editPost(postId, updatedData);
    await showPostFeed();
  });

  feedContainer.appendChild(editForm);
}
