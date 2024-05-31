import { onAuth } from "./onAuth.mjs";

/**
 * Loads homepage Module and setup events
 */
export async function homePage() {
  document.getElementById("loginForm").addEventListener("submit", onAuth);
}

await homePage();
