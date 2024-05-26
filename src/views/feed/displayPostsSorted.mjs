import { getPosts } from "../../api/posts/get.mjs";
import { displayPostFeed } from "./displayPostFeed.mjs";

export async function displayPostsSorted(event) {
  try {
    let posts = await getPosts();
    switch (event.target.value) {
      case "date":
        posts.sort((post1, post2) => {
          return post2.date - post1.date;
        });
        //todo add more sort options

        break;
      default:
        return await displayPostFeed(posts);
    }

    await displayPostFeed(posts.slice(0, 10));
  } catch (error) {
    console.error("Error fetching and sorting posts:", error);
    throw error;
  }
}
