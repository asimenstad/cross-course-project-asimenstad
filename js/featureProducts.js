const featuredProducts = document.querySelector(".featured-products");

for (let i = 0; i < products.length; i++) {
  if (products[i].featured) {
    featuredProducts.innerHTML += `<a href="product-specific.html?id=${products[i].id}"><div>
    <h3>${products[i].name}</h3><p class="product-price">${products[i].price} KR
    </p>
    <img src="${products[i].image}"/>
    </div>
      </a>`;
  }
}
