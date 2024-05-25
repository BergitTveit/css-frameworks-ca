import { getPosts } from "./posts/get.mjs";

export async function fetchPostsSortedByDate(amount) {
  try {
    let posts = await getPosts();

    posts.sort((post1, post2) => {
      return post2.date - post1.date;
    });

    return posts.slice(0, amount);
  } catch (error) {
    console.error("Error fetching and sorting posts:", error);
    throw error;
  }
}
