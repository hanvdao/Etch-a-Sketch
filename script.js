const changeSizeButton = document.querySelector(".change-size-btn");
changeSizeButton.addEventListener("click", changeSize);

function changeSize(event) {
  const size = prompt("Enter your grid size: ");
  if (size <= 0 || size >= 100) {
    alert("Please enter grid size between 1 to 100");
    return;
  }
  clearGrid();
  createGrid(size);
}

const gridContainer = document.querySelector(".grid-container");

const colors = [
  "392F5A",
  "F092DD",
  "FFAFF0",
  "EEC8E0",
  "A8C7BB",
  "D72638",
  "3F88C5",
  "F49D37",
  "140F2D",
  "07BEB8",
  "29339B",
  "74A4BC",
  "B6D6CC",
  "F1FEC6",
  "DBD3AD",
  "E0607E",
  "D36060",
  "C2714F",
  "F6C5AF",
];

function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridContainer.appendChild(gridItem);
  }
  setGridSize(size);
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => item.addEventListener("mouseover", changeColor));
}

function setGridSize(size) {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

function changeColor(event) {
  event.target.style.backgroundColor = `#${randomColor()}`;
}

function randomColor() {
  let randomInt = Math.floor(Math.random() * colors.length);
  return colors[randomInt];
}

function clearGrid() {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => gridContainer.removeChild(item));
}

createGrid(16);
