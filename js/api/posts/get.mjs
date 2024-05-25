import { API_BASE, API_POSTS } from "../constants.mjs";
import { headers } from "../headers.mjs";

export async function getPosts() {
  const response = await fetch(API_BASE + API_POSTS, {
    headers: headers(),
  });
  const result = await response.json();

  return result.data ? result.data : [];
}
export async function deletePost(postId) {
  //todo
  console.log("todo");
}
await getPosts();

export function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  return { id };
}

export async function getPostById(postId) {
  try {
    const response = await fetch(`${API_BASE + API_POSTS}/${postId}`, {
      headers: headers(),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const postData = await response.json();
    console.log("Post Data:", postData.data);
    return postData.data;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}
