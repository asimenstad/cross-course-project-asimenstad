/// Add the products to cart
const cartButton = document.querySelector(".add-to-cart-button");
const cartCounter = document.querySelector(".cart-counter p");
let cartArray = [];

cartButton.addEventListener("click", addAmount);

function loadCartCounter() {
  let productCounter = localStorage.getItem("cartNumber");

  if (productCounter) {
    cartCounter.textContent = productCounter;
  }
}

function addAmount() {
  let productCounter = localStorage.getItem("cartNumber");

  productCounter = parseInt(productCounter);

  if (productCounter) {
    localStorage.setItem("cartNumber", productCounter + 1);
    cartCounter.textContent = productCounter + 1;
  } else {
    localStorage.setItem("cartNumber", 1);
    cartCounter.textContent = 1;
  }

  addItem();
  totalPrice();
}

function addItem() {
  cartArray.push(product);

  localStorage.setItem("productsInCart", JSON.stringify(cartArray));
  cartArray = localStorage.getItem("productsInCart");
  cartArray = JSON.parse(cartArray);
}

function totalPrice() {
  let total = localStorage.getItem("totalPrice");

  if (total !== null) {
    total = parseInt(total);
    localStorage.setItem("totalPrice", total + product.price);
  } else {
    localStorage.setItem("totalPrice", product.price);
  }
}

loadCartCounter();
