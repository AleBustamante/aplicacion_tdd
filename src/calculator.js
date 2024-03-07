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
  tax(stateCode, netPrice) {
    let discountedPrice = netPrice - this.discount(netPrice);
    return this.taxPercentage(stateCode) * 0.01 * discountedPrice; 
  }
  additionalTax(productCategory) {
    if(productCategory === "Alimentos") {
        return 0.0;
    }
    if(productCategory === "Bebidas alcohólicas") {
        return 7.0;
    }
    if(productCategory === "Material de escritorio") {
        return 0.0;
    }
    if(productCategory === "Muebles") {
        return 3.0;
    }
    if(productCategory === "Electrónicos") {
        return 4.0;
    }
    if(productCategory === "Vestimenta") {
        return 2.0;
    }
    if(productCategory === "Varios") {
        return 0.0;
    }
    else {
        return -1;
    }
  }
  additionalTaxAmount(productCategory, netPrice) {
    let discountedPrice = netPrice - this.discount(netPrice);
    return this.additionalTax(productCategory) * 0.01 * discountedPrice;
  }
  additionalDiscountPercentage(productCategory) {
    if(productCategory === "Alimentos") {
        return 2.0;
    }
    if(productCategory === "Bebidas alcohólicas") {
        return 0.0;
    }
    if(productCategory === "Material de escritorio") {
        return 1.5;
    }
    if(productCategory === "Muebles") {
        return 0.0;
    }
    if(productCategory === "Electrónicos") {
        return 1.0;
    }
    if(productCategory === "Vestimenta") {
        return 0.0;
    }
    if(productCategory === "Varios") {
        return 0.0;
    }
    else {
        return -1;
    } 
  }
  additionalDiscount(productCategory, netPrice) {
    let discountedPrice = netPrice - this.discount(netPrice);
    return this.additionalDiscountPercentage(productCategory) * 0.01 * discountedPrice;
  }
  shippingCost(volumetricWeight) {
    if(volumetricWeight >= 0 && volumetricWeight <= 10) {
        return 0;
    }
    if(volumetricWeight > 10 && volumetricWeight <= 20) {
        return 3.5;
    }
    if(volumetricWeight > 20 && volumetricWeight <= 40) {
        return 5;
    }
    if(volumetricWeight > 40 && volumetricWeight <= 80) {
        return 6;
    }
    if(volumetricWeight > 80 && volumetricWeight <= 100) {
        return 6.5;
    }
    if(volumetricWeight > 100 && volumetricWeight <= 200) {
        return 8;
    }
    if(volumetricWeight > 200) {
        return 9;
    }
    else {
        return -1;
    } 
  }
  shippingCostDiscountPercentage(clientType) {
    if(clientType === "Normal") {
        return 0.0;
    }
    if(clientType === "Recurrente") {
        return 0.5;
    }
    if(clientType === "Antiguo recurrente") {
        return 1.0;
    }
    if(clientType === "Especial") {
        return 1.5;
    }
    else {
        return -1;
    } 
  }
  shippingCostDiscount(clientType, shippingCost) {
    return this.shippingCostDiscountPercentage(clientType) * 0.01 * shippingCost;
  }
  specialDiscount(clientType, netPrice, productType) {
    if(clientType === "Recurrente" && netPrice > 3000 && productType === "Alimentos") {
        return 100;
    }
    if(clientType === "Especial" && netPrice > 7000 && productType === "Electrónicos") {
        return 200;
    }
    else {
        return 0;
    }
  }
}