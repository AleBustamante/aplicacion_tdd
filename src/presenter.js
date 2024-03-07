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

  const totalPriceButton = document.querySelector("#totalPriceButton");

  totalPriceButton.addEventListener("click", (event) => {
    event.preventDefault();

    const calculator = new Calculator();
    const quantityValue = parseFloat(quantity.value);
    const unitPriceValue = parseFloat(unitPrice.value);

    const netPriceValue = calculator.netPrice(unitPriceValue, quantityValue);
    const netPriceDetailValue = calculator.detailNetPrice(unitPriceValue, quantityValue);
    const discountPercentageValue = calculator.discountPercentage(netPriceValue);
    const discountValue = calculator.discount(netPriceValue);

    netPrice.value = netPriceValue.toFixed(2);
    netPrice.classList.remove("hidden"); 
    netPriceDetail.value = netPriceDetailValue;
    netPriceDetail.classList.remove("hidden"); 
    discountDetail.value = discountPercentageValue + "% =";
    discountDetail.classList.remove("hidden"); 
    discount.value = discountValue + "$";
    discount.classList.remove("hidden"); 
  });
});

