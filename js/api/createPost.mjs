import { API_BASE, API_POSTS } from "./constants.mjs";
import { headers } from "./headers.mjs";

export async function createPost(event, title, body) {
  // const tags = document
  //   .getElementById("tags")
  //   .value.split(",")
  //   .map((tag) => tag.trim());
  // const mediaUrl = document.getElementById("mediaUrl").value;
  // const mediaAlt = document.getElementById("mediaAlt").value;

  const post = {
    title: title,
    body: body,
    //   tags: tags,
    //   media: {
    //     url: mediaUrl,
    //     alt: mediaAlt,
    //   },
  };

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
        // renderPost(data);
      }
    })
    .catch((error) => {
      console.error("Error creating post:", error);
    });
}

// function renderPost(post) {
//   const postContainer = document.createElement("div");
//   postContainer.classList.add("post");

//   const postTitle = document.createElement("h2");
//   postTitle.textContent = post.title;
//   postContainer.appendChild(postTitle);

//   if (post.body) {
//     const postBody = document.createElement("p");
//     postBody.textContent = post.body;
//     postContainer.appendChild(postBody);
//   }

//   if (post.tags && post.tags.length > 0) {
//     const postTags = document.createElement("p");
//     postTags.textContent = "Tags: " + post.tags.join(", ");
//     postContainer.appendChild(postTags);
//   }

//   if (post.media && post.media.url) {
//     const postMedia = document.createElement("img");
//     postMedia.src = post.media.url;
//     postMedia.alt = post.media.alt;
//     postContainer.appendChild(postMedia);
//   }

//   document.body.appendChild(postContainer);
// }
