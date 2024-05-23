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

    throw error;
  }

  //   return response;
}

export function displayUserProfile(userInfo) {
  const userNameElement = document.getElementById("username");
  const userEmailElement = document.getElementById("useremail");

  userNameElement.textContent = userInfo.data.name;
  userEmailElement.textContent = userInfo.data.email;
}

async function showUserProfile(profileName) {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const profileName = urlParams.get("name");

    if (profileName) {
      var apiProfile = await fetchUserProfile(profileName);
      displayUserProfile(apiProfile);
    } else {
      var profile = load("profile");
      var apiProfile = await fetchUserProfile(profile.name);

      displayUserProfile(apiProfile);
    }
  } catch (error) {
    console.error("Error:", error.message);
    if (name) {
      window.location.href = `/index/index.html?name=${name}`;
    } else {
      window.location.href = `/index/index.html`;
    }
  }
}

const urlParams = new URLSearchParams(window.location.search);
const profileName = urlParams.get("name");

await showUserProfile(profileName);
