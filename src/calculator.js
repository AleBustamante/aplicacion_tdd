export default class Calculator {
  netPrice(unitPrice, quantity) {
    return unitPrice * quantity;
  }
  detailNetPrice(unitPrice, quantity) {
    let detail = unitPrice + "$ * " + quantity + " unidades =";
    return detail;
  }
  discountPercentage(netPrice) {
    let discount = 0;
    if(netPrice >= 30000) {
        discount = 15;
    }
    else if(netPrice >= 10000) {
        discount = 10;
    }
    else if(netPrice >= 7000) {
        discount = 7;
    }
    else if(netPrice >= 3000) {
        discount = 5;
    }
    else if(netPrice >= 1000) {
        discount = 3;
    }
    return discount;
  }
  discount(netPrice) {
    return this.discountPercentage(netPrice) * 0.01 * netPrice;
  }
  taxPercentage(stateCode) {
    if(stateCode === "CA") {
        return 8.25;
    }
    if(stateCode === "UT") {
        return 6.65;
    }
    if(stateCode === "NV") {
        return 8.00;
    }
    if(stateCode === "TX") {
        return 6.25;
    }
    if(stateCode === "AL") {
        return 4.00;
    }
    else {
        return -1;
    }
  }
}