import { API_BASE, API_POSTS } from "../constants.mjs";

import { headers } from "../headers.mjs";

export async function fetchPostsAccordingToSearch(searchText) {
  const postsEndpoint = `${API_BASE}${API_POSTS}/search?q=${encodeURIComponent(
    searchText
  )}`;

  try {
    const response = await fetch(postsEndpoint, {
      headers: headers(),
    });

    if (response.ok) {
      const postData = await response.json();

      return postData.data;
    } else {
      console.error("Failed to fetch posts:", response.statusText);
      throw new Error("Failed to fetch posts");
    }
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    throw error;
  }
}
