const grid = document.querySelector("#grid");
const GRID_SIZE = 960;

function generateSquares(nbSquares, squareSize) {
    for(let i=0; i<nbSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.addEventListener("mouseover", event => event.target.style.backgroundColor = "black");
        square.addEventListener("mouseout", event => event.target.style.backgroundColor = "white");
        grid.appendChild(square);
    }
}

function generateGrid(nbSideSquares) {
    nbSideSquares = nbSideSquares > 100 ? 100 : nbSideSquares
    removeChilds(grid)
    const squareSize = GRID_SIZE / nbSideSquares
    generateSquares(nbSideSquares**2, squareSize)
}

function removeChilds(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

generateGrid(16)

