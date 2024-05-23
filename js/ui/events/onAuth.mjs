import { loginUser } from "../../api/auth/login_user.mjs";
import { registerUser } from "../../api/auth/register_user.mjs";
// import { API_BASE, API_SOCIAL } from "../../api/constants.mjs";

// import { getPosts } from "../../api/posts/get.mjs";

export async function onAuth(event) {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;
  const name = event.target.name.value;
  document.getElementById("loginButton").dataset.auth = "login";

  if (event.submitter.dataset.auth === "login") {
    await loginUser(email, password);
  } else {
    await registerUser(name, email, password);
    await loginUser(email, password);
  }

  // await getPosts();
}
