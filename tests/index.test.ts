import { test, expect, describe } from "bun:test";

describe("github-stack-cli", () => {
  test("example test - should pass", () => {
    expect(1 + 1).toBe(2);
  });

  test("should calculate percentage correctly", () => {
    const stacks = { TypeScript: 10, JavaScript: 5 };
    const total = Object.values(stacks).reduce((a, b) => a + b, 0);
    const percent = ((stacks.TypeScript / total) * 100).toFixed(1);
    expect(percent).toBe("66.7");
  });
});
