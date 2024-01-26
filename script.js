const inputNumber = document.querySelector("#inputNumber")
const inputSubmit = document.querySelector("#inputSubmit")
const endMenu = document.querySelector(".end")
const wrapper = document.querySelector(".wrapper")

const tryCountMenu = document.querySelector("#tryCount")
const guessedNumberMenu = document.querySelector("#guessedNumber")

const playAgainButton = document.querySelector(".again__button")

let guessNumber = undefined
let tryCount = 1

function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function startGame(){
    guessNumber = randomNumber(0,20)
    console.log(guessNumber);
    endMenu.style.left = "200%"
    wrapper.style.pointerEvents = "all"
    inputNumber.value = ""
}

function endGame(){
    endMenu.style.left = "50%"
    wrapper.style.pointerEvents = "none"
    tryCountMenu.textContent = tryCount
    guessedNumberMenu.textContent = guessNumber
}

inputSubmit.addEventListener("click", function(event){
    if(inputNumber.value == guessNumber){
        console.log("Вы угадали")
        endGame()
    }else{
        tryCount =+ 1
        console.log("Вы не угадали")
        alert("Неверно >:(")
    }
})

playAgainButton.addEventListener("click", function(){
    startGame()
})

startGame()