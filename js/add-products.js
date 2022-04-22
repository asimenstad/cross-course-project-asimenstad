const apiUrl =
  "https://annais.cool/projects/rainy-days/wp-json/wc/v2/products?consumer_key=ck_ef07863162d60fcc6286edf428a7bc60dd0096c7&consumer_secret=cs_8fd840fe45d3792a1776e02f19e89e07772e4b5c&per_page=100";

const productContainer = document.querySelector(".products-container");
const apiLoader = document.querySelector(".api-loader");

async function fetchAPI() {
  try {
    const response = await fetch(apiUrl);
    const json = await response.json();
    createHtml(json);
  } catch (error) {
    productContainer.innerHTML = "An error occurred. Could not load products.";
  }
}
fetchAPI();
function createHtml(product) {
  console.log(product);

  apiLoader.innerHTML = "";
  apiLoader.style.height = "0";

  for (let i = 0; i < product.length; i++) {
    const id = product[i].id;
    const name = product[i].name;
    const price = product[i].price;
    const image = product[i].images[0].src;

    productContainer.innerHTML += `<a href="product-specific.html?id=${id}"><div>
    <h2>${name}</h2><p class="product-price">${price} KR
    </p>
    <img src="${image}"/>
    </div>
      </a>`;
  }
}
