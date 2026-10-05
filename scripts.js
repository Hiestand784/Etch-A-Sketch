const body = document.body;
const gridContainer = document.querySelector("#grid-container");
const gridSizeValue = document.querySelector("#value");
const gridSizeInput = document.querySelector("#gridSizeInput");
const remakeGridButton = document.querySelector("#resetGrid");
const clearGridButton = document.querySelector("#clear");
const colorPicker = document.getElementById("colorPicker");
const eraseButton = document.querySelector("#erase");
const drawButton = document.querySelector("#draw");

gridSizeValue.textContent = gridSizeInput.value;
gridSizeInput.addEventListener("input", (event) => {
    gridSizeValue.textContent = event.target.value;
});

// Draw functionality //
let isDrawing = false;

window.addEventListener("mousedown", () => {
    isDrawing = true;
});

window.addEventListener("mouseup", () => {
    isDrawing = false;
});

// New grid //
function makeGrid(size) {
    gridContainer.innerHTML = "";
    for (let x = 0; x < size; x++) {
        var row = document.createElement("div");
        row.className = "row";

        for (let y = 0; y < size; y++) {
            var column = document.createElement("div");
            column.className = "column";
            column.addEventListener("dragstart", (e) => e.preventDefault());
            column.addEventListener("mousedown", (event) => {
                event.target.style.backgroundColor = newColor;
            });
            column.addEventListener("mouseenter", (event) => {
                if (isDrawing) {
                    event.target.style.backgroundColor = newColor;
                }
            });
            row.append(column);
        }
        gridContainer.append(row);
    }
}

// Initialize grid //
makeGrid(gridSizeInput.value);

//Update grid //
remakeGridButton.addEventListener("click", () => {
    makeGrid(gridSizeInput.value);
});

clearGridButton.addEventListener("click", () => {
    makeGrid(gridSizeInput.value);
});

// Color storage //
let newColor = "black";
let savedColor = "black";

// Update color//
colorPicker.addEventListener("input", (event) => {
    newColor = event.target.value;
    savedColor = event.target.value;
});


// Set default erase color //
let eraseColor = "white";

eraseButton.addEventListener("click", () => {
    newColor = "white";
    colorPicker.value = "#ffffff"
});

drawButton.addEventListener("click", () => {
    newColor = savedColor;
    colorPicker.value = savedColor;
});
