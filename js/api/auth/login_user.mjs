import { save } from "../../storage/save.mjs";
import { API_AUTH, API_BASE, API_LOGIN } from "../constants.mjs";
import { fetchUserProfile } from "../fetch_user.mjs";

export async function loginUser(email, password) {
  const response = await fetch(API_BASE + API_AUTH + API_LOGIN, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  console.log(response);

  if (response.ok) {
    const { accessToken, ...profile } = (await response.json()).data;
    save("token", accessToken);
    save("profile", profile);

    window.location.href = "../../profile/index.html";

    return profile;
  }

  throw new Error("Could not login the account");
}
