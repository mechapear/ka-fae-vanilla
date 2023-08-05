// when loading this page
displayCart()

// remove cartItem by index
function removeCartItem(event) {
  // get product id
  const productId = event.target.dataset.productId

  if (localStorage.getItem('shopping-cart')) {
    // read cart from localStorage
    // then use JSON.parse() method to convert a JSON string into a JavaScript object
    const cart = JSON.parse(localStorage.getItem('shopping-cart'))

    // remove cartItem from cart
    const updatedCart = cart.filter(
      cartItem => cartItem.productId !== productId
    )
    // save cart to local storage
    // use setItem() method to store values in localStorage.
    localStorage.setItem('shopping-cart', JSON.stringify(updatedCart))
  }
  // display an update shopping cart
  displayCart()
}

// display shopping cart on payment page
function displayCart() {
  // get table body for adding cartItem and summary html
  const orderTableBody = document.getElementById('order-table-body')

  // clear shopping cart
  orderTableBody.innerHTML = ''

  let cartItemHTML = ''
  let totalPrice = 0
  const stringCartData = localStorage.getItem('shopping-cart')

  if (stringCartData && stringCartData !== '[]') {
    // read cart from localStorage
    // then use JSON.parse() method to convert a JSON string into a JavaScript object
    const cart = JSON.parse(stringCartData)

    // loop cart to get each cartItem info
    cart.forEach(function (cartItem) {
      // get product from product-list file access by id
      const product = productItemsById[cartItem.productId]

      const price = parseFloat(product.price)
      const quantity = parseInt(cartItem.quantity)
      const subTotal = price * quantity
      totalPrice += subTotal

      // create string of cartItem html
      cartItemHTML += `
        <tr>
            <td class="table-detail">
              <img class="product-image" src="/images/${product.image}" alt="" />
            </td>
            <td class="table-detail">
              <span class="product-name">${product.name}</span>
              <button class="remove-btn" data-product-id="${product.id}">remove</button>
            </td>
            <td class="table-detail">
              <span class="product-quantity">${quantity}</span>
            </td>
            <td class="product-price table-detail">$${subTotal}</td>
          </tr>
        `
    })
  } else {
    cartItemHTML = `
    <tr >
      <td class="table-detail cart-empty" colspan="4">
        Shopping cart is empty. <a class="cart-empty-link" href="page2_products.html">Continue shopping</a>
      </td>
    </tr>
    `
  }

  // add cartItem to html
  orderTableBody.insertAdjacentHTML('beforeend', cartItemHTML)
  // update total price in html
  document.getElementById('totalPrice').innerHTML = totalPrice

  // ----- handle remove button -----
  const removeBtn = document.querySelectorAll('.remove-btn')
  // by eventlistner to all remove buttons
  removeBtn.forEach(el => el.addEventListener('click', removeCartItem))
}

// remove all cartItem
function clearCart() {
  // If shopping cart in local storage  is not empty
  if (localStorage.getItem('shopping-cart')) {
    // remove local storage
    localStorage.removeItem('shopping-cart')
  }
}

// ----- handle form submit-----
function handleSubmitForm(event) {
  // prevent default refresh the page
  event.preventDefault()

  // clear cart in local storage
  clearCart()

  // alert check out successfully
  alert('We have received your order. Thank you for purchasing :)')

  // reset all  input to be blank
  event.target.reset()
}

// check form validation
const form = document.getElementById('check-out-form')
form.addEventListener('submit', handleSubmitForm)
