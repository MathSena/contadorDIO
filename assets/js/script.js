var currentNumberWrapper = document.getElementById('currentNumber') // Pegando o SPAN do HTML pelo getElementByID
var currentNumber = 0

function increment() {
  currentNumber = currentNumber + 1
  if (currentNumber > 10) {
    alert('Valor não pode ser maior que 10')
    currentNumber = 0
    currentNumberWrapper.innerHTML = currentNumber
  }

  currentNumberWrapper.innerHTML = currentNumber
}

function decrement() {
  currentNumber = currentNumber - 1
  currentNumberWrapper.innerHTML = currentNumber
}

function zerar() {
  currentNumber = 0
  currentNumberWrapper.innerHTML = currentNumber
}
