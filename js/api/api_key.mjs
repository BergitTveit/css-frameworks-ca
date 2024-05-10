import {} from "../utils/contants.mjs";

export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function load(key) {
  const token = localStorage.getItem(key);
  if (!token) {
    throw new Error("Token not found in localStorage");
  }
  return JSON.parse(token);
}

export async function getAPIKey() {
  // console.log(`Authorization header: Bearer ${load("token")}`);
  const response = await fetch(API_BASE + API_AUTH + API_KEY_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${load("token")}`,
    },
    body: JSON.stringify({
      name: "Test key",
    }),
  });

  if (response.ok) {
    return await response.json();
  }

  console.error(await response.json());

  throw new Error("Could not register for an API key!!!!");
}

getAPIKey().then(console.log);
