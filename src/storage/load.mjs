export function load(key) {
  const token = localStorage.getItem(key);
  if (!token) {
    throw new Error("Token not found in localStorage");
  }
  return JSON.parse(token);
}
