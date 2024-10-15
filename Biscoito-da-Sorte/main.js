// Variaveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")


// função callback
function handleTryClick(event) {
  event.preventDefault()
  
  
  if(screen2.classList.contains("hide")) {
    screen1.classList.add("hide")
    screen2.classList.remove("hide")
  }
}

function handleResetClick() {
  screen1.classList.remove("hide")
  screen2.classList.add("hide")
}

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)