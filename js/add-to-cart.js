const cartButton = document.querySelector(".add-to-cart-button");
let cartArray = [];
let sizeArray = [];
const sizeSelect = document.querySelector("#size");
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
  addSize();
  displayPopup();
}

/// Add items to local storage
function addItem() {
  const size = { size: sizeSelect.value };
  product.push(size);
  console.log(product);

  let cartArray = [];
  cartArray = JSON.parse(localStorage.getItem("productsInCart")) || [];

  cartArray.push(product);
  localStorage.setItem("productsInCart", JSON.stringify(cartArray));
}

/// Add size to local storage
function addSize() {
  let sizeArray = [];
  sizeArray = JSON.parse(localStorage.getItem("productSize")) || [];
  sizeArray.push(sizeSelect.value);
  localStorage.setItem("productSize", JSON.stringify(sizeArray));
}

/// Popup
function displayPopup() {
  popup.style.display = "block";
  popup.innerHTML = `<h2>Added to cart!</h2>
  <div class="popup-product">
  <img src="${product.images[0].src}" />
  <div>
  <h3>${product.name}</h3>
  <p>${product.prices.price} KR</p>
  </div>
  </div>`;
  setTimeout(function () {
    popup.style.display = "none";
  }, 5000);
}
