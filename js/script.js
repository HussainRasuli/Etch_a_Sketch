const container = document.getElementById("container");
let grid = 16;

// Generate Cells ---------------------------------------------------
function generateCells(grid) {
  for (let i = 0; i < grid * grid; i++) {
    const row = document.createElement("div");
    row.classList.add("cell");
    container.appendChild(row);
    container.style.gridTemplateColumns = `repeat(${grid}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${grid}, 1fr)`;
  }
  const squares = document.querySelectorAll(".cell");
  mouseOver(squares);
}
generateCells(grid);
//------------------------------------------------------------------

// MouseOver function for make cells Black -------------------------
function mouseOver(squares) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseover", function () {
      this.style.backgroundColor = "black";
      this.style.borderColor = "white";
    });
  }
}
//------------------------------------------------------------------

// Eraser Button ---------------------------------------------------
function eraser_btn() {
  const squares = document.querySelectorAll(".cell");
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseover", function () {
      this.style.backgroundColor = "white";
      this.style.borderColor = "rgba(68, 68, 68, 0.404)";
    });
  }
}
//------------------------------------------------------------------

// Black Button ----------------------------------------------------
function black_btn() {
  const squares = document.querySelectorAll(".cell");
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseover", function () {
      this.style.backgroundColor = "black";
      this.style.borderColor = "white";
    });
  }
}
//------------------------------------------------------------------

// Rainbow Button --------------------------------------------------
function rainbow_btn() {
  const squares = document.querySelectorAll(".cell");
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseover", function () {
      this.style.backgroundColor =
        "rgb(" +
        Math.round(Math.random() * 255) +
        "," +
        Math.round(Math.random() * 255) +
        "," +
        Math.round(Math.random() * 255) +
        ")";
    });
  }
}
//-------------------------------------------------------------------

// Reset Button and Prompt-------------------------------------------
function reset_btn() {
  let grid = prompt(
    "How many grid squares per side would you to like?\n(Minimum is 2 and Maximum is 100)",
    "10"
  );

  // validation of prompt number
  const minNumberOfPrompts = 2;
  const maxNumberOfPrompts = 100;
  if (isNaN(grid)) {
    alert("Invalid input. Please enter a number.");
    return false;
  }
  if (grid < minNumberOfPrompts || grid > maxNumberOfPrompts) {
    alert(
      "Invalid number of prompts. The number of prompts must be between 2 and 100."
    );
    return false;
  }

  // Remove event listeners from old elements
  const oldSquares = document.querySelectorAll(".cell");
  oldSquares.forEach((square) => {
    square.removeEventListener("mouseover", handleMouseOver);
  });

  for (let i = 0; i < oldSquares.length; i++) {
    oldSquares[i].style.backgroundColor = "white";
  }

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  generateCells(grid);
}

// event handler function for all buttons -----------------------
function handleMouseOver(event) {
  event.target.style.backgroundColor = "black";
  event.target.style.borderColor = "white";
}

