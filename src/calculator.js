export default class Calculator {
  netPrice(unitPrice, quantity) {
    return unitPrice * quantity;
  }
  detailNetPrice(unitPrice, quantity) {
    let detail = unitPrice + "$ * " + quantity + " unidades =";
    return detail;
  }
}