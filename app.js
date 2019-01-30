
let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let strict = false;
let noise = true;
let on = false;
let win;

const turnCounter = document.querySelector("#turn");
const topLeft = document.querySelector("#topleft");
const topRight = document.querySelector("#topright");
const bottomLeft = document.querySelector("#bottomleft");
const bottomRight = document.querySelector("#bottomright");
const strictButton = document.querySelector("#strict");
const onButton = document.querySelector("#on");
const startButton = document.querySelector("#start");

let pieceOne = document.querySelectorAll(".pieceOne");
let pieceTwo = document.querySelectorAll(".pieceTwo");
let pieceThree = document.querySelectorAll(".pieceThree");
let pieceFour = document.querySelectorAll(".pieceFour");

// functions for flashing pieces. lines 29-77
pieceOne.forEach((piece) => {
    piece.addEventListener("click", clickedOne);
    console.log("clicked!")
});

function clickedOne(e) {
    if (topLeft.style.backgroundColor = "darkgreen") {

        topLeft.style.backgroundColor = "lightgreen"
    }

}

pieceTwo.forEach(function (piece) {
    piece.addEventListener("click", clickedTwo);
    console.log("clicked!")
});

function clickedTwo(e) {
    if (topRight.style.backgroundColor = "darkred") {

        topRight.style.backgroundColor = "pink"
    }
}


pieceThree.forEach(function (piece) {
    piece.addEventListener("click", clickedThree);
    console.log("clicked!")
});

function clickedThree(e) {
    if (bottomLeft.style.backgroundColor = "goldenrod") {

        bottomLeft.style.backgroundColor = "yellow"
    }
}

pieceFour.forEach(function (piece) {
    piece.addEventListener("click", clickedFour);
    console.log("clicked!")
});

function clickedFour(e) {
    if (bottomRight.style.backgroundColor = "darkblue") {

        bottomRight.style.backgroundColor = "lightblue"
    }
}
// power button and turn count
onButton.addEventListener("click", (event) => {
    if (onButton.checked == true) {
        on = true;
        turnCounter.innerHTML = "-";
    } else {
        on = false;
        turnCounter.innerHTML = "";
        clearColor();
        clearInterval(intervalId);
    }

});

startButton.addEventListener('click', (event) => {
    if (on || win) {
        play();
    }
});


function play() {
    win = false;
    order = [];
    playerOrder = [];
    flash = 0;
    turn = 1
    turnCounter.innerHTML = 1;
    good = true;
     arr = [];
    for (i = 0; i < 4; i++) {
        order.push(Math.floor(Math.random() * 4) + 1);
     }for (j = 0; j < 1; j++){
        
         order = order+(j)
    } 
    console.log(order)

};
// sets the colors back to original color
function clearColor() {
    if (bottomRight.style.backgroundColor = "lightblue") {

        bottomRight.style.backgroundColor = "darkblue"
    }
    if (bottomLeft.style.backgroundColor = "yellow") {

        bottomLeft.style.backgroundColor = "goldenrod"
    }
    if (topRight.style.backgroundColor = "pink") {

        topRight.style.backgroundColor = "darkred"
    }
    if (topLeft.style.backgroundColor = "lightgreen") {

        topLeft.style.backgroundColor = "darkgreen"
    }
}

