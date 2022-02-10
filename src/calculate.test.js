import {calculate} from "./calculate.js";

describe("Module calculate", () => {
  it("is calculate a function", () => {
    expect(calculate).toBeInstanceOf(Function);
  });
  it("returns 5 for '2 + 3'", () => {
    expect(calculate("2 + 3")).toBe(5);
  });
  it("returns 6 for '2 * 3'", () => {
    expect(calculate("2 * 3")).toBe(6);
  });
  it("dont returns 10 for '2 - 1'", () => {
    expect(calculate("2 - 1")).not.toBe(10);
  });

})