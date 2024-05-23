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
