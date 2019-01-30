
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
    for (i = 0; i < 20; i++) {
        order.push(Math.floor(Math.random() * 4) + 1);
    } console.log(order)
    compTurn = true;
    // sets flash at an interval of .8sec using milliseconds
    intervalId = setInterval(gameTurn, 800);

};
// sets the colors back to original color
function clearColor() {
        bottomRight.style.backgroundColor = "darkblue"
        bottomLeft.style.backgroundColor = "goldenrod"
        topRight.style.backgroundColor = "darkred"
        topLeft.style.backgroundColor = "darkgreen"
}
// flashes all colors
function flashColor() {
    bottomRight.style.backgroundColor = "lightblue"
    bottomLeft.style.backgroundColor = "yellow"
    topRight.style.backgroundColor = "pink"
    topLeft.style.backgroundColor = "lightgreen"
}
// Simons turn function

function gameTurn() {
    //  on = false stops player from being able to "flash" on comps turn
    on = false;
    if (flash == turn) {
        clearInterval(intervalId)
        compTurn = false;
        clearColor();
        on = true
    }
    if (compTurn) {
        clearColor();
        // a timeout function to place a .2sec pause between flashes
        setTimeout(() => {
            if (order[flash] == 1) one();
            if (order[flash] == 2) two();
            if (order[flash] == 3) three();
            if (order[flash] == 4) four();
            flash++

        }, 200);
    }
}
// Simons way of making moves using the "noise" variable and adjacent "clip" to
// determine placement of flashes
function one() {
    if (noise) {
        let audio = document.getElementById("clip1")
        audio.play();
    }
    noise = true;
    topLeft.style.backgroundColor = "lightgreen"
}
function two() {
    if (noise) {
        let audio = document.getElementById("clip2")
        audio.play();
    }
    noise = true;
    topRight.style.backgroundColor = "pink"
}
function three() {
    if (noise) {
        let audio = document.getElementById("clip3")
        audio.play();
    }
    noise = true;
    bottomLeft.style.backgroundColor = "yellow"
}
function four() {
    if (noise) {
        let audio = document.getElementById("clip4")
        audio.play();
    }
    noise = true;
    bottomRight.style.backgroundColor = "lightblue"
}

// event listener on a "click" to allow player to click adjoining box
topLeft.addEventListener("click", (event) => {
    if (on) {
        playerOrder.push(1)
        check();
        one();
        if (!win) {
            setTimeout(function () {
                clearColor()
            }, 300);
        }
    }
})
topRight.addEventListener("click", (event) => {
    if (on) {
        playerOrder.push(2)
        check();
        two();
        if (!win) {
            setTimeout(function () {
                clearColor()
            }, 300);
        }
    }
})
bottomLeft.addEventListener("click", (event) => {
    if (on) {
        playerOrder.push(3)
        check();
        three();
        if (!win) {
            setTimeout(function () {
                clearColor()
            }, 300);
        }
    }
})
bottomRight.addEventListener("click", (event) => {
    if (on) {
        playerOrder.push(4)
        check();
        four();
        if (!win) {
            setTimeout(function () {
                clearColor()
            }, 300);
        }
    }
})
// function to check for a win and keep up with turn
function check() {
    if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1]) {
        good = false
    } if (playerOrder.length == 20 && good) {
        winGame();
    }
    if (good == false) {
        flashColor();
        turnCounter.innerHTML = "WRONG!"
        setTimeout(() => {
            turnCounter.innerHTML = turn;
            clearColor();
            if (strict){
                play();
            }else{
                compTurn = true;
                flash = 0;
                playerOrder =[];
                good = true;
                intervalId = setInterval(gameTurn,800);
            }
        }, 800);
        noise = false
    }
    if (turn == playerOrder.length && good && !win) {
        turn++;
        playerOrder = [];
        compTurn = true;
        flash = 0;
        turnCounter.innerHTML = turn;
        intervalId = setInterval(gameTurn, 800);
    }
}

function winGame() {
    flashColor();
    turnCounter.innerHTML = "WIN!"
    on = false;
    win = true;
}