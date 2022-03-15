const startBtn = document.getElementById('startGame')
const submitBtn = document.getElementById('submitBtn')
const resetBtn = document.getElementById('resetBtn')
const lifeBar = document.getElementById('lifebar')
const numberF1 = document.getElementById('number1')
const numberF2 = document.getElementById('number2')
const numberF3 = document.getElementById('number3')
const operand = document.getElementById('operand')
const operand2 = document.getElementById('operand2')
const inputField = document.getElementById('inputField')
const alertField = document.getElementById('alerts')
const soulCounter = document.getElementById('soulCount')
const description = document.getElementById('description')
const loadBtn = document.getElementById('loadGame')
const deleteBtn = document.getElementById('deleteSave')

let lifeleft = 100;
let actualRound = 1; 
let actualAnswer = 0;
let soulsCount = 0;

startBtn.addEventListener('click', function() {
    startGame()
})

submitBtn.addEventListener('click', function() {
    checkAnswer()
    playRound()
})

resetBtn.addEventListener('click', function() {
    window.location.reload(true)
})

loadBtn.addEventListener('click', function() {
    actualRound = localStorage.getItem("actualRound")
    actualRound = parseInt(actualRound)-1
    greenFinished()
    loadSouls = localStorage.getItem("soulsCount")
    soulsCount = 0
    soulsCount = parseInt(loadSouls)
    lifeBar.value = localStorage.getItem("lifeLeft")
    getToNextField()
    playRound()
})

deleteBtn.addEventListener('click', function() {
    localStorage.clear()
})

function playRound() {
    actualAnswer = question(actualRound)
    console.log(actualAnswer)
}

function wrongAnswer() {
    alertField.innerHTML = "Wrong Answer!"
    if (parseInt(lifeBar.value) > 33) {
    lifeBar.value = parseInt(lifeBar.value)-33
    } else {
        lifeBar.value = 0
        alertField.innerHTML = "You died!"
        alert("You died!")
        setResetBtn()
    }
}

function getToNextField() {
    if (parseInt(actualRound) === 1){
        soulsCount += 15
    } else if (parseInt(actualRound) === 2) {
        soulsCount += 30
    } else if (parseInt(actualRound) === 3) {
        soulsCount += 45
    } else if (parseInt(actualRound) === 4) {
        soulsCount += 100
    } else if (parseInt(actualRound) === 5) {
        soulsCount += 150
    } else if (parseInt(actualRound) === 6) {
        soulsCount += 200
    } else if (parseInt(actualRound) === 7) {
        soulsCount += 300
    } else if (parseInt(actualRound) === 8) {
        soulsCount += 400
    } else if (parseInt(actualRound) === 9) {
        soulsCount += 1500
        actualRound++
        alert("You finished!!!")
        finishedTheGame()
    }
    alertField.innerHTML = ""
    if (parseInt(actualRound)<9) {
    let selecterOld = "field"+actualRound
    actualRound++;
    let selecterNew = "field"+actualRound
    let oldField = document.getElementById(selecterOld)
    let newField = document.getElementById(selecterNew)
    oldField.classList.remove('actual')
    oldField.classList.add('done')
    oldField.innerHTML = parseInt(actualRound)-1
    newField.classList.add('actual')
    newField.innerHTML = '💚'
    soulCounter.innerHTML = soulsCount
    localStorage.clear()
    localStorage.setItem("actualRound", actualRound)
    localStorage.setItem("soulsCount", soulsCount)
    localStorage.setItem("lifeLeft", lifeBar.value)
    }
    
}

function startGame() {
    if (actualRound === 1) {
        let selecter = "field"+actualRound
        let field = document.getElementById(selecter)
        field.classList.add('actual')
        field.innerHTML = '💚'
        soulCounter.innerHTML = "0"
       playRound()
    } else {
        alert("Game already started!")
    }
}

function question(round) {
    if (round === 1) {
        let number1 = Math.floor(Math.random()*50)+1
        let number2 = Math.floor(Math.random() *50)+1
        let answer = parseInt(number1) + parseInt(number2)
        numberF1.innerHTML = number1
        numberF2.innerHTML = number2
        operand.innerHTML = "+"
        return answer
    }
    if (round === 2) {
        let number1 = Math.floor(Math.random()*100)+50
        let number2 = Math.floor(Math.random() *50)+10
        let answer = parseInt(number1) - parseInt(number2)
        numberF1.innerHTML = number1
        numberF2.innerHTML = number2
        operand.innerHTML = "-"
        return answer
    }
    if (round === 3) {
        let number1 = Math.floor(Math.random()*25)+1
        let number2 = Math.floor(Math.random() *25)+1
        let answer = parseInt(number1) * parseInt(number2)
        numberF1.innerHTML = number1
        numberF2.innerHTML = number2
        operand.innerHTML = "*"
        return answer
    }
    if (round === 4) {
        let answer = Math.floor(Math.random() *11)+1
        let number2 = Math.floor(Math.random() *21)+1
        let number1 = number2 * answer
        numberF1.innerHTML = number1
        numberF2.innerHTML = number2
        operand.innerHTML = "/"
        return answer
    }
    if (round === 5) {
        let number1 = Math.floor(Math.random()*50)+1
        let number2 = Math.floor(Math.random() *50)+1
        let number3 = Math.floor(Math.random() *50)+1
        let answer = parseInt(number1) + parseInt(number2) + parseInt(number3)
        numberF1.innerHTML = number1
        numberF2.innerHTML = number2
        numberF3.innerHTML = number3
        operand.innerHTML = "+"
        operand2.innerHTML = "+"
        return answer
    }
    if (round === 6) {
        let number1 = Math.floor(Math.random()*100)+50
        let number2 = Math.floor(Math.random() *50)+10
        let number3 = Math.floor(Math.random() *10)+1
        let answer = parseInt(number1) - parseInt(number2) - parseInt(number3)
        numberF1.innerHTML = number1
        numberF2.innerHTML = number2
        numberF3.innerHTML = number3
        operand.innerHTML = "-"
        operand2.innerHTML = "-"
        return answer
    }
    if (round === 7) {
        let number1 = Math.floor(Math.random()*51)+1
        let number2 = Math.floor(Math.random() *11)+1
        let number3 = Math.floor(Math.random() *5)+1
        let answer = parseInt(number1) + parseInt(number2) * parseInt(number3)
        numberF1.innerHTML = number1
        numberF2.innerHTML = number2
        numberF3.innerHTML = number3
        operand.innerHTML = "+"
        operand2.innerHTML = "*"
        return answer
    }
    if (round === 8) {
        let answer = Math.floor(Math.random() * 7)+1
        let number1 = parseInt(answer) * parseInt(answer)
        numberF1.innerHTML = "Squareroot from"
        numberF2.innerHTML = number1
        numberF3.innerHTML = ""
        operand.innerHTML = ""
        operand2.innerHTML = ""
        return answer
    }
    if (round === 9) {
        let number1 = Math.floor(Math.random()*10)+1
        let number2 = Math.floor(Math.random() *5)+1
        let number3 = Math.pow(number1, number2)
        let answer = number2
        numberF1.innerHTML = number1
        numberF2.innerHTML = "?"
        operand.innerHTML = "pow"
        operand2.innerHTML = "="
        numberF3.innerHTML = number3
        return answer
    }
}

function checkAnswer() {
    let userAnswer = inputField.value
    inputField.value = null
    if (parseInt(userAnswer) === parseInt(actualAnswer)) {
        getToNextField()
    } else {
        wrongAnswer()
    }
}

function greenFinished() {
    for (let i = 1; i<actualRound; i++) {
        let field = "field"+i
        let doc = document.getElementById(field)
        doc.classList.add('done')    
    }
}

function setResetBtn() {
    let getSet = document.getElementById('whereInputIs')
    let btn = document.createElement('button')
    btn.innerHTML = "Reset the game"
    btn.addEventListener('click', function() {
        window.location.reload(true)
    })
    getSet.innerHTML = ""
    getSet.append(btn)
}

function finishedTheGame() {
    for (let i = 1; i<10; i++) {
        let field = "field"+i
        let doc = document.getElementById(field)
        doc.innerHTML = '❤️'
    }
    let field = document.getElementById('field9')
    field.classList.remove('actual')
    field.classList.add('done')
    numberF1.innerHTML = "YOU"
    numberF2.innerHTML = "DID"
    numberF3.innerHTML = "IT"
    operand.innerHTML = ""
    operand2.innerHTML = ""
    let getSet = document.getElementById('whereInputIs')
    getSet.innerHTML = "EINSTEIN!"
    let sign = document.getElementById('isSign')
    sign.innerHTML = ""
}