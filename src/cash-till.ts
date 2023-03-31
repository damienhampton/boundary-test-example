import { adder } from "./adder";
import { prefixer } from "./prefixer";

export const addUp = (...amounts: number[]): string =>
  prefixer("£", adder(amounts).toString());
