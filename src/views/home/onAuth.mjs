import { loginUser } from "../../api/auth/login_user.mjs";
import { registerUser } from "../../api/auth/register_user.mjs";

/**
 * Event handler for authentication
 * @param {event} event - The event
 */
export async function onAuth(event) {
  try {
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
  } catch (error) {
    alert("could not login user");
  }
}
