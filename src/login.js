import { validateUser } from "./authUtils.js";

export function login(username, password) {
  if (!validateUser(username, password)) {
    return "Invalid credentials";
  }
  return "Login successful";
}
