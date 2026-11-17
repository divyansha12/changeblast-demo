import { describe, it, expect } from "vitest";
import { getProfile } from "../src/profile.js";

describe("Profile", () => {
  it("returns the correct username", () => {
    expect(getProfile("divyansha").username)
      .toBe("divyansha");
  });
});
