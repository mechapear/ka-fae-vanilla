// save shopping cart in local storage
function saveCartInLocalstorage(newCartItem) {
  // array of shopping cart
  let cart = []
  const stringCartData = localStorage.getItem('shopping-cart')
  // If shopping cart in local storage is not empty
  if (stringCartData) {
    // read cart from localStorage
    // then use JSON.parse() method to convert a JSON string into a JavaScript object
    cart = JSON.parse(stringCartData)
  }
  // check cartItem, if cartItam already exists, update the quantity of the existing cartItem
  let isCartItemAlreadyExist = false
  for (const cartItem of cart) {
    if (cartItem.productId === newCartItem.productId) {
      cartItem.quantity += newCartItem.quantity
      isCartItemAlreadyExist = true
      break
    }
  }

  // if cartItam doesn't already exist, add new cartItem to cart object
  if (!isCartItemAlreadyExist) {
    cart.push(newCartItem)
  }

  // save cart to local storage
  // use setItem() method to store values in localStorage.
  localStorage.setItem('shopping-cart', JSON.stringify(cart))
}

function addToCart(event) {
  //get productQuantity element & value
  const input = event.target.parentElement.children.productQuantity
  const inputQuantity = parseInt(input.value)
  // get product id
  const productId = event.target.dataset.productId
  // get product item info
  var cartItem = {
    productId,
    quantity: inputQuantity,
  }
  // add new item to shopping cart and save to local storage
  saveCartInLocalstorage(cartItem)
  // reset productQuantity input to be 1
  input.value = 1
}

// ------ handle add to cart button -----
function handleClickAddToCart(event) {
  addToCart(event)
  // alert add to cart successfully
  alert('Successfully added!')
}

const addToCartBtn = document.querySelectorAll('.add-to-cart-btn')
// by eventlistner to all Add to cart button
addToCartBtn.forEach(el => el.addEventListener('click', handleClickAddToCart))

// ----- handle buy now button -----
function handleClickBuyNow(event) {
  // add product in shopping cart
  addToCart(event)
  // go to payment page
  window.location.href = '/ka-fae-vanilla/checkouts/'
}

const buyNowBtn = document.querySelectorAll('.buy-now-btn')
// by eventlistner to all Add to cart button
buyNowBtn.forEach(el => el.addEventListener('click', handleClickBuyNow))
