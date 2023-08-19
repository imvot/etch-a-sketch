const grid = document.querySelector("#grid");
let sideNb = 16;
for(let i=0; i<sideNb**2; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    grid.appendChild(square);
}
