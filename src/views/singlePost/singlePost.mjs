import { getPostById, getQueryParams } from "../../api/posts/get.mjs";



async function displayPostDetails() {

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");



  const post = await getPostById(id);

  const postDetailsContainer = document.getElementById("post-details");

  const postTitle = document.createElement("h1");
  postTitle.innerText = post.title || "No content available";

  const postBody = document.createElement("p");
  postBody.innerText = post.body;

  postDetailsContainer.appendChild(postTitle);
  postDetailsContainer.appendChild(postBody);

  if (post.tags && post.tags.length > 0) {
    const postTags = document.createElement("ul");
    post.tags.forEach((tag) => {
      const tagItem = document.createElement("li");
      tagItem.innerText = tag;
      postTags.appendChild(tagItem);
    });
    postDetailsContainer.appendChild(postTags);
  }

  if (post.media) {
    const postMedia = document.createElement("img");
    postMedia.src = post.media.url;
    postDetailsContainer.appendChild(postMedia);
  }
}
displayPostDetails();
