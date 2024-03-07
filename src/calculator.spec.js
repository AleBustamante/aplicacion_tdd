import Calculator from "./calculator";

describe("Sumar", () => {
  it(" 2222 deberia sumar dos numeros", () => {
    let calculator = new Calculator();
    expect(calculator.sumar(3, 2)).toEqual(5);
  });
});
