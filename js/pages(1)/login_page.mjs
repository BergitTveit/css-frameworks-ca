import { loginUser } from "../api/auth.mjs";

document
  .getElementById("loginForm")
  .addEventListener("submit", async function (event) {
    console.log("hello");
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    try {
      await loginUser(email, password);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  });

// document
//   .getElementById("registerButton")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//   });
