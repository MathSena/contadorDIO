var currentNumberWrapper = document.getElementById('currentNumber') // Pegando o SPAN do HTML pelo getElementByID
var currentNumber = 0

function increment() {
  currentNumber = currentNumber + 1
  currentNumberWrapper.innerHTML = currentNumber // Alterando o valor do número pelo innerHTML
}

function decrement() {
  currentNumber = currentNumber - 1
  currentNumberWrapper.innerHTML = currentNumber
}
