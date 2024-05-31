import { deletePost } from "../../api/posts/delete_post.mjs";
import { showPostFeed } from "./showPosts.mjs";

export async function deletePostHandler(event, post) {
  event.preventDefault();
  event.stopPropagation();

  await deletePost(post.id);

  await showPostFeed();
}
