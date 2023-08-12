// ----- handle form validation-----
// reset form validation message
function resetMsg(event) {
  event.target.setCustomValidity('')
}

// check email input
function checkEmail(event) {
  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity('Email cannot be blank')
  }
}

const emailInput = document.getElementById('user-email')
emailInput.addEventListener('invalid', checkEmail)
emailInput.addEventListener('input', resetMsg)

// ----- handle form submit-----
function subscribeComplete(event) {
  const msgBlock = document.getElementById('complete-msg-block')
  const subscribeInput = document.getElementById('subscribeInput')

  // prevent default refresh the page
  event.preventDefault()

  // display completion message
  msgBlock.style.display = 'block'
  subscribeInput.style.display = 'none'

  // for testing that we can get user input
  console.log(emailInput.value)
}

const subscribeBtn = document.getElementById('email-subscription')
subscribeBtn.addEventListener('submit', subscribeComplete)
