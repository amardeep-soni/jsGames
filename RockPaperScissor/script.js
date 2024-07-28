// console.log('I am working')

// listening click event when player click on start button

let startBtnClick = document.getElementById('startBtn');
startBtnClick.addEventListener('click', startFunction);

// it is an element in which we put whose Turn 
let turnElement = document.getElementById('turn');

// it is two element in which we store the number of win point by user and computer
let winNumber1Element = document.getElementById('winNumber1')
let winNumber2Element = document.getElementById('winNumber2')


let computerChoose;
let result;


//  Taking buttons from DOM
let playAgainElement = document.getElementById('playAgainBtn');
let resetElement = document.getElementById('resetBtn');

let buttonContainerElement = document.getElementById('buttonContainer')


playAgainElement.addEventListener('click', startFunction)
resetElement.addEventListener('click', resetFunction)

// It is a start function
function startFunction() {

resultElement.style.visibility='hidden';

    // showing buttons and hiding start button
    startBtnClick.style.display = 'none'
    playAgainElement.style.display = 'block'
    resetElement.style.display = 'block'


    buttonContainerElement.style.justifyContent = 'space-between'


    // console.log('your game is Started');
    turnElement.innerText = `Computer Turn`; // It will put computer turn into a turnElement in DOM

    computerChoose = computerTurn();  // it will call the computerTurn(); and this function return value is put in computerChoose 

    // This function will execute after 1 second and it will call humanTurn(); 
    setTimeout(() => {
        turnElement.innerText = `Your Turn`;
        humanTurn();
    }, 1000);
}


let rockClick = document.getElementById('rock')
let paperClick = document.getElementById('paper')
let scissorClick = document.getElementById('scissor')

// it is a human turn function which put the event listener in the rock, paper and scissor
function humanTurn() {
    rockClick.addEventListener('click', rockFunction)
    paperClick.addEventListener('click', paperFunction)
    scissorClick.addEventListener('click', scissorFunction)
}

// when player click on rock this function is execute and and it will remove the other paper and scissor click event
function rockFunction() {
    result = 'Rock';
    // console.log(result);

    paperClick.removeEventListener('click', paperFunction)
    scissorClick.removeEventListener('click', scissorFunction)

    checkWin();

}

// when player click on paper this function is execute and and it will remove the other rock and scissor click event
function paperFunction() {
    result = 'Paper';
    // console.log(result);
    rockClick.removeEventListener('click', rockFunction)
    scissorClick.removeEventListener('click', scissorFunction)

    checkWin();
}

// when player click on scissor this function is execute and and it will remove the other rock and paper click event
function scissorFunction() {
    result = 'Scissor';
    // console.log(result);

    rockClick.removeEventListener('click', rockFunction)
    paperClick.removeEventListener('click', paperFunction)

    checkWin();
}

// It is a computer turn function which choose one option randomly and return the choosed value
function computerTurn() {
    let choose = ['Rock', 'Paper', 'Scissor']

    let randomNumber = Math.ceil(Math.random() * 3) - 1;
    // console.log(randomNumber);
    let computeChoose = choose[randomNumber];
    console.log(computeChoose);

    return computeChoose;
}


let computerCounter = 0;
let humanCounter = 0;

let resultElement=document.getElementById('result');

// it will check who won the game or the game is draw and also it will update the counter it the computer or human won 
function checkWin() {

    // console.log(result)
    // console.log(computerChoose)

    resultElement.style.visibility='visible';

    if (result == computerChoose) {
        answer = `This game is draw`;
        resultElement.innerHTML=`${computerChoose}<small>Comp</small> = ${result}<small>You</small>`;
    }
    if (computerChoose == 'Rock' && result == 'Scissor') {
        answer = `computer won`;

        resultElement.innerHTML=`${computerChoose}<small>Comp</small> Beats ${result}<small>You</small>`;


        computerCounter += 1;
    }
    if (computerChoose == 'Scissor' && result == 'Paper') {
        answer = `computer won`;

        resultElement.innerHTML=`${computerChoose}<small>Comp</small> Beats ${result}<small>You</small>`;


        computerCounter += 1;
    }
    if (computerChoose == 'Paper' && result == 'Rock') {
        answer = `computer won`;

        resultElement.innerHTML=`${computerChoose}<small>Comp</small> Beats ${result}<small>You</small>`;


        computerCounter += 1;
    }
    if (result == 'Rock' && computerChoose == 'Scissor') {
        answer = `Human won`;

        resultElement.innerHTML=`${result}<small>You</small> Beats ${computerChoose}<small>Comp</small>`;


        humanCounter += 1;
    }
    if (result == 'Scissor' && computerChoose == 'Paper') {
        answer = `Human won`;

        resultElement.innerHTML=`${result}<small>You</small> Beats ${computerChoose}<small>Comp</small>`;


        humanCounter += 1;
    }
    if (result == 'Paper' && computerChoose == 'Rock') {
        answer = `Human won`;

        resultElement.innerHTML=`${result}<small>You</small> Beats ${computerChoose}<small>Comp</small>`;


        humanCounter += 1;
    }

    // console.log(computerCounter)
    // console.log(humanCounter)

    turnElement.innerText = answer;

    winNumber1Element.innerText = computerCounter;
    winNumber2Element.innerText = humanCounter;

    // console.log(answer)


    // console.log('                        ')
}


function resetFunction() {
    location.reload()
}

