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
    cart.forEach(function (item) {
      var cartItem = JSON.parse(item)
      price = parseFloat(cartItem.price)
      quantity = parseInt(cartItem.quantity)
      subTotal = price * quantity

      // create string of cartItem html
      cartItemHTML +=
        '<tr>' +
        "<td class='table-detail'>" +
        "<img class='product-image' src='/images/" +
        cartItem.image +
        "' />" +
        '</td>' +
        "<td class='table-detail'>" +
        "<span class='product-name'>" +
        cartItem.name +
        '</span>' +
        '</td>' +
        "<td class='table-detail'>" +
        "<input class='product-quantity' type='number' id='quantitySig' name='quantitySignature' min='0' pattern='[0-9]*' required " +
        "value='" +
        quantity +
        "'" +
        '/>' +
        '</td>' +
        "<td class='product-price table-detail'>$" +
        subTotal +
        '</td>' +
        '</tr>'

      totalPrice += subTotal

      // create string of summary html
      summaryHTML =
        '<tr>' +
        "<td class='table-detail' colspan='3'>Total price</td>" +
        "<td class='table-detail'>$" +
        totalPrice +
        '</td>' +
        '</tr>'
    })
  }

  // get table body for adding cartItem and summary html
  const orderTableBody = document.getElementById('order-table-body')
  // add cartItem to html
  orderTableBody.insertAdjacentHTML('beforeend', cartItemHTML)
  // add summary to html
  orderTableBody.insertAdjacentHTML('beforeend', summaryHTML)

}

// remove all cartItem
function clearCart() {
  // If shopping cart in local storage  is not empty
  if (localStorage.getItem('shopping-cart')) {
    // remove local storage
    localStorage.removeItem('shopping-cart')
  }
}

// remove cartItem by index
function removeCartItem(index) {
  if (localStorage.getItem('shopping-cart')) {
    var cart = JSON.parse(localStorage.getItem('shopping-cart'))
    localStorage.removeItem(cart[index])
    // display an update shopping cart
    displayCart()
  }
}
