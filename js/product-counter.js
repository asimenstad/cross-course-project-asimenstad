const cartCounter = document.querySelector(".cart-counter");

function loadCartCounter() {
  let productCounter = localStorage.getItem("cartNumber");

  if (productCounter) {
    cartCounter.textContent = productCounter;
  }
}

loadCartCounter();
