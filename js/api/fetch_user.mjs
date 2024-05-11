import { load } from "../storage/load.mjs";
import { API_BASE, API_SOCIAL } from "./constants.mjs";
import { headers } from "./headers.mjs";

export async function fetchUserProfile() {
  const resolvedHeaders = await headers();

  const url = `https://v2.api.noroff.dev/social/profiles/${name}`;

  const response = await fetch(url, {
    headers: resolvedHeaders,
  });

  console.log("name: ", name);
  console.log("RESPONSE: ", response);
  // if (response.ok) {
  //   const profileData = await response.json();
  //   return profileData;
  // }
  if (!response.ok) {
    console.error(
      `Fetch failed with status ${response.status}: ${response.statusText}`
    );
    throw new Error(
      `Fetch request failed with status ${response.status} - ${response.statusText}`
    );
  }

  // throw new Error("Failed to fetch profile by name");

  return response;
}

export function displayUserProfile(userInfo) {
  const userNameElement = document.getElementById("username");
  const userEmailElement = document.getElementById("useremail");

  userNameElement.textContent = userInfo.name;
  userEmailElement.textContent = userInfo.email;
}

async function showUserProfile() {
  try {
    const userInfo = await fetchUserProfile();
    displayUserInfo(userInfo);
  } catch (error) {
    console.error("Error:", error.message);
    // Handle error, e.g., show error message to the user
  }
}
showUserProfile();
