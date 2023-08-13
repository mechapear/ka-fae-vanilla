function resetMsg(event) {
  event.target.setCustomValidity('')
}
// check name input
function checkName(event) {
  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity('Name cannot be blank')
  }
}
const nameInput = document.getElementById('name-input')
nameInput.addEventListener('invalid', checkName)
nameInput.addEventListener('input', resetMsg)

// check address input
function checkAddress(event) {
  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity('Address cannot be blank')
  }
}
const addressInput = document.getElementById('address-input')
addressInput.addEventListener('invalid', checkAddress)
addressInput.addEventListener('input', resetMsg)

// check state input
function checkState(event) {
  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity('Please choose your state')
  }
}
const stateInput = document.getElementById('state-input')
stateInput.addEventListener('invalid', checkState)
stateInput.addEventListener('input', resetMsg)

// check postal code input
function checkPostal(event) {
  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity('Postal code cannot be blank')
  }
}
const postalInput = document.getElementById('postal-input')
postalInput.addEventListener('invalid', checkPostal)
postalInput.addEventListener('input', resetMsg)

// check email input
function checkEmail(event) {
  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity('Email cannot be blank')
  }
}
const emailInput = document.getElementById('email-input')
emailInput.addEventListener('invalid', checkEmail)
emailInput.addEventListener('input', resetMsg)

// check cardholder input
function checkCardName(event) {
  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity('Cardholder name cannot be blank')
  }
}
const cardNameInput = document.getElementById('cardName-input')
cardNameInput.addEventListener('invalid', checkCardName)
cardNameInput.addEventListener('input', resetMsg)

// check card number input
function checkCardNum(event) {
  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity('Card number cannot be blank')
  }
}
const cardInput = document.getElementById('card-input')
cardInput.addEventListener('invalid', checkCardNum)
cardInput.addEventListener('input', resetMsg)

// check expiration date input
function checkExpiration(event) {
  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity('Expiration date cannot be blank')
  }
}
const expirationInput = document.getElementById('expiration-input')
expirationInput.addEventListener('invalid', checkExpiration)
expirationInput.addEventListener('input', resetMsg)

// check card cvv input
function checkCVV(event) {
  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity('CVV cannot be blank')
  }
}
const cvvInput = document.getElementById('cvv-input')
cvvInput.addEventListener('invalid', checkCVV)
cvvInput.addEventListener('input', resetMsg)
