import { API_BASE, API_POSTS } from "../api/constants.mjs";
import { headers } from "../api/headers.mjs";
import { getPosts } from "../api/posts/get.mjs";

export async function deletePost(postId) {
  //todo

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

    console.log("Post deleted successfully", deletePostUrl);
  } catch (error) {
    console.error("Error deleting post:", error);
  }
}
await getPosts();
