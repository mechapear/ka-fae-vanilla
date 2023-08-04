// ------ handle add to cart button -----
const addToCartBtn = document.querySelectorAll('.add-to-cart-btn')
// by eventlistner to all Add to cart button
addToCartBtn.forEach(el => el.addEventListener('click', addToCart))

function addToCart(event) {
  //get productQuantity element & value
  const input = event.target.parentElement.children.productQuantity
  const inputQuantity = input.value
  // get product id
  const productId = event.target.dataset.productId
  // get product item info
  var cartItem = {
    productId,
    quantity: inputQuantity,
  }
  // add new item to shopping cart and save to local storage
  saveCartInLocalstorage(cartItem)
}

// ----- handle buy now button -----
const buyNowBtn = document.querySelectorAll('.buy-now-btn')
// by eventlistner to all Add to cart button
buyNowBtn.forEach(el => el.addEventListener('click', buyNow))

function buyNow(event) {
  // add product in shopping cart
  addToCart(event)
  // go to payment page
  window.location.href = '/page3_payment.html'
}

// save shopping cart in local storage
function saveCartInLocalstorage(cartItem) {
  // array of shopping cart
  var cart = []
  // If shopping cart in local storage is not empty
  if (localStorage.getItem('shopping-cart')) {
    // read cart from localStorage
    // then use JSON.parse() method to convert a JSON string into a JavaScript object
    cart = JSON.parse(localStorage.getItem('shopping-cart'))
  }
  // add new cartItem to cart object
  cart.push(cartItem)

  // save cart to local storage
  // use setItem() method to store values in localStorage.
  localStorage.setItem('shopping-cart', JSON.stringify(cart))
}
