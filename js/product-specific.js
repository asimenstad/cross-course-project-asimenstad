const productSpecificContainer = document.querySelector(".product-specific");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const apiUrl =
  "https://annais.cool/projects/rainy-days/wp-json/wc/v2/products/" +
  id +
  "/?consumer_key=ck_ef07863162d60fcc6286edf428a7bc60dd0096c7&consumer_secret=cs_8fd840fe45d3792a1776e02f19e89e07772e4b5c&per_page=100";
const apiLoader = document.querySelector(".api-loader");
const productImage = document.querySelector(".product-image");
const productHeader = document.querySelector(".product-details-header");
const productDescription = document.querySelector(".product-details-description");

async function fetchApiDetails() {
  try {
    const response = await fetch(apiUrl);
    product = await response.json();
    createHTML(product);
  } catch (error) {
    productSpecificContainer.innerHTML = "An error occurred. Could not load product.";
  }
}
fetchApiDetails();

function createHTML(product) {
  apiLoader.style.display = "none";

  productImage.innerHTML += `<img src="${product.images[0].src}" alt="${product.images[0].alt}"/>`;

  productHeader.innerHTML += `<h1>${product.name}</h1>
<p class="product-specific-price">${product.price} KR</p>`;

  productDescription.innerHTML += `<h2>Description</h2>
<p>${product.description}</p>`;

  /// Display name of product in breadcrumb nav and title
  const breadcrumbNav = document.querySelector(".details-nav__breadcrumb");
  const liProductName = document.createElement("li");

  breadcrumbNav.append(liProductName);
  liProductName.innerHTML = `<p>${product.name}</p>`;

  document.title = `RainyDays | ${product.name}`;
}

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
  totalPrice();
  displayPopup();
}

/// Add items to local storage
function addItem() {
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

/// Add price to local storage
function totalPrice() {
  let total = localStorage.getItem("totalPrice");

  if (total !== null) {
    total = parseInt(total);
    localStorage.setItem("totalPrice", total + parseInt(product.price));
  } else {
    localStorage.setItem("totalPrice", parseInt(product.price));
  }
}

/// Popup
function displayPopup() {
  popup.style.display = "block";
  popup.innerHTML = `<h2>Added to cart!</h2>
  <div class="popup-product">
  <img src="${product.images[0].src}" />
  <div>
  <h3>${product.name}</h3>
  <p>${product.price} KR</p>
  </div>
  </div>`;

  setTimeout(function () {
    popup.style.display = "none";
  }, 5000);
}
