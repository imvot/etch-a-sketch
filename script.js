const GRID_SIZE = 960;
const grid = document.querySelector("#grid");
const btn = document.querySelector("#prompt-btn")
btn.addEventListener("click", () => generateGrid(getUserGridSize()));

function generateSquares(nbSquares, squareSize) {
    for(let i=0; i<nbSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.addEventListener("mouseover", event => event.target.style.backgroundColor = getRandomRGB());
        square.addEventListener("mouseout", event => event.target.style.backgroundColor = "white");
        grid.appendChild(square);
    }
}

function generateGrid(nbSideSquares) {
    removeChilds(grid)
    const squareSize = GRID_SIZE / nbSideSquares
    generateSquares(nbSideSquares**2, squareSize)
}

function removeChilds(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function getUserGridSize() {
    const answer = prompt("Grid Side Size");
    return +answer > 100 ? 100 : +answer
}

function getRandomRGB() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}

generateGrid(16)

