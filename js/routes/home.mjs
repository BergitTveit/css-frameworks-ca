import { setAuthListener } from "../ui/listeners/auth.mjs";

export async function homePage() {
  await setAuthListener();
}
