// COIN FLIP SIMULATOR

// HTML Variables
let outputEl = document.getElementById("output");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");

// Count Variables
let numHeads = 0;
let numTails = 0;

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Generate a Random Number
  let randNum = Math.random();

  //   Simulate the Coin Flip
  if (randNum < 0.5) {
    outputEl.innerHTML = "<img src='img/heads.png' >";
    numHeads = numHeads + 1;
    headsEl.innerHTML = numHeads;
  } else {
    outputEl.innerHTML = "<img src='img/tails.png' >";
    numTails = numTails + 1;
    tailsEl.innerHTML = numTails;
  }
}

// DICE ROLL SIMULATOR

// HTML Variables
let firstDiceOutputEl = document.getElementById("dice-output1");
let secondDiceOutputEl = document.getElementById("dice-output2");
let sumOutputEl = document.getElementById("sum-out");
let oneEl = document.getElementById("one-out");
let twoEl = document.getElementById("two-out");
let threeEl = document.getElementById("three-out");
let fourEl = document.getElementById("four-out");
let fiveEl = document.getElementById("five-out");
let sixEl = document.getElementById("six-out");

// Count Variables
let numOne = 0;
let numTwo = 0;
let numThree = 0;
let numFour = 0;
let numFive = 0;
let numSix = 0;

// Button Event Listener
document.getElementById("dice-btn").addEventListener("click", diceBtnClicked);

function diceBtnClicked() {
  // Generate a Random Number
  let randNum1 = Math.floor(Math.random() * 6 + 1);
  let randNum2 = Math.floor(Math.random() * 6 + 1);

  // Add sum of dice
  let sum = randNum1 + randNum2;
  sumOutputEl.innerHTML = sum;

  // Simulate the first dice roll
  if (randNum1 == 1) {
    firstDiceOutputEl.innerHTML = "<img src='img/1.png' width='300px' >";
    numOne = numOne + 1;
    oneEl.innerHTML = numOne;
  } else if (randNum1 == 2) {
    firstDiceOutputEl.innerHTML = "<img src='img/2.png' width='300px' >";
    numTwo = numTwo + 1;
    twoEl.innerHTML = numTwo;
  } else if (randNum1 == 3) {
    firstDiceOutputEl.innerHTML = "<img src='img/3.png' width='300px' >";
    numThree = numThree + 1;
    threeEl.innerHTML = numThree;
  } else if (randNum1 == 4) {
    firstDiceOutputEl.innerHTML = "<img src='img/4.png' width='300px' >";
    numFour = numFour + 1;
    fourEl.innerHTML = numFour;
  } else if (randNum1 == 5) {
    firstDiceOutputEl.innerHTML = "<img src='img/5.png' width='300px' >";
    numFive = numFive + 1;
    fiveEl.innerHTML = numFive;
  } else {
    firstDiceOutputEl.innerHTML = "<img src='img/6.png' width='300px' >";
    numSix = numSix + 1;
    sixEl.innerHTML = numSix;
  }

  // Simulate the second dice roll
  if (randNum2 == 1) {
    secondDiceOutputEl.innerHTML = "<img src='img/1.png' width='300px' >";
    numOne = numOne + 1;
    oneEl.innerHTML = numOne;
  } else if (randNum2 == 2) {
    secondDiceOutputEl.innerHTML = "<img src='img/2.png' width='300px' >";
    numTwo = numTwo + 1;
    twoEl.innerHTML = numTwo;
  } else if (randNum2 == 3) {
    secondDiceOutputEl.innerHTML = "<img src='img/3.png' width='300px' >";
    numThree = numThree + 1;
    threeEl.innerHTML = numThree;
  } else if (randNum2 == 4) {
    secondDiceOutputEl.innerHTML = "<img src='img/4.png' width='300px' >";
    numFour = numFour + 1;
    fourEl.innerHTML = numFour;
  } else if (randNum2 == 5) {
    secondDiceOutputEl.innerHTML = "<img src='img/5.png' width='300px' >";
    numFive = numFive + 1;
    fiveEl.innerHTML = numFive;
  } else {
    secondDiceOutputEl.innerHTML = "<img src='img/6.png' width='300px' >";
    numSix = numSix + 1;
    sixEl.innerHTML = numSix;
  }
}
