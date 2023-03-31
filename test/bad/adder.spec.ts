import { expect } from "chai";
import { adder } from "../../src/adder";

describe("adder", () => {
  it("should produce correct result", () => {
    expect(adder([30, 40])).to.equal(70);
  });
});
