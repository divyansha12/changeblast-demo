import { describe, it, expect } from "vitest";
import { login } from "../src/login.js";

describe("Login", () => {
  it("logs in a valid user", () => {
    expect(login("divyansha", "password123"))
      .toBe("Login successful");
  });

  it("rejects invalid credentials", () => {
    expect(login("divyansha", "123"))
      .toBe("Invalid credentials");
  });
});
