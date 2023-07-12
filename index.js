let firstCard = getRandomCard()
let secondCard = getRandomCard()

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message_el")
let sumEl = document.querySelector(".sum-el")
let cardsEl = document.getElementById("cards-el")

let player = { //object
    name: "Rula",
    chips: 145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " :$" + player.chips

//if 1>> return 11
//if 11-13 >>> /return 10
function getRandomCard() {//Math.random()
    let randomNumber = Math.floor(Math.random() * 13) + 1  //0.000-0.999
    if (randomNumber > 10) {
        return 10
    }
    else if (randomNumber === 1) {
        return 11
    }
    else {
        return randomNumber
    }

}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "cards:"
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "sum:" + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21) {
        message = "Wohoo! you've got Blackjack!"
        hasBlackJack = true
    }
    else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }


}
