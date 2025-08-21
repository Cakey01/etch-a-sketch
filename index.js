const container = document.querySelector(".container");


function box() {
    for (i = 0; i < 16; i++ ) {
        const column = document.createElement("div");
        column.classList.add("column");
        for (j = 0; j < 16; j++) {
            const box = document.createElement("div");
            box.classList.add("box");
            column.appendChild(box);
        }
        container.appendChild(column);
    }
}

function hover() {
    const boxes = document.querySelectorAll(".box");
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    boxes.forEach(box => {
        box.addEventListener("mouseenter", () => {
            box.style.backgroundColor = "#" + randomColor;
            
        });
        box.addEventListener("mouseleave", () => {
            box.style.backgroundColor = "#" + randomColor;
            
        });
    })
    console.log("boxes");
}

box();
hover();