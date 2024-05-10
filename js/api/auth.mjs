export const API_BASE = "https://v2.api.noroff.dev";
export const API_AUTH = "/auth";
export const API_REGISTER = "/register";
export const API_LOGIN = "/login";
export const API_KEY_URL = "/create-api-key";
export const API_KEY = "a356de3a-416e-4828-8e8a-e5eeb22f3eb6";

console.log("hello");
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

export async function registerUser(name, email, password) {
  const response = await fetch(API_BASE + API_AUTH + API_REGISTER, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ name, email, password }),
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error("Could not register the account");
}

export async function loginUser(email, password) {
  const response = await fetch(API_BASE + API_AUTH + API_LOGIN, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const { accessToken, ...profile } = (await response.json()).data;
    save("token", accessToken);
    save("profile", profile);
    return profile;
  }

  throw new Error("Could not login the account");
}

export async function onAuth(event) {
  console.log("start onAuth");
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;
  const name = event.target.name.value;
  document.getElementById("loginButton").dataset.auth = "login";

  if (event.submitter.dataset.auth === "login") {
    await loginUser(email, password);
  } else {
    await registerUser(name, email, password);
    await loginUser(email, password);
  }

  console.log("UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU");
  const posts = await getPosts();
  console.log(posts);
}

export function setAuthListener() {
  document.getElementById("loginForm").addEventListener("submit", onAuth);
}

setAuthListener();

// export async function getAPIKey() {
//   console.log(`Authorization header: Bearer ${load("token")}`);
//   const response = await fetch(API_BASE + API_AUTH + API_KEY_URL, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${load("token")}`,
//     },
//     body: JSON.stringify({
//       name: "Test key",
//     }),
//   });

//   if (response.ok) {
//     return await response.json();
//   }

//   console.error(await response.json());

//   throw new Error("Could not register for an API key!!!!");
// }

// getAPIKey().then(console.log("hello API KEY"));

export async function getPosts() {
  console.log("GETPOST");
  const response = await fetch(API_BASE + "/social/posts", {
    headers: {
      Authorization: `Bearer ${load("token")}`,
      "X-Noroff-API-Key": API_KEY,
    },
  });

  return await response.json();
}
