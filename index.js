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
    boxes.forEach(box => {
        box.addEventListener("mouseover", () => {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            box.style.backgroundColor = "#" + randomColor;
            let compStyles = window.getComputedStyle(box);        
            let opacity = Number(compStyles.getPropertyValue("opacity"));
            if (opacity < 1) {
                box.style.opacity = opacity + 0.1;
            }
        });
    });
}

box();
hover();