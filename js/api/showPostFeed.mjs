import { displayPostFeed } from "../pages/feedpage.mjs";
import { getPosts } from "./posts/get.mjs";

async function showPostFeed() {
  try {
    const posts = await getPosts();

    displayPostFeed(posts);
  } catch (error) {
    console.error("Error fetching and displaying post feed:", error.message);
  }
}

await showPostFeed();
