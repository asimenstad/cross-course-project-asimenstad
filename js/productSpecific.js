const productSpecificContainer = document.querySelector(".product-specific");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const productId = params.get("id");
const product = products.find(({ id }) => id == productId);

productSpecificContainer.innerHTML += `<section class="product-image"><img src="${product.image}" alt="${product.name}"/></section>
<section class="product-details"><div class="product-details-header">
<h1>${product.name}</h1>
<p class="product-specific-price">${product.price} KR</p></div>
<h2>Description</h3>
<p>${product.description}</p>
<h2>Material</h3>
<p>${product.material}</p>
<form>
<label for="size">Size:</label>
<select id="size" name="size" class="cta-long cta-form">
  <option value="small">Small</option>
  <option value="medium">Medium</option>
  <option value="large">Large</option>
</select>
<input type="submit" value="Add to cart" class="cta-long" />
</form>
</section>`;
