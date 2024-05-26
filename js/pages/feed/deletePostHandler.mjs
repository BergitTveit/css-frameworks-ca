import { deletePost } from "../../components/delete_post.mjs";
import { showPostFeed } from "./showPosts.mjs";

export async function deletePostHandler(event, post) {
  event.preventDefault();
  event.stopPropagation();

  console.log("POST ID ", post.id);
  await deletePost(post.id);

  await showPostFeed();
}
