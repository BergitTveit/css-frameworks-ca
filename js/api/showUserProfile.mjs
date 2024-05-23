import { displayUserProfile } from "../components/profile.mjs";
import { load } from "../storage/load.mjs";
import { fetchUserProfile } from "./fetch_user.mjs";

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
