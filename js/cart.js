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

let cartItems = localStorage.getItem("productsInCart");
cartItems = JSON.parse(cartItems);

let cartItemsSize = localStorage.getItem("productSize");
cartItemsSize = JSON.parse(cartItemsSize);

let productCounter = localStorage.getItem("cartNumber");
productCounter = parseInt(productCounter);

/// Add products to checkout
function addProducts() {
  cartTotalItems.innerHTML = `<h2>(${cartItems.length})</h2>`;

  cartContainer.innerHTML = "";

  cartItems.forEach((item) => {
    const { name, price, images, id } = item;

    const cartItemContainer = document.createElement("div");
    const cartItemProduct = document.createElement("div");
    const cartItemLink = document.createElement("a");
    const productImg = document.createElement("img");
    const cartItemInfo = document.createElement("div");
    const cartItemName = document.createElement("h3");
    const cartItemPrice = document.createElement("p");
    const cartItemSize = document.createElement("p");
    const deleteBtn = document.createElement("button");
    const hr = document.createElement("hr");
    const size = cartItemsSize[cartItems.indexOf(item)];

    cartItemContainer.classList.add("cart-item");
    cartItemProduct.classList.add("cart-item__product");
    cartItemLink.href = `product-specific.html?id=${id}`;
    productImg.src = images[0].src;
    cartItemInfo.classList.add("cart-item__info");
    cartItemName.textContent = name;
    cartItemPrice.textContent = `${price} KR`;
    cartItemSize.classList.add("product-size");
    cartItemSize.textContent = `Size: ${size}`;
    deleteBtn.classList.add("remove-item");
    deleteBtn.innerHTML = `Remove item <i class="far fa-trash-alt"></i>`;

    cartItemInfo.append(cartItemName, cartItemPrice, cartItemSize);
    cartItemLink.append(productImg);
    cartItemProduct.append(cartItemLink, cartItemInfo);
    cartItemContainer.append(cartItemProduct, deleteBtn);
    cartContainer.append(cartItemContainer, hr);

    deleteBtn.addEventListener("click", () => {
      console.log(cartItems.indexOf(item));
      cartItems.splice(cartItems.indexOf(item), 1);
      cartItemsSize.splice(cartItems.indexOf(item), 1);
      localStorage.setItem("productsInCart", JSON.stringify(cartItems));
      localStorage.setItem("productSize", JSON.stringify(cartItemsSize));
      localStorage.setItem("cartNumber", productCounter - 1);
      window.location.reload();
    });
  });
}
addProducts();

/// Display the sum of the products
function addSum() {
  let total = parseInt(cartItems[0].price);
  if (cartItems.length < 1) {
    total = cartItems.reduce(function (a, b) {
      return parseInt(a.price) + parseInt(b.price);
    });
  }
  cartTotal.innerHTML = `<p>Sum</p><p>${total} KR</p>`;
  orderValue.textContent = `${total} KR`;

  delivery.addEventListener("change", addDelivery);

  const standardShipping = 39;
  const expressShipping = 59;

  function addDelivery() {
    if (standard.checked) {
      deliveryValue.innerHTML = `${standardShipping} KR`;
      totalValue.innerHTML = `${total + standardShipping} KR`;
    } else {
      deliveryValue.innerHTML = `${expressShipping} KR`;
      totalValue.innerHTML = `${total + expressShipping} KR`;
    }
  }
  addDelivery();
}
addSum();

/// Clear localStorage when items are purchased
form.addEventListener("submit", clearCart);

function clearCart() {
  localStorage.clear();
}
