// when loading this page
displayCart()

// display shopping cart on payment page
function displayCart() {
  let cartItemHTML = ''
  let summaryHTML = ''
  let price = 0
  let quantity = 0
  let subTotal = 0
  let totalPrice = 0

  if (localStorage.getItem('shopping-cart')) {
    // read cart from localStorage
    // then use JSON.parse() method to convert a JSON string into a JavaScript object
    var cart = JSON.parse(localStorage.getItem('shopping-cart'))

    // loop cart to get each cartItem info
    cart.forEach(function (cartItem) {
      // get product from product-list file access by id
      const product = productItemsById[cartItem.productId]

      price = parseFloat(product.price)
      quantity = parseInt(cartItem.quantity)
      subTotal = price * quantity

      // create string of cartItem html
      cartItemHTML += `
        <tr>
            <td class="table-detail">
              <img class="product-image" src="/images/${product.image}" alt="" />
            </td>
            <td class="table-detail">
              <span class="product-name">${product.name}</span>
              <button class="remove-btn">remove</button>
            </td>
            <td class="table-detail">
              <span class="product-quantity">${quantity}</span>
            </td>
            <td class="product-price table-detail">$${subTotal}</td>
          </tr>
        `

      totalPrice += subTotal
    })
  }

  // get table body for adding cartItem and summary html
  const orderTableBody = document.getElementById('order-table-body')
  // add cartItem to html
  orderTableBody.insertAdjacentHTML('beforeend', cartItemHTML)
  // update total price in html
  document.getElementById('totalPrice').innerHTML = totalPrice
}

// remove all cartItem
function clearCart() {
  // If shopping cart in local storage  is not empty
  if (localStorage.getItem('shopping-cart')) {
    // remove local storage
    localStorage.removeItem('shopping-cart')
  }
}

// ----- handle check out button -----
const checkoutBtn = document.getElementById('formSubmit-btn')
checkoutBtn.addEventListener('click', submitForm)

function submitForm(event) {
  // clear cart in local storage
  clearCart()
  // refresh page
  location.reload()
}
