import { expect } from "chai";
import * as cashTill from "../src/cash-till";

describe("money", () => {
  it("should produce correct result", () => {
    expect(cashTill.addUp(30, 40)).to.equal("£70");
  });
});
