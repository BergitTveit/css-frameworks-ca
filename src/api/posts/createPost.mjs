import { API_BASE, API_POSTS } from "../constants.mjs";
import { headers } from "../headers.mjs";

export async function createPost(event, title, body) {
  const mediaUrl = document.getElementById("mediaUrl").value;

  const post = {
    title: title,
    body: body,
  };

  if (mediaUrl) {
    post.media = {
      url: mediaUrl,
    };
  }

  fetch(`${API_BASE}${API_POSTS}`, {
    method: "POST",
    headers: headers(true),
    body: JSON.stringify(post),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        console.error("Error creating post:", data.error);
      } else {
        console.log("Post created successfully:", data);
      }
    })
    .catch((error) => {
      console.error("Error creating post:", error);
    });
}
