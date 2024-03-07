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
  it("Should calculate the amount of the additional tax based on the category of the product - case Foods", () => {
    let calculator = new Calculator();
    expect(calculator.additionalTaxAmount("Alimentos", 3500)).toEqual(0);
  });
  it("Should calculate the amount of the additional tax based on the category of the product - case Alcoholic drinks", () => {
    let calculator = new Calculator();
    expect(calculator.additionalTaxAmount("Bebidas alcohólicas", 3500)).toEqual(232.75000000000003);
  });
  it("Should calculate the amount of the additional tax based on the category of the product - case Stationery", () => {
    let calculator = new Calculator();
    expect(calculator.additionalTaxAmount("Material de escritorio", 3500)).toEqual(0);
  });
  it("Should calculate the amount of the additional tax based on the category of the product - case Furniture", () => {
    let calculator = new Calculator();
    expect(calculator.additionalTaxAmount("Muebles", 3500)).toEqual(99.75);
  });
  it("Should calculate the amount of the additional tax based on the category of the product - case Electronics", () => {
    let calculator = new Calculator();
    expect(calculator.additionalTaxAmount("Electrónicos", 3500)).toEqual(133);
  });
  it("Should calculate the amount of the additional tax based on the category of the product - case Clothes", () => {
    let calculator = new Calculator();
    expect(calculator.additionalTaxAmount("Vestimenta", 3500)).toEqual(66.5);
  });
  it("Should calculate the amount of the additional tax based on the category of the product - case Others", () => {
    let calculator = new Calculator();
    expect(calculator.additionalTaxAmount("Varios", 3500)).toEqual(0);
  });
  it("Should determine the discount percentage based on the category of the product - case Foods", () => {
    let calculator = new Calculator();
    expect(calculator.additionalDiscountPercentage("Alimentos")).toEqual(2);
  });
  it("Should determine the discount percentage based on the category of the product - case Alcoholic drinks", () => {
    let calculator = new Calculator();
    expect(calculator.additionalDiscountPercentage("Bebidas alcohólicas")).toEqual(0);
  });
  it("Should determine the discount percentage based on the category of the product - case Stationery", () => {
    let calculator = new Calculator();
    expect(calculator.additionalDiscountPercentage("Material de escritorio")).toEqual(1.5);
  });
  it("Should determine the discount percentage based on the category of the product - case Furniture", () => {
    let calculator = new Calculator();
    expect(calculator.additionalDiscountPercentage("Muebles")).toEqual(0);
  });
  it("Should determine the discount percentage based on the category of the product - case Electronics", () => {
    let calculator = new Calculator();
    expect(calculator.additionalDiscountPercentage("Electrónicos")).toEqual(1);
  });
  it("Should determine the discount percentage based on the category of the product - case Clothes", () => {
    let calculator = new Calculator();
    expect(calculator.additionalDiscountPercentage("Vestimenta")).toEqual(0);
  });
  it("Should determine the discount percentage based on the category of the product - case Others", () => {
    let calculator = new Calculator();
    expect(calculator.additionalDiscountPercentage("Varios")).toEqual(0);
  });
  it("Should return -1 if the category entered is invalid", () => {
    let calculator = new Calculator();
    expect(calculator.additionalDiscountPercentage("ninguna")).toEqual(-1);
  });
  it("Should calculate the discount amount based on the category of the product - case Food", () => {
    let calculator = new Calculator();
    expect(calculator.additionalDiscount("Alimentos", 3500)).toEqual(66.5);
  });
  it("Should calculate the discount amount based on the category of the product - case Alcoholic drinks", () => {
    let calculator = new Calculator();
    expect(calculator.additionalDiscount("Bebidas alcohólicas", 3500)).toEqual(0);
  });
  it("Should calculate the discount amount based on the category of the product - case Stationery", () => {
    let calculator = new Calculator();
    expect(calculator.additionalDiscount("Material de escritorio", 3500)).toEqual(49.875);
  });
  it("Should calculate the discount amount based on the category of the product - case Furniture", () => {
    let calculator = new Calculator();
    expect(calculator.additionalDiscount("Muebles", 3500)).toEqual(0);
  });
  it("Should calculate the discount amount based on the category of the product - case Electronics", () => {
    let calculator = new Calculator();
    expect(calculator.additionalDiscount("Electrónicos", 3500)).toEqual(33.25);
  });
  it("Should calculate the discount amount based on the category of the product - case Clothes", () => {
    let calculator = new Calculator();
    expect(calculator.additionalDiscount("Vestimenta", 3500)).toEqual(0);
  });
  it("Should calculate the discount amount based on the category of the product - case Others", () => {
    let calculator = new Calculator();
    expect(calculator.additionalDiscount("Varios", 3500)).toEqual(0);
  });
  it("Should determine the cost of the shipping based on the volumetric weight - case 0 - 10", () => {
    let calculator = new Calculator();
    expect(calculator.shippingCost(5)).toEqual(0);
  });
  it("Should determine the cost of the shipping based on the volumetric weight - case 11 - 20", () => {
    let calculator = new Calculator();
    expect(calculator.shippingCost(15)).toEqual(3.5);
  });
  it("Should determine the cost of the shipping based on the volumetric weight - case 21 - 40", () => {
    let calculator = new Calculator();
    expect(calculator.shippingCost(35)).toEqual(5);
  });
  it("Should determine the cost of the shipping based on the volumetric weight - case 41 - 80", () => {
    let calculator = new Calculator();
    expect(calculator.shippingCost(55)).toEqual(6);
  });
  it("Should determine the cost of the shipping based on the volumetric weight - case 81 - 100", () => {
    let calculator = new Calculator();
    expect(calculator.shippingCost(95)).toEqual(6.5);
  });
  it("Should determine the cost of the shipping based on the volumetric weight - case 101 - 200", () => {
    let calculator = new Calculator();
    expect(calculator.shippingCost(135)).toEqual(8);
  });
  it("Should determine the cost of the shipping based on the volumetric weight - case >200", () => {
    let calculator = new Calculator();
    expect(calculator.shippingCost(255)).toEqual(9);
  });
  it("Should return -1 if the volumentric weight is wrong", () => {
    let calculator = new Calculator();
    expect(calculator.shippingCost(-10)).toEqual(-1);
  });
  it("Should determine the percentage of discount based on the type of client - case Normal", () => {
    let calculator = new Calculator();
    expect(calculator.shippingCostDiscountPercentage("Normal")).toEqual(0);
  });
  it("Should determine the percentage of discount based on the type of client - case Frecuent", () => {
    let calculator = new Calculator();
    expect(calculator.shippingCostDiscountPercentage("Recurrente")).toEqual(0.5);
  });
  it("Should determine the percentage of discount based on the type of client - case Old Frecuent", () => {
    let calculator = new Calculator();
    expect(calculator.shippingCostDiscountPercentage("Antiguo recurrente")).toEqual(1);
  });
  it("Should determine the percentage of discount based on the type of client - case Special", () => {
    let calculator = new Calculator();
    expect(calculator.shippingCostDiscountPercentage("Especial")).toEqual(1.5);
  });
  it("Should return -1 if an incorrect value is sent", () => {
    let calculator = new Calculator();
    expect(calculator.shippingCostDiscountPercentage("sin clasificacion")).toEqual(-1);
  });
  it("Should calculate the amount of shipping discount based on the type of client - case Normal", () => {
    let calculator = new Calculator();
    expect(calculator.shippingCostDiscount("Normal", 5)).toEqual(0);
  });
  it("Should calculate the amount of shipping discount based on the type of client - case Fecuent", () => {
    let calculator = new Calculator();
    expect(calculator.shippingCostDiscount("Recurrente", 5)).toEqual(0.025);
  });
  it("Should calculate the amount of shipping discount based on the type of client - case Old Frecuent", () => {
    let calculator = new Calculator();
    expect(calculator.shippingCostDiscount("Antiguo recurrente", 5)).toEqual(0.05);
  });
  it("Should calculate the amount of shipping discount based on the type of client - case Special", () => {
    let calculator = new Calculator();
    expect(calculator.shippingCostDiscount("Especial", 5)).toEqual(0.075);
  });
  it("Should determine if an special discount applies based on client type, product type and net price - case Frecuent", () => {
    let calculator = new Calculator();
    expect(calculator.specialDiscount("Recurrente", 3500, "Alimentos")).toEqual(100);
  });
  it("Should determine if an special discount applies based on client type, product type and net price - case Special", () => {
    let calculator = new Calculator();
    expect(calculator.specialDiscount("Especial", 7500, "Electrónicos")).toEqual(200);
  });
  it("Should return 0 if the criteria for the 2 special cases are not met", () => {
    let calculator = new Calculator();
    expect(calculator.specialDiscount("Normal", 1500, "Muebles")).toEqual(0);
  });
  it("Should add all the taxes and discounts correctly", () => {
    let calculator = new Calculator();
    expect(calculator.getTotal(75, 100, "CA", "Electrónicos", 80, "Especial")).toEqual(7565.5975);
  });

});
