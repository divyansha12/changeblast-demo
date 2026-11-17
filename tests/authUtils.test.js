import { describe, it, expect } from "vitest";
import { validateUser } from "../src/authUtils.js";

describe("Authentication utilities", () => {
  it("accepts valid credentials", () => {
    expect(validateUser("divyansha", "password123")).toBe(true);
  });

  it("rejects short passwords", () => {
    expect(validateUser("divyansha", "123")).toBe(false);
  });
});
