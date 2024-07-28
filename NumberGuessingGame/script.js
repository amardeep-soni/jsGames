const elements = {
    start: document.getElementById('gameStart'),
    reset: document.getElementById('gameReset'),
    container: document.getElementById('gameContainer'),
    topText: document.getElementById('topText'),
    guessBtn: document.getElementById('guessButton'),
    outputWhat: document.getElementById('outputWhat'),
    allNumbers: document.getElementById('allNumbers'),
    guessCounter: document.getElementById('guessCounter'),
    inputNumber: document.getElementById('inputNumber'),
};

let randomNumber = 0;
let triedNumbers = [];

function startGame() {
    document.getElementById('overlay').classList.remove('hidden');
    document.getElementById('dialog').classList.remove('hidden');
}

function chooseLevel(level) {
    document.getElementById('overlay').classList.add('hidden');
    document.getElementById('dialog').classList.add('hidden');

    elements.topText.textContent = 'Computer is Choosing Number';
    elements.start.style.display = 'none';
    elements.reset.style.display = 'block';
    // elements.container.style.display = 'flex';
    elements.container.classList.add('active');
    var endNumber = level == 'easy' ? 10 : (level == 'medium' ? 50 : 100); 
    randomNumber = Math.floor(Math.random() * endNumber);
    console.log(randomNumber);
    setTimeout(() => {
        elements.topText.innerHTML = `Your Turn! <br>Choose Number between 1-${endNumber}`;
        elements.guessBtn.removeAttribute('disabled');
    }, 2000);
}

function guess() {
    console.log('guessing Number');
    const getIntegerNumber = parseInt(elements.inputNumber.value);
    console.log(getIntegerNumber);
    // triedNumber++;
    triedNumbers.push(getIntegerNumber);
    var numbersJoin = triedNumbers.join(", ");
    elements.inputNumber.value = '';
    
    if (getIntegerNumber === randomNumber) {
        elements.outputWhat.innerText = `Yaah! you Won🎉🎊`;
        elements.allNumbers.innerText = `Your Guessed are: ${numbersJoin}`;
        elements.guessCounter.innerText = `You guessed it in ${triedNumbers.length} Guesses`;
        elements.outputWhat.style.color = 'green';
        elements.guessBtn.setAttribute('disabled', 'disabled');
        return;
    } else if (getIntegerNumber < randomNumber) {
        elements.outputWhat.innerText = `Your Guess is Too Low`;
        elements.outputWhat.style.color = 'red';
    } else if (getIntegerNumber > randomNumber) {
        elements.outputWhat.innerText = `Your Guess is Too High`;
        elements.outputWhat.style.color = 'blue';
    } else {
        elements.outputWhat.innerText = `Invalid Number`;
        elements.outputWhat.style.color = 'red';
        return;
    }
    
    elements.allNumbers.style.display = 'block';
    elements.allNumbers.innerText = `Your Guessed are: ${numbersJoin}`;
    elements.guessCounter.innerText = `No. of Guesses = ${triedNumbers.length}`;
}

function resetGame() {
    elements.container.classList.remove('active');
    setTimeout(() => {
        location.reload();
    }, 1000);
}
