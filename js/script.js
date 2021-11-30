// This function returns a random Number between 1 (inclusive) and the argument passed to the function
// If no argument is passed, 6 is set, ie, returns a number between and including 1 to 6
// 		For example:
//    getRandomDiceRoll() will return either 1, 2, 3, 4, 5, 6
const getRandomDiceRoll = function (sides = 6) {
  return Math.floor(Math.random() * sides) + 1;
};
let lastRoll = 0;
const rollTheDice = function () {
  // Here's a test roll, check the console!

  // 1) Call getRandomDiceRoll() and store the result as a variable named "diceRoll"
  let diceRoll = getRandomDiceRoll();
  console.log(diceRoll);
  // 2) Update user interface (document), showing the diceface (svg image) that matches the roll number

  let eleMessage = document.querySelector(`#message`);
  let rollStr = ["zero", "one", "two", "three", "four", "five", "six"];
  if (diceRoll === lastRoll) {
    console.log("same");
    eleMessage.innerText = `You rolled: ${rollStr[diceRoll]} again`;
  } else {
    console.log("different");
    eleMessage.innerText = `You rolled: ${rollStr[diceRoll]}`;
  }
  console.log(`Your Roll is ${diceRoll}`);
  console.log(`Your last Rol is ${lastRoll}`);
  lastRoll = diceRoll;
  let eleDice = document.querySelector(`#dice`);
  //set dice's src attribute
  eleDice.setAttribute(`src`, `img/dice${diceRoll}.svg`);

  //update dice's alt attribute
  eleDice.setAttribute(`alt`, `Dice${diceRoll}`);

  // 3) Use `diceRoll` to update the label "You rolled: #" (replacing # with the roll)

  // 4) Wrap the dice roll procedure in a function named rollTheDice(), call it from the console to test
};
eleBtn = document.querySelector(`#btn`);
eleBtn.addEventListener(`click`, rollTheDice);
