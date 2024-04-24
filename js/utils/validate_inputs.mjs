export function validateEmail(email) {
  const emailPattern = /^(.+)@(noroff\.no|stud\.noroff\.no)$/;

  if (email.trim() === "") {
    alert("Please enter your email address.");
    return false;
  }

  if (!emailPattern.test(email)) {
    alert(
      "Please enter a valid email address from @noroff.no or @stud.noroff.no domains."
    );
    return false;
  }

  return true;
}
// Make text underneath input field instead of alert, if input after @ does not start matching the required email.
export function validatePassword(password) {
  if (password.trim() === "") {
    alert("Please enter your password.");
    return false;
  }
  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return false;
  }
  return true;
}
// Make text underneath input if input does not contain the correct amount of letters, eg. countdown.
