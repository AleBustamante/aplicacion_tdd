import Calculator from "./calculator";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#calculatorForm");
  const quantity = document.querySelector("#quantity");
  const unitPrice = document.querySelector("#unitPrice");
  const stateCode = document.querySelector("#stateCode");
  const productType = document.querySelector("#productType");
  const volumetricWeight = document.querySelector("#volumetricWeight");
  const customerType = document.querySelector("#customerType");
  const netPrice = document.querySelector("#netPrice");
  const netPriceDetail = document.querySelector("#netPriceDetail");
  const discount = document.querySelector("#discount");
  const discountDetail = document.querySelector("#discountDetail");
  const tax= document.querySelector("#tax");
  const taxDetail = document.querySelector("#taxDetail");
  const additionalTaxDetail = document.querySelector("#productTaxDetail");
  const additionalTax = document.querySelector("#productTax");
  const productDiscountDetail = document.querySelector("#productDiscountDetail");
  const productDiscount = document.querySelector("#productDiscount");
  const shippingCost = document.querySelector('#shippingCost');
  const shippingCostDiscountDetail = document.querySelector('#shippingCostDiscountDetail');
  const shippingCostDiscount = document.querySelector('#shippingCostDiscount');
  const specialDiscount = document.querySelector('#specialDiscount');

  const totalPriceButton = document.querySelector("#totalPriceButton");

  totalPriceButton.addEventListener("click", (event) => {
    event.preventDefault();

    const calculator = new Calculator();
    const quantityValue = parseFloat(quantity.value);
    const unitPriceValue = parseFloat(unitPrice.value);
    const stateValue = stateCode.value;
    const productTypeValue = productType.value;
    const volumetricWeightValue = volumetricWeight.value;
    const customerTypeValue = customerType.value;

    const netPriceValue = calculator.netPrice(unitPriceValue, quantityValue);
    const netPriceDetailValue = calculator.detailNetPrice(unitPriceValue, quantityValue);
    const discountPercentageValue = calculator.discountPercentage(netPriceValue);
    const discountValue = calculator.discount(netPriceValue);
    const taxPercentageValue = calculator.taxPercentage(stateValue);
    const taxValue = calculator.tax(stateValue, netPriceValue);
    const additionalTaxPercentageValue = calculator.additionalTax(productTypeValue);
    const additionalTaxValue = calculator.additionalTaxAmount(productTypeValue, netPriceValue);
    const additionalDiscountPercentageValue = calculator.additionalDiscountPercentage(productTypeValue);
    const additionalDiscountValue = calculator.additionalDiscount(productTypeValue, netPriceValue);
    const shippingCostValue = calculator.shippingCost(volumetricWeightValue);
    const shippingCostDiscountPercentValue = calculator.shippingCostDiscountPercentage(customerTypeValue);
    const shippingCostDiscountValue = calculator.shippingCostDiscount(customerTypeValue, shippingCostValue);
    const specialDiscountValue = calculator.specialDiscount(customerTypeValue, netPriceValue, productTypeValue);


    netPrice.value = netPriceValue.toFixed(2);
    netPrice.classList.remove("hidden"); 
    netPriceDetail.value = netPriceDetailValue;
    netPriceDetail.classList.remove("hidden"); 
    discountDetail.value = discountPercentageValue + "% =";
    discountDetail.classList.remove("hidden"); 
    discount.value = discountValue + "$";
    discount.classList.remove("hidden"); 
    taxDetail.value = taxPercentageValue + "% =";
    taxDetail.classList.remove("hidden");
    tax.value = taxValue + "$";
    tax.classList.remove("hidden");
    additionalTaxDetail.value = additionalTaxPercentageValue + "% =";
    additionalTaxDetail.classList.remove("hidden");
    additionalTax.value = additionalTaxValue + "$";
    additionalTax.classList.remove("hidden");
    productDiscountDetail.value = additionalDiscountPercentageValue + "% =";
    productDiscountDetail.classList.remove("hidden");
    productDiscount.value = additionalDiscountValue + "$";
    productDiscount.classList.remove("hidden");
    shippingCost.value = shippingCostValue + "$";
    shippingCost.classList.remove("hidden");
    shippingCostDiscountDetail.value = shippingCostDiscountPercentValue + "% =";
    shippingCostDiscountDetail.classList.remove("hidden");
    shippingCostDiscount.value = shippingCostDiscountValue + "$";
    shippingCostDiscount.classList.remove("hidden");
    specialDiscount.value = specialDiscountValue + "$";
    specialDiscount.classList.remove("hidden");
  });
});

