function subscribeComplete() {
  const msgBlock = document.getElementById('complete-msg-block')
  const subscribeInput = document.getElementById('subscribeInput')
  const inputEl = document.getElementById('user-email')
  
  msgBlock.style.display = 'block'
  subscribeInput.style.display = 'none'
  // for testing that we can get user input
  console.log(inputEl.value)
}
