export function validateUser(username, password) {
  return username.length > 0 && password.length >= 6;
}
