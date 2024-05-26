import { API_BASE, API_POSTS } from "../api/constants.mjs";
import { headers } from "../api/headers.mjs";
import { getPosts } from "../api/posts/get.mjs";

export async function editPost(postId, updateData) {
  if (!postId) {
    throw new Error("No post ID found.");
  }
  console.log("EditPost Function log: ", updateData);
  if (
    !updateData ||
    typeof updateData !== "object" ||
    !updateData.title ||
    !updateData.body ||
    !Array.isArray(updateData.tags)
  ) {
    throw new Error(
      "Invalid updateData. It must be an object with title, body, and tags properties."
    );
  }

  const editPostUrl = `${API_BASE}${API_POSTS}/${postId}`;

  try {
    const response = await fetch(editPostUrl, {
      method: "PUT",
      headers: headers(true),

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
