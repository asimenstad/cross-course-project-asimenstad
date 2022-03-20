const cartCounter = document.querySelector(".cart-counter p");

function loadCartCounter() {
  let productCounter = localStorage.getItem("cartNumber");

  if (productCounter) {
    cartCounter.textContent = productCounter;
  }
}

loadCartCounter();
