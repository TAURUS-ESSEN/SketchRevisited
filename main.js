'use strict';

const boardContainer = document.getElementById("board");
const boardGridButton = document.getElementById("tumbler_grid");
const boardGridTumbler = document.getElementById("tumbler1__img");
const colorPickersForm = document.getElementById("colorPickersForm");
const radiobuttons = document.querySelectorAll('input[type="radio"]');
let pointer = "black";

createBoardCell(); 

function createBoardCell(divs = 8) {
    for (let i=1; i<=divs; i++) {
        const string = document.createElement("div");
        string.classList.add("cellString");
        boardContainer.appendChild(string);
        for (let j=1; j<=divs; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell",  "cellOn");
            string.appendChild(cell);
        }
    }
    drawBoard() 
}
function drawBoard() {
    const cells = document.querySelectorAll(".cell");
    let isMouseDown = false;

    boardContainer.addEventListener("mousedown", (e) => {
        if (e.button === 0) isMouseDown = true;
    });

    document.addEventListener("mouseup", () => {
        isMouseDown = false;
    });

    function paint(cell) {
        if (typeof pointer === "function") {
            cell.style.backgroundColor = pointer();
        } else if (pointer.slice(0, 3) === "rgb") {
            let currentOpacity = Number(cell.style.backgroundColor.slice(-4, -1)) + 0.1;
            cell.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity})`;
        } else {
            cell.style.backgroundColor = pointer;
        }
    }

    cells.forEach(cell => {
        cell.addEventListener("mousedown", (e) => {
            if (e.button === 0) paint(cell);
        });

        cell.addEventListener("mousemove", () => {
            if (isMouseDown) paint(cell);
        });
    });
}

boardGridButton.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.classList.toggle("cellOn"));
    boardGridTumbler.classList.toggle("tumbler-rotate")
})

radiobuttons.forEach(radiobutton => {
    radiobutton.addEventListener("change", () => {
        if (radiobutton.checked) {
            switch (radiobutton.value) { 
                case "black": 
                pointer = "black";
                break; 
                case "multicolor": 
                pointer = multicolor;
                break; 
                case "progressive": 
                pointer = "rgba(0, 0, 0, 0.1)"
                break; 
                case "eraser": 
                pointer = eraser();
                break; 
            }
        }
    })
})

function multicolor() {
    const r = Math.floor(Math.random() * 128 + 127);
    const g = Math.floor(Math.random() * 128 + 127);
    const b = Math.floor(Math.random() * 128 + 127);
    let  colorPicker  = "rgb(" + r + ", " + g + ", " + b + ")"; 
    return colorPicker 
}

function progressive() {
    let  colorPicker  = "rgba(0, 0, 0, 0.1)"; 
    return colorPicker 
}

function eraser() {
    let colorPicker = '';
    return colorPicker
}

const slider = document.getElementById("slider");
slider.addEventListener("input", () => {
    boardContainer.textContent = '';
    createBoardCell(slider.value)
});