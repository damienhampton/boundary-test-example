import { expect } from "chai";
import {ukTaxCalc} from "../../src/uk-tax-calc";

describe("uk tax calc", () => {
    it("should produce correct result", () => {
        expect(ukTaxCalc(100)).to.equal(120);
    });
});
