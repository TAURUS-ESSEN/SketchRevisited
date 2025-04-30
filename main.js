'use strict';

const boardContainer = document.getElementById("board");
console.log(board);

createBoardCell(28); 

function createBoardCell(divs = 16) {
    for (let i=1; i<=divs; i++) {
        const string = document.createElement("div");
        string.classList.add("cellString");
        boardContainer.appendChild(string);
        for (let j=1; j<=divs; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            string.appendChild(cell);
        }
    }
}