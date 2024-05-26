import { editPost } from "../../components/editPost.mjs";
import { showPostFeed } from "./showPosts.mjs";

export async function deletePostHandler(event, post) {
  event.preventDefault();

  //post.title = document.querySelector
  await editPost(post.id);

  await showPostFeed();
}
