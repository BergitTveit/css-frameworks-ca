import { deletePostHandler } from "./deletePostHandler.mjs";

export function displayPostFeed(posts) {
  const feedContainer = document.getElementById("feedContainer");
  feedContainer.innerHTML = "";

  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    const titleElement = document.createElement("h2");
    titleElement.textContent = post.title;

    const titleLink = document.createElement("a");
    titleLink.href = `../single_post/index.html?id=${post.id}`;
    titleLink.textContent = post.title;
    titleLink.classList.add("post-title", "h2", "text-dark", "fw-bold");

    const bodyElement = document.createElement("p");
    bodyElement.textContent = post.body || "No body text available";

    const tagsElement = document.createElement("p");
    tagsElement.textContent =
      "Tags: " + (post.tags.length > 0 ? post.tags.join(", ") : "No tags");

    postElement.addEventListener("click", (event) => {
      deletePostHandler(event, post);
    });
    // const mediaElement = document.createElement("img");
    // if (post.media) {
    //   mediaElement.src = post.media.url;
    //   mediaElement.alt = post.media.alt || "Post media";
    // } else {
    //   mediaElement.style.display = "none";
    // }

    // const createdElement = document.createElement("p");
    // createdElement.textContent =
    //   "Created: " + new Date(post.created).toLocaleString();

    // const updatedElement = document.createElement("p");
    // updatedElement.textContent =
    //   "Last updated: " + new Date(post.updated).toLocaleString();

    // const commentsElement = document.createElement("p");
    // commentsElement.textContent = "Comments: " + post._count.comments;

    // const reactionsElement = document.createElement("p");
    // reactionsElement.textContent = "Reactions: " + post._count.reactions;

    postElement.appendChild(titleLink);
    postElement.appendChild(bodyElement);
    postElement.appendChild(tagsElement);
    // postElement.appendChild(mediaElement);
    // postElement.appendChild(createdElement);
    // postElement.appendChild(updatedElement);
    // postElement.appendChild(commentsElement);
    // postElement.appendChild(reactionsElement);

    feedContainer.appendChild(postElement);
  });
}
