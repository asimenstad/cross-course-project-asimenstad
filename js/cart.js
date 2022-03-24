const cartTotalItems = document.querySelector(".total-items");
const cartContainer = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const orderValue = document.querySelector(".order-value");
const deliveryValue = document.querySelector(".delivery-value");
const totalValue = document.querySelector(".total-value");

function addProducts() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  cartTotalItems.innerHTML = `<h2>(${cartItems.length})</h2>`;

  cartContainer.innerHTML = "";

  for (let i = 0; i < cartItems.length; i++) {
    cartContainer.innerHTML += ` <div class="cart-item">
    <div class="cart-item__product">
    <img src="${cartItems[i].image}" />
    <div class="cart-item__info">
<h3>${cartItems[i].name}</h3>
<p>${cartItems[i].price} KR</p>
<p>Size: </p>
</div>
</div>
<button class="remove-item"><i class="far fa-trash-alt"></i></button>
  </div>  
  <hr />`;
  }
}
addProducts();

function addTotal() {
  let totalSum = localStorage.getItem("totalPrice");
  totalSum = JSON.parse(totalSum);

  cartTotal.innerHTML = `<h3>Sum</h3><h3>${totalSum} KR</h3>`;
  orderValue.textContent = totalSum;
}
addTotal();
