export const API_BASE = "https://v2.api.noroff.dev";
export const API_AUTH = "/auth";
export const API_REGISTER = "/register";
export const API_LOGIN = "/login";
export const API_KEY_URL = "/create-api-key";

console.log("hello");

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
  console.log("hi");
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;
  const name = event.target.name.value;

  if (event.submitter.dataset.auth === "login") {
    await login(email, password);
  } else {
    await registerUser(name, email, password);
    await loginUser(email, password);
  }
  const posts = await getPosts();
  console.log(posts);
}

export function setAuthListener() {
  document.getElementById("loginForm").addEventListener("submit", onAuth);
}

setAuthListener();

//MOVE TO USER.mjs ?

// export async function getPosts() {
//   const response = await fetch(API_BASE + "social/posts", {
//     headers: {
//       Authorization: `Bearer ${load("token")}`,
//     },
//   });
//   return await response.json();
// }

// export function save(key, value) {
//   localStorage.setItem(key, JSON.stringify(value));
// }
// export function load(key) {
//   return JSON.parse(localStorage.getItem(key));
// }

// export async function getAPIKey() {
//   // console.log(`Authorization header: Bearer ${load("token")}`);
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

// getAPIKey().then(console.log("hello"));
