const cartTotalItems = document.querySelector(".total-items");
const cartContainer = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const orderValue = document.querySelector(".order-value");
const deliveryValue = document.querySelector(".delivery-value");
const totalValue = document.querySelector(".total-value");
const standard = document.querySelector("#standard");
const express = document.querySelector("#express");
const delivery = document.querySelector(".checkout-delivery");

/// Display the products at checkout
function addProducts() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let cartItemsSize = localStorage.getItem("productSize");
  cartItemsSize = JSON.parse(cartItemsSize);

  cartTotalItems.innerHTML = `<h2>(${cartItems.length})</h2>`;

  cartContainer.innerHTML = "";

  for (let i = 0; i < cartItems.length; i++) {
    cartContainer.innerHTML += ` <div class="cart-item">
    <div class="cart-item__product">
    <img src="${cartItems[i].image}" />
    <div class="cart-item__info">
<h3>${cartItems[i].name}</h3>
<p>${cartItems[i].price} KR</p>
<p class="product-size">Size: ${cartItemsSize[i]}</p>
</div>
</div>
<button class="remove-item"><i class="far fa-trash-alt"></i></button>
  </div>  
  <hr />`;
  }
}
addProducts();

/// Display the sum of the products
let totalSum = localStorage.getItem("totalPrice");
totalSum = JSON.parse(totalSum);

function addSum() {
  cartTotal.innerHTML = `<h3>Sum</h3><h3>${totalSum} KR</h3>`;
  orderValue.textContent = `${totalSum} KR`;
}
addSum();

/// Choose delivery and display total sum
delivery.addEventListener("change", addDelivery);

const standardShipping = 39;
const expressShipping = 59;

function addDelivery() {
  if (standard.checked) {
    deliveryValue.innerHTML = `${standardShipping} KR`;
    totalValue.innerHTML = `${totalSum + standardShipping} KR`;
  } else {
    deliveryValue.innerHTML = `${expressShipping} KR`;
    totalValue.innerHTML = `${totalSum + expressShipping} KR`;
  }
}
addDelivery();
