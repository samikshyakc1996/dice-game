// This function returns a random Number between 1 (inclusive) and the argument passed to the function
// If no argument is passed, 6 is set, ie, returns a number between and including 1 to 6
// 		For example:
//    getRandomDiceRoll() will return either 1, 2, 3, 4, 5, 6
const getRandomDiceRoll = function (sides = 6) {
  return Math.floor(Math.random() * sides) + 1;
};
let lastRoll = 0;
let lastMessage = "";
const rollTheDice = function () {
  // Here's a test roll, check the console!

  // 1) Call getRandomDiceRoll() and store the result as a variable named "diceRoll"
  let diceRoll = getRandomDiceRoll();
  let diceRollII = getRandomDiceRoll();
  console.log(diceRoll);
  console.log(diceRollII);
  let sumValue = diceRoll + diceRollII;
  // 2) Update user interface (document), showing the diceface (svg image) that matches the roll number

  let eleMessage = document.querySelector(`#message`);
  let rollStr = ["zero", "one", "four", "six", "eight", "ten"];

  let oddRollStr = [
    "Zero",
    "Ace Duece",
    "Five(Fever Five)",
    "Natural or Seven Out",
    "Nine(Nina)",
    "Yo(Yo-leven)",
  ];

  if (diceRoll === 1 && diceRollII === 1) {
    console.log("snake Eyes");
    eleMessage.innerText = `You Rolled Snake Eyes`;
  } else if (diceRoll === 6 && diceRollII === 6) {
    console.log(
      `${diceRollII} ${diceRoll} = 6 so you rolled Boxcars or Midnight`
    );
    eleMessage.innerText = `You Rolled Boxcars or Midnight`;
  } else if (sumValue % 2 == 1) {
    sumValue = Math.floor(sumValue / 2);

    console.log(`${oddRollStr[sumValue]}`);
    eleMessage.innerText = `You Rolled: ${oddRollStr[sumValue]}`;
  } else if (diceRoll === diceRollII) {
    eleMessage.innerText = `You rolled hard ${rollStr[sumValue / 2]}`;
    console.log(`${diceRoll} + ${diceRollII} =hard rolled`);
  } else if (diceRoll !== diceRollII && sumValue % 2 === 0 && sumValue !== 2) {
    console.log(`${rollStr[sumValue / 2]}`);
    eleMessage.innerText = `You rolled easy ${rollStr[sumValue / 2]}`;
    console.log("easy rolled");
  } else {
    console.log("I am not sure");
  }
  /*  // FOR ONE DICE
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

  */

  if (eleMessage.innerText === lastMessage) {
    eleMessage.innerText = `${lastMessage} again`;
    console.log(`${lastMessage} again!`);
  }
  lastMessage = eleMessage.innerText;

  let eleDice = document.querySelector(`#dice`);
  //set dice's src attribute
  eleDice.setAttribute(`src`, `img/dice${diceRoll}.svg`);

  //update dice's alt attribute
  eleDice.setAttribute(`alt`, `Dice${diceRoll}`);

  // diceII
  let eleDiceII = document.querySelector(`#diceII`);
  //set diceII's src attribute
  eleDiceII.setAttribute(`src`, `img/dice${diceRollII}.svg`);

  //update dice's alt attribute
  eleDiceII.setAttribute(`alt`, `Dice${diceRollII}`);

  // 3) Use `diceRoll` to update the label "You rolled: #" (replacing # with the roll)

  // 4) Wrap the dice roll procedure in a function named rollTheDice(), call it from the console to test
};
eleBtn = document.querySelector(`#btn`);
eleBtn.addEventListener(`click`, rollTheDice);
