let chips = 20000
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let chipsEl = document.getElementById("chips-el")
chipsEl.textContent = chips + "₩"

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    hasBlackJack = false
    let buyIn = 500
    chips = chips - buyIn
    chipsEl.textContent = chips + "₩"
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "카드: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "합집합: " + sum
    if (sum <= 20) {
        message = "새 카드를 원하십니까?"
    } else if (sum === 21) {
        message = "당신은 블랙잭이 있습니다!"
        hasBlackJack = true
        let win = 500
        chips = chips + win
        chipsEl.textContent = chips + "₩"
    } else {
        message = "당신은 패배"
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

// korean
// "₩"  "당신은 패배!"  "당신은 블랙잭이 있습니다!"  
// "새 카드를 원하십니까?" "합집합: " "카드: " 