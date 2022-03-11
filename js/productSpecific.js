const productSpecificContainer = document.querySelector(".product-specific");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const productId = params.get("id");
const product = products.find(({ id }) => id === parseInt(productId));

productSpecificContainer.innerHTML += `<section class="product-image"><img src="${product.image}" alt="${product.name}"/></section>
<section class="product-details"><div class="product-details-header">
<h1>${product.name}</h1>
<p class="product-specific-price">${product.price} KR</p></div>
<h2>Description</h3>
<p>${product.description}</p>
<h2>Material</h3>
<p>${product.material}</p>
<div class="size-select">
<label for="size">Size:</label>
<select id="size" name="size" class="cta-long cta-form">
  <option value="small">Small</option>
  <option value="medium">Medium</option>
  <option value="large">Large</option>
</select>
</div>
<button class="cta-long add-to-cart-button" data-product="${product.id}">Add to cart</button>
</section>`;

/// Display the name of product in breadcrumb nav and title
const breadcrumbNav = document.querySelector(".details-nav__breadcrumb");
const liProductName = document.createElement("li");

breadcrumbNav.append(liProductName);
liProductName.innerHTML = `<p>${product.name}</p>`;

document.title = `RainyDays | ${product.name}`;

/*
/// Add the products to cart
const cartButton = document.querySelector(".add-to-cart-button");
const cartContainer = document.querySelector(".checkout-items__container");
const cartDetails = document.querySelector(".checkout-items__details");
const bla = document.querySelector("footer");
let cartArray = [];
let total = 0;
cartButton.addEventListener("click", addItem);

function addItem(event) {
  cartArray.push(product);
  localStorage.setItem("cartList", JSON.stringify(cartArray));
  addToCart(cartArray);
}

function addToCart() {
  bla.innerHTML = "";
  const cartItems = JSON.parse(localStorage.getItem("cartList"));
  total += product.price;
  cartItems.forEach(function () {
    bla.innerHTML += ` <div>
        <h3>${product.name}</h3>
      </div>`;
  });
}
*/
