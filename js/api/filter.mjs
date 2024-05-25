import { getPosts } from "./posts/get.mjs";

export async function fetchPostsByCategory(targetCategory) {
  try {
    const posts = await getPosts();

    const filteredPosts = posts.filter((post) => {
      return (
        post.categories &&
        post.categories.some(
          (category) =>
            category && category.toLowerCase() === targetCategory.toLowerCase()
        )
      );
    });
    //Change categories to tags? for noroff api?
    return filteredPosts;
  } catch (error) {
    console.error("Error fetching posts by category", error);
  }
}
