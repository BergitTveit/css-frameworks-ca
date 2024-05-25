
export async function createPostHandler(event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const body = document.getElementById("body").value;
  
    await createPost(event, title, body);
    await showPostFeed();
  }