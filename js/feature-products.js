const apiUrl =
  "https://annais.cool/projects/rainy-days/wp-json/wc/v2/products?consumer_key=ck_ef07863162d60fcc6286edf428a7bc60dd0096c7&consumer_secret=cs_8fd840fe45d3792a1776e02f19e89e07772e4b5c&per_page=100";

const apiLoader = document.querySelector(".api-loader");
const featuredProducts = document.querySelector(".featured-products");

async function fetchAPI() {
  try {
    const response = await fetch(apiUrl);
    const json = await response.json();
    featureProducts(json);
  } catch (error) {
    featuredProducts.innerHTML = "An error occurred. Could not load products.";
  }
}
fetchAPI();

function featureProducts(product) {
  apiLoader.style.display = "none";
  for (let i = 0; i < product.length; i++) {
    const id = product[i].id;
    const name = product[i].name;
    const price = product[i].price;
    const image = product[i].images[0].src;

    if (product[i].featured) {
      featuredProducts.innerHTML += `<a href="product-specific.html?id=${id}"><div>
        <h3>${name}</h3><p class="product-price">${price} KR
        </p>
        <img src="${image}"/>
        </div>
          </a>`;
    }
  }
}
