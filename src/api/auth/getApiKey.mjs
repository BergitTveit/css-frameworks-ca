// import { load } from "./auth/auth.mjs";
// import { API_AUTH, API_BASE, API_KEY_URL } from "./constants.mjs";

// export const API_KEY = "a356de3a-416e-4828-8e8a-e5eeb22f3eb6";

//GET API FUNCTION: commented out, due to single time use.
// export async function getAPIKey() {
//   console.log(`Authorization header: Bearer ${load("token")}`);
//   const response = await fetch(API_BASE + API_AUTH + API_KEY_URL, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${load("token")}`,
//     },
//     body: JSON.stringify({
//       name: "Test key",
//     }),
//   });

//   if (response.ok) {
//     return await response.json();
//   }

//   console.error(await response.json());

//   throw new Error("Could not register for an API key!!!!");
// }

// getAPIKey();
