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
  it("Should determine the tax percentage that applies according to the state - case CA", () => {
    let calculator = new Calculator();
    expect(calculator.taxPercentage("CA")).toEqual(8.25);
  });
  it("Should determine the tax percentage that applies according to the state - case UT", () => {
    let calculator = new Calculator();
    expect(calculator.taxPercentage("UT")).toEqual(6.65);
  });
  it("Should determine the tax percentage that applies according to the state - case NV", () => {
    let calculator = new Calculator();
    expect(calculator.taxPercentage("NV")).toEqual(8.00);
  });
  it("Should determine the tax percentage that applies according to the state - case TX", () => {
    let calculator = new Calculator();
    expect(calculator.taxPercentage("TX")).toEqual(6.25);
  });
  it("Should determine the tax percentage that applies according to the state - case AL", () => {
    let calculator = new Calculator();
    expect(calculator.taxPercentage("AL")).toEqual(4.00);
  });
  it("Should give a -1 if you send a code that doesn't correspond to any state", () => {
    let calculator = new Calculator();
    expect(calculator.taxPercentage("JJ")).toEqual(-1);
  });
  it("Should calculate the amount to pay on taxes based on the state - case CA", () => {
    let calculator = new Calculator();
    expect(calculator.tax("CA", 3500)).toEqual(274.3125);
  });
  it("Should calculate the amount to pay on taxes based on the state - case UT", () => {
    let calculator = new Calculator();
    expect(calculator.tax("UT", 3500)).toEqual(221.1125);
  });
  it("Should calculate the amount to pay on taxes based on the state - case NV", () => {
    let calculator = new Calculator();
    expect(calculator.tax("NV", 3500)).toEqual(266);
  });
  it("Should calculate the amount to pay on taxes based on the state - case TX", () => {
    let calculator = new Calculator();
    expect(calculator.tax("TX", 3500)).toEqual(207.8125);
  });
  it("Should calculate the amount to pay on taxes based on the state - case AL", () => {
    let calculator = new Calculator();
    expect(calculator.tax("AL", 3500)).toEqual(133);
  });
  it("Should determine the additional tax based on the category of the product - case Foods", () => {
    let calculator = new Calculator();
    expect(calculator.additionalTax("Alimentos")).toEqual(0);
  });
  it("Should determine the additional tax based on the category of the product - case Alcoholic drinks", () => {
    let calculator = new Calculator();
    expect(calculator.additionalTax("Bebidas alcohólicas")).toEqual(7);
  });
  it("Should determine the additional tax based on the category of the product - case Stationery", () => {
    let calculator = new Calculator();
    expect(calculator.additionalTax("Material de escritorio")).toEqual(0);
  });
  it("Should determine the additional tax based on the category of the product - case Furniture", () => {
    let calculator = new Calculator();
    expect(calculator.additionalTax("Muebles")).toEqual(3);
  });
  it("Should determine the additional tax based on the category of the product - case Electronics", () => {
    let calculator = new Calculator();
    expect(calculator.additionalTax("Electrónicos")).toEqual(4);
  });
  it("Should determine the additional tax based on the category of the product - case Clothes", () => {
    let calculator = new Calculator();
    expect(calculator.additionalTax("Vestimenta")).toEqual(2);
  });
  it("Should determine the additional tax based on the category of the product - case Others", () => {
    let calculator = new Calculator();
    expect(calculator.additionalTax("Varios")).toEqual(0);
  });
  it("Should return -1 in case a non existing category is entered", () => {
    let calculator = new Calculator();
    expect(calculator.additionalTax("ninguna")).toEqual(-1);
  });

});
