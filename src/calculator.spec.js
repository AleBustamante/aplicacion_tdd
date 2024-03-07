import Calculator from "./calculator";

describe("Sumar", () => {
  it("Should multiply the unit price by the amount bought", () => {
    let calculator = new Calculator();
    expect(calculator.netPrice(30, 5)).toEqual(150);
  });
  it("Should show the details of the multiplication of the unit price by the amount bought", () => {
    let calculator = new Calculator();
    expect(calculator.detailNetPrice(30, 5)).toEqual("30$ * 5 unidades =");
  });
  it("Should show the percentage of discount applied to the product - case 0%", () => {
    let calculator = new Calculator();
    expect(calculator.discountPercentage(500)).toEqual(0);
  });
  it("Should show the percentage of discount applied to the product - case 3%", () => {
    let calculator = new Calculator();
    expect(calculator.discountPercentage(1100)).toEqual(3);
  });
  it("Should show the percentage of discount applied to the product - case 5%", () => {
    let calculator = new Calculator();
    expect(calculator.discountPercentage(3200)).toEqual(5);
  });
  it("Should show the percentage of discount applied to the product - case 7%", () => {
    let calculator = new Calculator();
    expect(calculator.discountPercentage(7100)).toEqual(7);
  });
  it("Should show the percentage of discount applied to the product - case 10%", () => {
    let calculator = new Calculator();
    expect(calculator.discountPercentage(10200)).toEqual(10);
  });
  it("Should show the percentage of discount applied to the product - case 15%", () => {
    let calculator = new Calculator();
    expect(calculator.discountPercentage(30500)).toEqual(15);
  });
  it("Should calculate the discount that applies to the product - case 0%", () => {
    let calculator = new Calculator();
    expect(calculator.discount(500)).toEqual(0);
  });
  it("Should calculate the discount that applies to the product - case 3%", () => {
    let calculator = new Calculator();
    expect(calculator.discount(1500)).toEqual(45);
  });
  it("Should calculate the discount that applies to the product - case 5%", () => {
    let calculator = new Calculator();
    expect(calculator.discount(3500)).toEqual(175);
  });
  it("Should calculate the discount that applies to the product - case 7%", () => {
    let calculator = new Calculator();
    expect(calculator.discount(8000)).toEqual(560);
  });
  it("Should calculate the discount that applies to the product - case 10%", () => {
    let calculator = new Calculator();
    expect(calculator.discount(15000)).toEqual(1500);
  });
  it("Should calculate the discount that applies to the product - case 15%", () => {
    let calculator = new Calculator();
    expect(calculator.discount(35000)).toEqual(5250);
  });
});
