export const adder = (amounts: number[]): number =>
  amounts.reduce((acc, amount) => acc + amount, 0);
