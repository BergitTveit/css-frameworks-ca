import { load } from "../../storage/load.mjs";
import { getProfile } from "../../api/profile/getProfile.mjs";

async function showUserProfile(profileName) {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const profileName = urlParams.get("name");
    if (profileName) {
      var apiProfile = await getProfile(profileName);
      displayUserProfile(apiProfile);
    } else {
      var profile = load("profile");
      var apiProfile = await getProfile(profile.name);
      displayUserProfile(apiProfile);
    }
  } catch (error) {
    console.error("Error:", error.message);
    if (name) {
      window.location.href = `/index.html?name=${name}`;
    } else {
      window.location.href = `/index.html`;
    }
  }
}

export function displayUserProfile(userInfo) {
  const profileContainer = document.getElementById("profileContainer");
  profileContainer.innerHTML = "";

  const userNameElement = document.createElement("h1");
  userNameElement.textContent = userInfo.data.name;

  const userEmailElement = document.createElement("p");
  userEmailElement.textContent = userInfo.data.email;

  const avatarImage = document.createElement("img");
  avatarImage.src = userInfo.data.avatar.url;
  avatarImage.alt = userInfo.data.avatar.alt;
  avatarImage.style.width = "100px";

  const counts = userInfo.data._count;
  const countsElement = document.createElement("div");
  countsElement.innerHTML = `
        <p>Posts: ${counts.posts}</p>
        <p>Followers: ${counts.followers}</p>
        <p>Following: ${counts.following}</p>
      `;

  profileContainer.appendChild(avatarImage);
  profileContainer.appendChild(userNameElement);
  profileContainer.appendChild(userEmailElement);

  profileContainer.appendChild(document.createElement("br"));
  profileContainer.appendChild(countsElement);
}

const urlParams = new URLSearchParams(window.location.search);
const profileName = urlParams.get("name");

await showUserProfile(profileName);
