// Select color input
// Select size input

const sizepicker = document.querySelector("#sizePicker");
const tbl = document.querySelector("#pixelCanvas");

// When size is submitted by the user, call makeGrid()

makeGrid(5, 5);

sizepicker.addEventListener('submit', function (e) {
    e.preventDefault();
    while (tbl.hasChildNodes()) {
        tbl.removeChild(tbl.firstChild);
    }
    let width = document.querySelector("#inputWidth").value;
    let height = document.querySelector("#inputHeight").value;
    makeGrid(width, height);

});

function makeGrid(width, height) {
    for (let i = 0; i < width; i++) {
        let row = tbl.insertRow(i);
        for (let j = 0; j < height; j++) {
            let cell = row.insertCell(j);
            //set color
            cell.style.backgroundColor = "white";
            cell.addEventListener('click', function (e) {
                e.preventDefault();
                let color = document.querySelector("#colorPicker");
                cell.style.backgroundColor = color.value;

            });
        }

    }


    // Your code goes here!

}
