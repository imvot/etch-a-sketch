const grid = document.querySelector("#grid");
let sideNb = 16;
for(let i=0; i<sideNb**2; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", event => event.target.style.backgroundColor = "black");
    square.addEventListener("mouseout", event => event.target.style.backgroundColor = "white");
    grid.appendChild(square);
}
