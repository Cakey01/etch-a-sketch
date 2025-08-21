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

box();