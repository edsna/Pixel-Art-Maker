// Select color input
// Select size input


// Create fields
var canvas = document.getElementById("pixelCanvas");
var color = document.getElementById("colorPicker");
var sizePicker = document.getElementById("sizePicker");
var height = document.getElementById("inputHeight");
var width = document.getElementById("inputWidth");
var toggle = document.getElementById("grid_toggle");
var save = document.getElementById("save_my_art");

// When size is submitted by the user, call makeGrid()
function makeGrid(height, width) {
    for (let h = 0; h < height; h++) {
        let row = canvas.insertRow(h);
        for (let w = 0; w < width; w++) {
            let cell = row.insertCell(w);
            cell.addEventListener("mousedown", function(evt) {
                cell.style.backgroundColor = color.value;
                cell.addEventListener("contextmenu", function(evt) {
                    evt.preventDefault();
                    cell.style.backgroundColor = "white";
                } )
            } )
        }
    }
}

// On click of submit call makeGrid()
sizePicker.addEventListener("submit", function(evt) {
    evt.preventDefault();
    while (canvas.hasChildNodes()) {
        canvas.removeChild(canvas.lastChild);
    }
    makeGrid(height.value, width.value);
});


// Set grid toggle to on or off
toggle.addEventListener("click", function() {
    var elementsTd = document.getElementsByTagName("td");
    var elementsTr = document.getElementsByTagName("tr");
    for (var i=0; i<elementsTd.length; ++i) {
        elementsTd[i].classList.toggle("off");
    }
    for (var j=0; j<elementsTr.length; ++j) {
        elementsTr[j].classList.toggle("off");
    }
});

// Save my canvas
save.addEventListener("click", function(evt) {
    evt.preventDefault();
    html2canvas(canvas).then(canvas => {
        document.body.appendChild(canvas)
    });
});