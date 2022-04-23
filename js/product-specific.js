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
    const json = await response.json();
    createHTML(json);
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
