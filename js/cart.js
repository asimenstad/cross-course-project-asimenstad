const cartContainer = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");

function addProducts() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  console.log(cartItems);
  for (let i = 0; i < cartItems.length; i++) {
    cartContainer.innerHTML += ` <div class="cart-item">
    <img src="${cartItems[i].image}" />
    <div class="cart-item__info">
<h3>${cartItems[i].name}</h3>
<p>${cartItems[i].price} KR</p>
<p>Size: </p>
</div>
  </div>  
  <hr />`;
  }
}
addProducts();

function addTotal() {
  let totalSum = localStorage.getItem("totalPrice");
  totalSum = JSON.parse(totalSum);

  cartTotal.innerHTML = `<h3>Total: ${totalSum} KR</h3>`;
}
addTotal();
