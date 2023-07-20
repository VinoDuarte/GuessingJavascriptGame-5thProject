let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

// Funções

function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if (randomNumber == Number(inputNumber.value)) {
    document.querySelector(".screen1").classList.toggle("hide")
    document.querySelector(".screen2").classList.toggle("hide")

    document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas!`
  }
  
  inputNumber.value = ""
  xAttempts++
}

function buttonTryAgain (tryAgain) {
  screen2.classList.toggle("hide")
  screen1.classList.toggle("hide")

  randomNumber = Math.round(Math.random() * 10)
  xAttempts = 1
}

function enterButton(b) {
  if(b.key == 'Enter' && screen1.classList.contains('hide')) {
    buttonTryAgain()
  } else {
    handleTryClick
  }
}

// Eventos

btnTry.addEventListener('click', handleTryClick)

btnReset.addEventListener('click', buttonTryAgain)

document.addEventListener('keydown', enterButton)

