import { expect } from "chai";
import * as cashTill from "../../src/cash-till";

describe("cashTill", () => {
  it("should produce correct result", () => {
    const usTaxCalc = (amount: number) => Math.round(amount * 1.1);

    expect(cashTill.addUp("$", usTaxCalc)(30, 70)).to.equal("$110");
  });
});
