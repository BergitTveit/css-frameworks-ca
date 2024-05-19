import { load } from "../storage/load.mjs";
import { API_BASE, API_SOCIAL } from "./constants.mjs";
import { headers } from "./headers.mjs";

export async function fetchUserProfile(name) {
  const url = `https://v2.api.noroff.dev/social/profiles/${name}`;
  try {
    const resolvedHeaders = await headers();
    const response = await fetch(url, {
      headers: resolvedHeaders,
    });

    if (response.ok) {
      const profileData = await response.json();
      return profileData;
    } else {
      throw new Error("Failed to fetch user profile");
    }
  } catch (error) {
    await alert("Failed to fetch user profile");
    if (name) {
      window.location.href = `/index/index.html?name=${name}`;
    } else {
      window.location.href = `/index/index.html`;
    }
    throw error;
  }

  //   return response;
}

export function displayUserProfile(userInfo) {
  const userNameElement = document.getElementById("username");
  const userEmailElement = document.getElementById("useremail");

  userNameElement.textContent = userInfo.name;
  userEmailElement.textContent = userInfo.email;
}

async function showUserProfile() {
  try {
    var profile = load("profile");
    console.log(profile);
    const urlParams = new URLSearchParams(window.location.search);
    const userName = urlParams.get("name");
    const userInfo = await fetchUserProfile(userName);
    displayUserInfo(userInfo);
  } catch (error) {
    console.error("Error:", error.message);
    // Handle error, e.g., show error message to the user
  }
}

await showUserProfile();
