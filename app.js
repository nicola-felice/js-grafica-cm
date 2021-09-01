
// input: number of cells to print
// output: print the cells in html
function printBoard(numberOfCells) {

    let board = document.getElementById("board");

    for (let i = 1; i <= numberOfCells; i++) {
        board.innerHTML += `<div class="cell">${i}</div>`;
    }
}


board.addEventListener('click', 
    function(event) {
        // check if the click is on a cell or empty space
        if ( !isNaN(event.target.innerHTML) ) {
            alert(`la casella selezionata è la numero: ${event.target.innerHTML}`);
            event.target.style.backgroundColor = "red";
        }
    }
);

let numberOfCells = parseInt(prompt('quante caselle vuoi inserire?'));

while ( isNaN(numberOfCells) ) {
    numberOfCells = parseInt(prompt('quante caselle vuoi inserire? Devi inserire un numero!!!'));
}

printBoard(numberOfCells);
