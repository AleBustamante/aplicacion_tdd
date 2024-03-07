import Calculator from "./calculator";

describe("Sumar", () => {
  it("Should multiply the unit price by the amount bought", () => {
    let calculator = new Calculator();
    expect(calculator.netPrice(30, 5)).toEqual(150);
  });
});
