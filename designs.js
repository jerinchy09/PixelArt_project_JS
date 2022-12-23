// Select color input
// Select size input

const sizepicker = document.querySelector("#sizePicker");
const tbl = document.querySelector("#pixelCanvas");
let width = document.querySelector("#inputWidth");
let height = document.querySelector("#inputHeight");
// When size is submitted by the user, call makeGrid()

makeGrid(5, 5);

sizepicker.addEventListener('submit', function (e) {
    e.preventDefault();
    while (tbl.hasChildNodes()) {
        tbl.removeChild(tbl.firstChild);
    }
    let w = width.value;
    let h = height.value;
    makeGrid(w, h);

});
/**
  * @desc create a grid of squares 
  * @param int $width - number of squares representing the width of the grid
  * @param int $height - number of squares representing the height of the grid
  * this function will have two parameters passed when this function will be called
  * first loop will be used to set the required height
  * the second loop will be used for corresponding cells till the required width  
  * set the background color of the cell white
  * event listener function will color the cells getting the color value from colorpicker 
  * id in DOM for each click
  *  
*/

function makeGrid(w, h) {
    for (let i = 0; i < h; i++) {
        let row = tbl.insertRow(i);
        for (let j = 0; j < w; j++) {
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

}
