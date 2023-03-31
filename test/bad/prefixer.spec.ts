import { expect } from "chai";
import { prefixer } from "../../src/prefixer";

describe("prefixer", () => {
  it("should produce correct result", () => {
    expect(prefixer("a", "b")).to.equal("ab");
  });
});
