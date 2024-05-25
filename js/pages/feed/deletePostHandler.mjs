import { deletePost } from "../../api/posts/get.mjs";
import { showPostFeed } from "./showPosts.mjs";

export async function deletePostHandler(event, post) {
  event.preventDefault();

  //post.title = document.querySelector
  await deletePost(post.id);

  await showPostFeed();
}
