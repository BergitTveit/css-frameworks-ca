import { load } from "../../storage/load.mjs";

export const isLoggedIn = () => {
  const token = load("token");
  return Boolean(token);
};

export const profile = () => load("profile");
