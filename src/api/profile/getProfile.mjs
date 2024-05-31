import { headers } from "../headers.mjs";

export async function getProfile(name) {
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
