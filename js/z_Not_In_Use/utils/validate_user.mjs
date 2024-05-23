import { validateEmail, validatePassword } from "./validate_inputs.mjs";

export function validateLoginForm() {
  const form = document.getElementById("loginForm");
  console.log("hello");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!validateEmail(email) || !validatePassword(password)) {
      alert(
        "Please enter a valid email address from @noroff.no or @stud.noroff.no domains."
      );
      return;
    }
    console.log("Email:", email);
    console.log("Password:", password);
  });
}
validateLoginForm();

// consider DOM loaded. Or when to link this togehter to make site start.
