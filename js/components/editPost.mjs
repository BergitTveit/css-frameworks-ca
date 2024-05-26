import { API_BASE, API_POSTS } from "../api/constants.mjs";
import { headers } from "../api/headers.mjs";
import { getPosts } from "../api/posts/get.mjs";

export async function editPost(postId, updateData) {
  if (!postId) {
    throw new Error("No post ID found.");
  }

  const editPostUrl = `${API_BASE}${API_POSTS}/${postId}`;

  try {
    const response = await fetch(editPostUrl, {
      method: "PUT",
      headers: headers(),

      body: JSON.stringify(updateData),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to Edit post with ID ${postId}: ${response.statusText}`
      );
    }

    console.log("Post Edit successfully", editPostUrl);
  } catch (error) {
    console.error("Error Editing post:", error);
  }
}

await getPosts();
