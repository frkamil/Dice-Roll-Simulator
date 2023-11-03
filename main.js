// Dice Roll Simulator Demo

// HTML Element for Output
let outputEl = document.getElementById("output");
let die1 = Math.floor(Math.random() * 6) + 1;
let die2 = Math.floor(Math.random() * 6) + 1;
total = die1 + die2;

// Menu Button
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu").value;

  // Process Selection
  if (selection === "roll-once") {
    rollOnce();
  } else if (selection === "roll-five") {
    roll5Times();
  } else if (selection === "roll-n") {
    rollNTimes();
  } else if (selection === "snake-eyes") {
    snakeEyes();
  }
}

function rollOnce() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL ONCE</h3>";
  let die1 = Math.floor(Math.random() * 6) + 1;
  let die2 = Math.floor(Math.random() * 6) + 1;
  total = die1 + die2;
  // Random Dice Roll & Total
  // Add Results to output element
  let pEl = document.createElement("p");
  pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
  outputEl.appendChild(pEl);
}

function roll5Times() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL 5 TIMES</h3>";

  for (let numRolls = 0; numRolls < 5; numRolls++) {
    // Random Dice Roll & Total
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    total = die1 + die2;
    // Add Results to output element
    let pEl = document.createElement("p");
    pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
    outputEl.appendChild(pEl);
  }
}

function rollNTimes() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL 'N' TIMES</h3>";
  rollPrompt = +prompt("Enter # of Rolls");
  for (let numRolls = 0; numRolls < rollPrompt; numRolls++) {
    // Random Dice Roll & Total
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    total = die1 + die2;
    // Add Results to output element
    let pEl = document.createElement("p");
    pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
    outputEl.appendChild(pEl);
  }
}

function snakeEyes() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL UNTIL SNAKE EYES</h3>";

  let numRolls = 0;
  while (true) {
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    total = die1 + die2;
    if (total > 2) {
      numRolls++;
      let pEl = document.createElement("p");
      pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
      outputEl.appendChild(pEl);
    } else {
      break;
    }
  } // Add Results to output element
  let pEl = document.createElement("p");
  pEl.innerHTML = `SNAKE EYES! It took ${numRolls} rolls to get snake eyes`;
  outputEl.appendChild(pEl);
}
