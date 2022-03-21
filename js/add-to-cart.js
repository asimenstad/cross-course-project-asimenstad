const cartButton = document.querySelector(".add-to-cart-button");
let cartArray = [];
cartButton.addEventListener("click", addAmount);

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
  cartArray = localStorage.getItem("productsInCart");
  cartArray = JSON.parse(cartArray);

  cartArray.push(product);
  localStorage.setItem("productsInCart", JSON.stringify(cartArray));
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
