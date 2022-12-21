// Select color input
// Select size input

//console.log("w=" + width);
// When size is submitted by the user, call makeGrid()
function appendRow() {
    var tbl = document.getElementById('my-table'), // table reference
        row = tbl.insertRow(tbl.rows.length),      // append table row
        i;
    // insert table cells to the new row
    for (i = 0; i < tbl.rows[0].cells.length; i++) {
        createCell(row.insertCell(i), i, 'row');
    }
}

// create DIV element and append to the table cell
function createCell() {
    var div = document.createElement('div'), // create DIV element
        txt = document.createTextNode(text); // create text node
    div.appendChild(txt);                    // append text node to the DIV
    div.setAttribute('class', style);        // set DIV class attribute
    div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
    cell.appendChild(div);                   // append DIV to the table cell
}


function makeGrid(cell, text, style) {
    let height = document.querySelector("#inputHeight").value;

    let width = document.querySelector("#inputWidth").value;
    let tbl = document.querySelector('#pixelCanvas');
    let row = document.querySelector('._N_');
    let col = document.querySelector('._M_');

    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            let r = 0;
            r += tbl.append(row[j]);
        }
        let c = 0;
        c += tbl.append(col[i]);






    }



    // Your code goes here!


}
