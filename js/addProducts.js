const productContainer = document.querySelector(".products-container");

for (let i = 0; i < products.length; i++) {
  productContainer.innerHTML += `<a href="product-specific.html?id=${products[i].id}"><div>
  <h2>${products[i].name}</h2><p class="product-price">${products[i].price} KR
  </p>
  <img src="${products[i].image}"/>
  </div>
    </a>`;
}
