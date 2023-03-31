import { adder } from "./adder";
import { prefixer } from "./prefixer";

export type TaxCalc = (a: number) => number;

export const addUp = (symbol: string, taxCalc: TaxCalc) => (...amounts: number[]): string =>
  prefixer(symbol, taxCalc(adder(amounts)).toString());
