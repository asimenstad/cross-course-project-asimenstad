const cartButton = document.querySelector(".add-to-cart-button");
let cartArray = [];
const popup = document.querySelector(".cart-popup");

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
  displayPopup();
}

function addItem() {
  let cartArray = [];
  cartArray = JSON.parse(localStorage.getItem("productsInCart")) || [];

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

function displayPopup() {
  popup.style.display = "block";
  popup.innerHTML = `<h2>Added to cart!</h2>
  <div class="popup-product">
  <img src="${product.image}" />
  <div>
  <h3>${product.name}</h3>
  <p>${product.price} KR</p>
  </div>
  </div>`;
  setTimeout(function () {
    popup.style.display = "none";
  }, 5000);
}
