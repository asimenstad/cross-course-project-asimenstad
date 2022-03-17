/// Add the products to cart
const cartButton = document.querySelectorAll(".add-to-cart-button");
let cartArray = [];
let total = 0;

cartButton.forEach(function (button) {
  button.onClick = function (event) {
    cartArray.push(product);
    localStorage.setItem("cartList", JSON.stringify(cartArray));
  };
});

const cartItems = JSON.parse(localStorage.getItem("cartList"));
const cartContainer = document.querySelector(".checkout-items__container");

function addToCart() {
  cartContainer.innerHTML = "";

  total += product.price;
  cartItems.forEach(function () {
    cartContainer.innerHTML += ` <div>
          <h3>${product.name}</h3>
        </div>`;
  });
}
