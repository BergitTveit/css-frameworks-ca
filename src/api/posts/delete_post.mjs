import { API_BASE, API_POSTS } from "../constants.mjs";
import { headers } from "../headers.mjs";
import { getPosts } from "./get.mjs";

export async function deletePost(postId) {
  if (!postId) {
    throw new Error("No post ID found.");
  }

  const deletePostUrl = `${API_BASE}${API_POSTS}/${postId}`;
  try {
    const response = await fetch(deletePostUrl, {
      method: "DELETE",
      headers: headers(),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to delete post with ID ${postId}: ${response.statusText}`
      );
    }
  } catch (error) {
    console.error("Error deleting post:", error);
  }
}
await getPosts();
