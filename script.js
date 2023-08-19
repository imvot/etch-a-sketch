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
        square.addEventListener("mouseover", event => event.target.style.backgroundColor = getDarkenColor(getComputedStyle(event.target).backgroundColor));
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

function rgbStringToArray(rgbString) {
    return rgbString
        .slice(4, -1)
        .split(",")
        .map(color => +color);
}

function getDarkenColor(rgbString) {
    let [red, blue, green] = rgbStringToArray(rgbString);
    red -= red - 25.5 < 0 ? 0 : 25.5;
    blue -= blue - 25.5 < 0 ? 0 : 25.5;
    green -= green - 25.5 < 0 ? 0 : 25.5;
    return `rgb(${red}, ${blue}, ${green})`;
}

generateGrid(16)

