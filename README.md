# Dice Game

## Setup
- Fork this repository by clicking the "Fork" button in the top-right corner
- Clone the new repository to your local machine using `git clone {url}`

## Steps
1. Complete the steps in the HTML document to build a prototype interface for a dice game 
	- See [index.html] for an example interface written within a comment block
3. Call `getRandomDiceRoll()` and store the result as a variable named `diceRoll`
4. Update user interface (`document`), showing the dice face (svg image) that matches the roll number
5. Use `diceRoll` to update the label "You rolled: #" (replacing # with the roll)
6. Wrap the dice roll procedure in a function named `rollTheDice()`, call it from the `console` to test

## Tips
- Before starting, consider using the browser's developer tools to prototype a solution manually
	- Start by changing the document from the "Elements" tab to go from a *roll 3* to *roll 4*
- Next, consider prototyping within JS by assigning a number to `diceRoll` before getting a random
	- This will assist by creating a controlled case before assigning a random value
- Use the console to test each line of code that affects the document, as you code
	- Mis-selecting elements will create errors that prevent the page from working as intended
