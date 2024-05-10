import { onAuth } from "../events/onAuth.mjs";

export function setAuthListener() {
  document.getElementById("loginForm").addEventListener("submit", onAuth);
}
