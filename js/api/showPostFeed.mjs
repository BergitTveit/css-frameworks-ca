import { displayPostFeed } from "../pages/feedpage.mjs";
import { getPosts } from "./posts/get.mjs";

async function showPostFeed() {
  try {
    const response = await getPosts();
    const posts = response.data;

    console.log(posts);
    displayPostFeed(posts);
  } catch (error) {
    console.error("Error fetching and displaying post feed:", error.message);
  }
}

await showPostFeed();
