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

// document.addEventListener("DOMContentLoaded", async () => {

// if (!searchForm) {
//   console.error("Search form not found");
//   return;
// }

// const savedSearchQuery = localStorage.getItem("searchQuery");

// if (savedSearchQuery) {
//   searchInput.value = savedSearchQuery;
// }
// const searchText = searchInput.value.trim();

// if (searchText) {
//   const filteredPosts = await fetchPostsAccordingToSearch(searchText);
//   console.log("Filtered Posts for search:", filteredPosts);
// }

// });
