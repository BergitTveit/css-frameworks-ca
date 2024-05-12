import { load } from "../storage/load.mjs";
import { API_BASE, API_SOCIAL } from "./constants.mjs";
import { headers } from "./headers.mjs";

// export async function fetchUserProfile(name) {
//   const url = `https://v2.api.noroff.dev/social/profiles/${name}`;
//   try {
//     const resolvedHeaders = await headers();

//     console.log(resolvedHeaders, "Resolved headers in here...");

//     const response = await fetch(url, {
//       headers: resolvedHeaders,
//     });

//     console.log("name: ", name);

//     if (response.ok) {
//       const profileData = await response.json();
//       console.log(profileData);
//       return profileData;
//     }
//   } catch {
//     throw new Error("Failed to fetch user profile");
//   }
//   console.log("RESPONSE: ", response);
//   return response;
// }
// fetchUserProfile();

// export function displayUserProfile(userInfo) {
//   const userNameElement = document.getElementById("username");
//   const userEmailElement = document.getElementById("useremail");

//   userNameElement.textContent = userInfo.name;
//   userEmailElement.textContent = userInfo.email;
// }

// async function showUserProfile(name) {
//   try {
//     const userInfo = await fetchUserProfile(name);
//     displayUserInfo(userInfo);
//   } catch (error) {
//     console.error("Error:", error.message);
//     // Handle error, e.g., show error message to the user
//   }
// }
// showUserProfile();
