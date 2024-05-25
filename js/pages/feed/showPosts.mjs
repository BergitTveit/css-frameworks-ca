import { getPosts } from "../../api/posts/get.mjs";
import { displayPostFeed } from "./displayPostFeed.mjs";

export async function showPostFeed() {
  var posts = await getPosts();
  displayPostFeed(posts);
}
