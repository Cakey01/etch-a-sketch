let size = 16;

function box(size) {
    const container = document.querySelector(".container");
    for (i = 0; i < size; i++) {
        const column = document.createElement("div");
        column.classList.add("column");
        for (j = 0; j < size; j++) {
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

function reset() {
    const button = document.querySelector("button");
    button.addEventListener("click", () => {
        let input = Number(prompt("Enter # of squares per side"));
        if (Number.isInteger(input) && input <= 100) {
            const columns = document.querySelectorAll(".column");
            columns.forEach(column => column.remove())
            box(input);
            hover(); 
        } else {
            input = prompt("Must be an integer less than 100");
        }
    })
}



box(size);
hover();
reset();