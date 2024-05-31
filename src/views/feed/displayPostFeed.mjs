export function displayPostFeed(posts) {
  const feedContainer = document.getElementById("feedContainer");
  feedContainer.innerHTML = "";

  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.dataset.postId = post.id;

    const bodyLink = document.createElement("a");
    bodyLink.href = `../single_post/index.html?id=${post.id}`;
    bodyLink.classList.add("post-body-link");

    const titleElement = document.createElement("h2");
    titleElement.textContent = post.title;
    titleElement.classList.add("post-title");
    titleElement.style.color = "black";

    const bodyElement = document.createElement("p");
    bodyElement.textContent = post.body || "No body text available";
    bodyElement.style.color = "black";

    const mediaElement = document.createElement("img");
    if (post.media) {
      mediaElement.src = post.media.url;
      mediaElement.alt = post.media.alt || "Post media";
    } else {
      mediaElement.style.display = "none";
    }

    bodyLink.appendChild(titleElement);
    bodyLink.appendChild(bodyElement);

    bodyLink.appendChild(mediaElement);

    postElement.appendChild(bodyLink);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete Post";
    deleteButton.classList.add("delete-post-button");

    const editButton = document.createElement("button");
    editButton.textContent = "Edit Post";
    editButton.classList.add("edit-post-button");

    postElement.appendChild(editButton);
    postElement.appendChild(deleteButton);

    feedContainer.appendChild(postElement);
  });
}
