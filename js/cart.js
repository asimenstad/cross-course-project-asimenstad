const form = document.querySelector("#checkout-form");
const cartTotalItems = document.querySelector(".total-items");
const cartContainer = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const orderValue = document.querySelector(".order-value");
const deliveryValue = document.querySelector(".delivery-value");
const totalValue = document.querySelector(".total-value");
const standard = document.querySelector("#standard");
const express = document.querySelector("#express");
const delivery = document.querySelector(".checkout-delivery");

/// Add products to checkout
function addProducts() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let cartItemsSize = localStorage.getItem("productSize");
  cartItemsSize = JSON.parse(cartItemsSize);

  cartTotalItems.innerHTML = `<h2>(${cartItems.length})</h2>`;

  cartContainer.innerHTML = "";

  /*
  for (let i = 0; i < cartItems.length; i++) {
    cartContainer.innerHTML += ` <div class="cart-item">
    <div class="cart-item__product">
    <img src="${cartItems[i].images[0].src}" />
    <div class="cart-item__info">
<h3>${cartItems[i].name}</h3>
<p>${cartItems[i].price} KR</p>
<p class="product-size">Size: ${cartItemsSize[i]}</p>
</div>
</div>
<button class="remove-item" id="removeItem"><i class="far fa-trash-alt"></i></button>
  </div>  
  <hr />`;
  }
*/
  cartItems.forEach((item) => {
    const { name, price, images } = item;

    console.log(item.images[0].src);

    const cartItemContainer = document.createElement("div");
    const cartItemProduct = document.createElement("div");
    const productImg = document.createElement("img");
    const cartItemInfo = document.createElement("div");
    const cartItemName = document.createElement("h3");
    const cartItemPrice = document.createElement("p");
    const cartItemSize = document.createElement("p");
    const deleteBtn = document.createElement("button");
    const hr = document.createElement("hr");

    cartItemContainer.classList.add("cart-item");
    cartItemProduct.classList.add("cart-item__product");
    productImg.src = images[0].src;
    cartItemInfo.classList.add("cart-item__info");
    cartItemName.textContent = name;
    cartItemPrice.textContent = price;
    cartItemSize.classList.add("product-size");
    cartItemSize.textContent = `Size: `;
    deleteBtn.classList.add("remove-item");
    deleteBtn.innerHTML = `Remove item <i class="far fa-trash-alt"></i>`;

    cartItemInfo.append(cartItemName, cartItemPrice, cartItemSize);
    cartItemProduct.append(productImg, cartItemInfo);
    cartItemContainer.append(cartItemProduct, deleteBtn);
    cartContainer.append(cartItemContainer, hr);
  });
}
addProducts();

/// Display the sum of the products
let totalSum = localStorage.getItem("totalPrice");
totalSum = JSON.parse(totalSum);

function addSum() {
  cartTotal.innerHTML = `<p>Sum</p><p>${totalSum} KR</p>`;
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

/// Clear localStorage when items are purchased
form.addEventListener("submit", clearCart);

function clearCart() {
  localStorage.clear();
}
