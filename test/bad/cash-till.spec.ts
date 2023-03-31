import { expect } from "chai";
import * as cashTill from "../../src/cash-till";
import * as adder from "../../src/adder";
import * as prefixer from "../../src/prefixer";
import sinon from "sinon";

describe("cashTill", () => {
  const sandbox = sinon.createSandbox();
  after(() => sandbox.restore());
  it("should produce correct result", () => {
    const adderMock = sandbox.stub(adder, "adder").returns(100);
    const prefixMock = sandbox.stub(prefixer, "prefixer").returns("£100");

    expect(cashTill.addUp(30, 40)).to.equal("£100");

    expect(adderMock.calledWith([30, 40])).to.be.true;
    expect(prefixMock.calledWith("£", "100")).to.be.true;
  });
});
