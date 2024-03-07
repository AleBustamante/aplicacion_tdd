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
}