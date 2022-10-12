// GAME VARIABLES AND CONSTANTS
let frames = 0;
let count = 0;
let time = 0;
let pos = 130;
let turbo = 0;
let run = 0;
let score = 0;
let direction = 1;
let d1, d2, d3, d4, d5, v, po, t = 0;

// GHOST OBJECTS
const Ghost_1 = {
    po9: 414,
    v: 1
}
const Ghost_2 = {
    po9: 426,
    v: 1
}
const Ghost_3 = {
    po9: 739,
    v: 1
}
const Ghost_4 = {
    po9: 140,
    v: 1
}
const Ghost_5 = {
    po9: 120,
    v: 1
}


// AUDIO
var startMusic = new Audio("audio/game_start.wav");
var eat_ghost = new Audio("audio/eat_ghost.wav");
var munch = new Audio("audio/munch.wav");
var death = new Audio("audio/death.wav");
var pill = new Audio("audio/pill.wav");
window.onload = function () {
    startMusic.play();
}
// MAP DESIGN (29 X 30)
const squares = [];
const coordinates = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, -2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -2, 1, 1,
    1, 1, 0, 1, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2, 0, 1, 1, 1, 0, 2, 2, 0, 1, 1, 1, 1, 0, 1, 1,
    1, 1, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 2, 0, 1, 0, 0, 0, 0, 1, 1,
    1, 1, 1, 1, 1, 0, 1, 0, 2, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 0, 1, 0, 2, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 2, 2, 0, 1, 0, 1, 1, 1, 1, 1,
    1, 1, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 2, 2, 0, 1, 0, 0, 0, 0, 1, 1,
    1, 1, 0, 1, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2, 0, 1, 0, 1, 0, 2, 2, 0, 1, 1, 1, 1, 0, 1, 1,
    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 1, 0, 2, 2, 0, 0, 0, 0, 0, 0, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 2, 0, 1, 0, 1, 0, 2, 2, 0, 1, 1, 1, 1, 1, 1, 1,
    -1, -1, -1, -1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 2, 0, 1, 0, 1, 0, 2, 2, 0, 1, 1, 1, -1, -1, -1, -1,
    -1, -1, -1, -1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 2, 2, 0, 1, 1, 1, -1, -1, -1, -1,
    1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2, 0, 1, 1, 1, 0, 2, 2, 0, 1, 1, 1, 1, 1, 1, 1,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1,
    1, 1, 1, 0, 2, 0, 1, 0, 1, 0, 2, -1, 2, 7, 7, 7, 7, 2, -1, 2, 2, 2, 2, 2, 2, 0, 1, 1, 1,
    1, 1, 1, 0, 2, 0, 1, 0, 1, 0, 0, -1, 2, -1, -1, -1, -1, 2, -1, 2, 0, 0, 0, 0, 0, 0, 1, 1, 1,
    -1, -1, 1, 0, 2, 0, 1, 0, 1, 0, 2, -1, 2, -1, -1, -1, -1, 2, -1, 2, 1, 1, 1, 1, 1, 0, 1, -1, -1,
    -1, -1, 1, 0, 2, 0, 1, 0, 0, 0, 2, -1, 2, 3, -1, -1, 4, 2, -1, 2, 2, 2, 2, 2, 1, 0, 1, -1, -1,
    -1, -1, 1, 0, 2, 0, 1, 1, 1, 0, 2, -1, 5, 2, 3, 4, 2, 6, -1, 2, 1, 1, 1, 1, 1, 0, 1, -1, -1,
    -1, -1, 1, 0, 2, 0, 0, 0, 0, 0, 2, -1, 1, 5, 2, 2, 6, 1, -1, 2, 0, 0, 0, 0, 0, 0, 1, -1, -1,
    -1, -1, 1, 0, 2, 2, 2, 2, 2, 0, 2, -1, 1, 1, 5, 6, 1, 1, -1, 2, 2, 2, 2, 2, 2, 0, 1, -1, -1,
    -1, -1, 1, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 1, -1, -1,
    1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,
    1, 1, -2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -2, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
]

// INITIAL MAP
function drawMap() {
    const map = document.getElementById('map');
    for (let i = 0; i < coordinates.length; i++) {
        const square = document.createElement('div');
        squares.push(square);

        if (coordinates[i] === 1) {
            square.classList.add('walls');
        }
        else if (coordinates[i] === 2) {
            square.classList.add('si');
        }
        else if (coordinates[i] === 3) {
            square.classList.add('three');
        }
        else if (coordinates[i] === 4) {
            square.classList.add('four');
        }
        else if (coordinates[i] === 5) {
            square.classList.add('five');
        }
        else if (coordinates[i] === 6) {
            square.classList.add('six');
        }
        else if (coordinates[i] === 7) {
            square.classList.add('jail');
        }
        else if (coordinates[i] === 0) {
            square.classList.add('food');
        }
        else if (coordinates[i] === -2) {
            square.classList.add('power-pellet');
        }
        else {
            square.classList.add('blank');
        }
        map.appendChild(square);
    }
}

// FOOD ANIMATION
function food() {
    const foods = document.querySelectorAll('.food,.food2');
    foods.forEach(element => {
        if (frames % 60 == 59) {
            element.className = "";
            element.className = "food";
        }
        else if (frames % 60 == 30) {
            element.className = "";
            element.className = "food2";
        }
    });
}

// PACMAN
function pacman() {
    const square = squares[pos];
    if (frames % 10 == 0 || frames % 12 == 0) {
        square.className = "";
        square.classList.add("pacman");
    }
    else {
        if (direction == 1) {
            square.className = "";
            square.classList.add("pacman-up");
        }
        else if (direction == 2) {
            square.className = "";
            square.classList.add("pacman-right");
        }
        else if (direction == 3) {
            square.className = "";
            square.classList.add("pacman-down");
        }
        else if (direction == 4) {
            square.className = "";
            square.classList.add("pacman-left");
        }
    }

    // square.className = "";
    // square.classList.add("pacman-right");
}

// SCORE COUNT
function scoreCount() {
    const scoreDisplay = document.getElementById("score");
    if (squares[pos].classList.contains("food") || squares[pos].classList.contains("food2")) score += 10;
    else if (squares[pos].classList.contains("power-pellet")) score += 200;
    scoreDisplay.innerHTML = "SCORE:" + score;
}

// TIME COUNT
function timecount() {
    if (frames % 60 == 0)
        time++;
    const timeDisplay = document.getElementById("time");
    timeDisplay.innerHTML = " TIME: " + time + " sec";
}

// PACMAN MOVEMENT
function updatePacman() {
    // TURBO MODE
    {
        document.body.onkeydown = function (e) {
            if (turbo == 1 && run == 1) {
                if (e.key == "ArrowLeft") {
                    if (pos == 406) {
                        squares[pos].className = "";
                        squares[pos].classList.add("blank");
                        pos = 434;
                        console.log("yes");
                        scoreCount();
                        power_pellet();
                        munch.play();
                    }
                    else if (coordinates[pos - 1] == 0 || coordinates[pos - 1] == -2 || coordinates[pos - 1] == -1) {
                        squares[pos].className = "";
                        squares[pos].classList.add("blank");
                        pos--;
                        scoreCount();
                        power_pellet();
                        munch.play();
                    }
                    direction = 4;
                }
                else if (e.key == "ArrowRight") {
                    if (pos == 434) {
                        squares[pos].className = "";
                        squares[pos].classList.add("blank");
                        pos = 406;
                        scoreCount();
                        power_pellet();
                        munch.play();
                    }
                    else if (coordinates[pos + 1] == 0 || coordinates[pos + 1] == -2 || coordinates[pos + 1] == -1) {
                        squares[pos].className = "";
                        squares[pos].classList.add("blank");
                        pos++;
                        scoreCount();
                        power_pellet();
                        munch.play();
                    }
                    direction = 2;
                }
                else if (e.key == "ArrowUp") {
                    if (coordinates[pos - 29] == 0 || coordinates[pos - 29] == -2 || coordinates[pos - 29] == -1) {
                        squares[pos].className = "";
                        squares[pos].classList.add("blank");
                        pos = pos - 29;
                        scoreCount();
                        power_pellet();
                        munch.play();
                    }
                    direction = 1;
                }
                else if (e.key == "ArrowDown") {
                    if (coordinates[pos + 29] == 0 || coordinates[pos + 29] == -2 || coordinates[pos + 29] == -1) {
                        squares[pos].className = "";
                        squares[pos].classList.add("blank");
                        pos = pos + 29;
                        scoreCount();
                        power_pellet();
                        munch.play();
                    }
                    direction = 3;
                }
            }
        }
    }
    // NORMAL MODE
    {
        document.body.onkeyup = function (e) {
            if (turbo == 0 && run == 1) {
                if (e.key == "ArrowLeft") {
                    if (pos == 406) {
                        squares[pos].className = "";
                        squares[pos].classList.add("blank");
                        pos = 434;
                        scoreCount();
                        power_pellet();
                        munch.play();
                    }
                    else if (coordinates[pos - 1] == 0 || coordinates[pos - 1] == -2 || coordinates[pos - 1] == -1) {
                        squares[pos].className = "";
                        squares[pos].classList.add("blank");
                        pos--;
                        scoreCount();
                        power_pellet();
                        munch.play();
                    }
                    direction = 4;
                }
                else if (e.key == "ArrowRight") {
                    if (pos == 434) {
                        squares[pos].className = "";
                        squares[pos].classList.add("blank");
                        pos = 406;
                        scoreCount();
                        power_pellet();
                        munch.play();
                    }
                    else if (coordinates[pos + 1] == 0 || coordinates[pos + 1] == -2 || coordinates[pos + 1] == -1) {
                        squares[pos].className = "";
                        squares[pos].classList.add("blank");
                        pos++;
                        scoreCount();
                        power_pellet();
                        munch.play();
                    }
                    direction = 2;
                }
                else if (e.key == "ArrowUp") {
                    if (coordinates[pos - 29] == 0 || coordinates[pos - 29] == -2 || coordinates[pos - 29] == -1) {
                        squares[pos].className = "";
                        squares[pos].classList.add("blank");
                        pos = pos - 29;
                        scoreCount();
                        power_pellet();
                        munch.play();
                    }
                    direction = 1;
                }
                else if (e.key == "ArrowDown") {
                    if (coordinates[pos + 29] == 0 || coordinates[pos + 29] == -2 || coordinates[pos + 29] == -1) {
                        squares[pos].className = "";
                        squares[pos].classList.add("blank");
                        pos = pos + 29;
                        scoreCount();
                        power_pellet();
                        munch.play();
                    }
                    direction = 3;
                }
            }
        }
    }
}

//GHOST
function ghost1() {
    const square = squares[Ghost_1.po9];
    square.className = "";
    square.classList.add("ghost1");
}

function ghost2() {
    const square = squares[Ghost_2.po9];
    square.className = "";
    square.classList.add("ghost2");
}

function ghost3() {
    const square = squares[Ghost_3.po9];
    square.className = "";
    square.classList.add("ghost3");
}

function ghost4() {
    const square = squares[Ghost_4.po9];
    square.className = "";
    square.classList.add("ghost4");
}

function ghost5() {
    const square = squares[Ghost_5.po9];
    square.className = "";
    square.classList.add("ghost5");
}
function moveright(Ghost1) {
    if (frames % 6 == 0) {
        if (coordinates[Ghost1.po9 + 1] == 1 || coordinates[Ghost1.po9 + 1] == 2) { }
        else if (Ghost1.po9 == 433) {
            if (squares[Ghost1.po9 + 1].classList.contains("blank")) {
                if (Ghost1.v == 0) {
                    Ghost1.po9 = 406;
                    squares[433].className = "";
                    squares[433].className = "blank";
                    Ghost1.v = 0;
                }
                else {
                    Ghost1.po9 = 406;
                    squares[433].className = "";
                    squares[433].className = "food";
                    Ghost1.v = 0;
                }
            }
            else {
                if (Ghost1.v == 0) {
                    Ghost1.po9 = 406;
                    squares[433].className = "";
                    squares[433].className = "blank";
                    Ghost1.v = 1;
                }
                else {
                    Ghost1.po9 = 406;
                    squares[433].className = "";
                    squares[433].className = "food";
                    Ghost1.v = 1;
                }
            }
        }
        else {
            if (squares[Ghost1.po9 + 1].classList.contains("blank")) {
                if (Ghost1.v == 0) {
                    Ghost1.po9++;
                    squares[Ghost1.po9 - 1].className = "";
                    squares[Ghost1.po9 - 1].className = "blank";
                    Ghost1.v = 0;
                }
                else {
                    Ghost1.po9++;
                    squares[Ghost1.po9 - 1].className = "";
                    squares[Ghost1.po9 - 1].className = "food";
                    Ghost1.v = 0;
                }
            }
            else if (coordinates[Ghost1.po9 + 1] == 0) {
                if (Ghost1.v == 0) {
                    Ghost1.po9++;
                    squares[Ghost1.po9 - 1].className = "";
                    squares[Ghost1.po9 - 1].className = "blank";
                    Ghost1.v = 1;
                }
                else {
                    Ghost1.po9++;
                    squares[Ghost1.po9 - 1].className = "";
                    squares[Ghost1.po9 - 1].className = "food";
                    Ghost1.v = 1;
                }
            }
        }
    }
}
function moveleft(Ghost1) {
    if (frames % 6 == 0) {
        if (coordinates[Ghost1.po9 - 1] == 1 || coordinates[Ghost1.po9 - 1] == 2) { }
        else if (Ghost1.po9 == 407) {
            if (squares[Ghost1.po9 - 1].classList.contains("blank")) {
                if (Ghost1.v == 0) {
                    Ghost1.po9 = 433;
                    squares[407].className = "";
                    squares[407].className = "blank";
                    Ghost1.v = 0;
                }
                else {
                    Ghost1.po9 = 433;
                    squares[407].className = "";
                    squares[407].className = "food";
                    Ghost1.v = 0;
                }
            }
            else {
                if (Ghost1.v == 0) {
                    Ghost1.po9 = 433;
                    squares[407].className = "";
                    squares[407].className = "blank";
                    Ghost1.v = 1;
                }
                else {
                    Ghost1.po9 = 432;
                    squares[407].className = "";
                    squares[407].className = "food";
                    Ghost1.v = 1;
                }
            }
        }
        else {
            if (squares[Ghost1.po9 - 1].classList.contains("blank")) {
                if (Ghost1.v == 0) {
                    Ghost1.po9--;
                    squares[Ghost1.po9 + 1].className = "";
                    squares[Ghost1.po9 + 1].className = "blank";
                    Ghost1.v = 0;
                }
                else {
                    Ghost1.po9--;
                    squares[Ghost1.po9 + 1].className = "";
                    squares[Ghost1.po9 + 1].className = "food";
                    Ghost1.v = 0;
                }
            }
            else if (coordinates[Ghost1.po9 - 1] == 0) {
                if (Ghost1.v == 0) {
                    Ghost1.po9--;
                    squares[Ghost1.po9 + 1].className = "";
                    squares[Ghost1.po9 + 1].className = "blank";
                    Ghost1.v = 1;
                }
                else {
                    Ghost1.po9--;
                    squares[Ghost1.po9 + 1].className = "";
                    squares[Ghost1.po9 + 1].className = "food";
                    Ghost1.v = 1;
                }
            }
        }
    }
}
function moveup(Ghost1) {
    if (frames % 6 == 0) {
        if (coordinates[Ghost1.po9 - 29] == 1 || coordinates[Ghost1.po9 - 29] == 2) { }
        else {
            if (squares[Ghost1.po9 - 29].classList.contains("blank")) {
                if (Ghost1.v == 0) {
                    Ghost1.po9 -= 29;
                    squares[Ghost1.po9 + 29].className = "";
                    squares[Ghost1.po9 + 29].className = "blank";
                    Ghost1.v = 0;
                }
                else {
                    Ghost1.po9 -= 29;
                    squares[Ghost1.po9 + 29].className = "";
                    squares[Ghost1.po9 + 29].className = "food";
                    Ghost1.v = 0;
                }
            }
            else if (coordinates[Ghost1.po9 - 29] == 0) {
                if (Ghost1.v == 0) {
                    Ghost1.po9 -= 29;
                    squares[Ghost1.po9 + 29].className = "";
                    squares[Ghost1.po9 + 29].className = "blank";
                    Ghost1.v = 1;
                }
                else {
                    Ghost1.po9 -= 29;
                    squares[Ghost1.po9 + 29].className = "";
                    squares[Ghost1.po9 + 29].className = "food";
                    Ghost1.v = 1;
                }
            }
        }
    }
}

function movedown(Ghost1) {
    if (frames % 6 == 0) {
        if (coordinates[Ghost1.po9 + 29] == 1 || coordinates[Ghost1.po9 + 29] == 2) { }
        else {
            if (squares[Ghost1.po9 + 29].classList.contains("blank")) {
                if (Ghost1.v == 0) {
                    Ghost1.po9 += 29;
                    squares[Ghost1.po9 - 29].className = "";
                    squares[Ghost1.po9 - 29].className = "blank";
                    Ghost1.v = 0;
                }
                else {
                    Ghost1.po9 += 29;
                    squares[Ghost1.po9 - 29].className = "";
                    squares[Ghost1.po9 - 29].className = "food";
                    Ghost1.v = 0;
                }
            }
            else if (coordinates[Ghost1.po9 + 29] == 0) {
                if (Ghost1.v == 0) {
                    Ghost1.po9 += 29;
                    squares[Ghost1.po9 - 29].className = "";
                    squares[Ghost1.po9 - 29].className = "blank";
                    Ghost1.v = 1;
                }
                else {
                    Ghost1.po9 += 29;
                    squares[Ghost1.po9 - 29].className = "";
                    squares[Ghost1.po9 - 29].className = "food";
                    Ghost1.v = 1;
                }
            }
        }
    }
}
function updateghost1() {
    if (d1 < 0.25) {
        moveright(Ghost_1);
    }
    else if (d1 < 0.5) {
        moveleft(Ghost_1);
    }
    else if (d1 < 0.75) {
        moveup(Ghost_1);
    }
    else if (d1 < 1) {
        movedown(Ghost_1);
    }
}
function updateghost2() {
    if (d2 < 0.25) {
        moveright(Ghost_2);
    }
    else if (d2 < 0.5) {
        moveleft(Ghost_2);
    }
    else if (d2 < 0.75) {
        moveup(Ghost_2);
    }
    else if (d2 < 1) {
        movedown(Ghost_2);
    }
}
function updateghost3() {
    if (d3 < 0.25) {
        moveright(Ghost_3);
    }
    else if (d3 < 0.5) {
        moveleft(Ghost_3);
    }
    else if (d3 < 0.75) {
        moveup(Ghost_3);
    }
    else if (d3 < 1) {
        movedown(Ghost_3);
    }
}
function updateghost4() {
    if (d4 < 0.25) {
        moveright(Ghost_4);
    }
    else if (d4 < 0.5) {
        moveleft(Ghost_4);
    }
    else if (d4 < 0.75) {
        moveup(Ghost_4);
    }
    else if (d4 < 1) {
        movedown(Ghost_4);
    }
}
function updateghost5() {
    if (d5 < 0.25) {
        moveright(Ghost_5);
    }
    else if (d5 < 0.5) {
        moveleft(Ghost_5);
    }
    else if (d5 < 0.75) {
        moveup(Ghost_5);
    }
    else if (d5 < 1) {
        movedown(Ghost_5);
    }
}

//POWER - PELLET
function power_pellet() {
    if (squares[pos].classList.contains("power-pellet")) {
        pill.play();
        t = 1;
        count = 0;
    }
}


// GAME STATES
const btn = document.getElementById("play");
function begin() {
    btn.onclick = function () {
        if (btn.innerHTML == "RESUME") {
            btn.innerHTML = "PAUSE";
            run = 1;
            // window.requestAnimationFrame(loop);
        }
        else if (btn.innerHTML == "PAUSE") {
            btn.innerHTML = "RESUME";
            run = 0;
            // window.cancelAnimationFrame(loop);
        }
        else {
            btn.innerHTML = "PAUSE"
            run = 1;
            // window.requestAnimationFrame(loop);
        }
    }
    if (run == 1) loop();
}

// GAME MODES
function gameModes() {
    document.getElementById("turbo").onclick = function () {
        turbo = 1;
    }
    document.getElementById("normal").onclick = function () {
        turbo = 0;
    }

}

// CHECK WIN
function checkWin() {
    if (score == 3620) {
        run = 0;
        btn.disabled = true;
        alert("YOU WON!!");
    }
}

// FUNCTION CALLING AND CONTIONS

drawMap();
function loop() {
    if (Ghost_1.po9 == pos || Ghost_2.po9 == pos || Ghost_3.po9 == pos || Ghost_4.po9 == pos || Ghost_5.po9 == pos) {
        if (t == 0) {
            death.play();
            run = 0;
            btn.disabled = true;
            alert("GAME OVER!!");
        }
        else {
            eat_ghost.play();
        }

    }

    else {
        if (t == 0) {
            ghost1();
            ghost2();
            ghost3();
            ghost4();
            ghost5();
            updateghost1();
            updateghost2();
            updateghost3();
            updateghost4();
            updateghost5();
            d1 = Math.random();
            d2 = Math.random();
            d3 = Math.random();
            d4 = Math.random();
            d5 = Math.random();
        }
        else {
            count++;
            if (count % 300 == 0)
                t = 0;
        }
    }
    console.log(turbo);
    frames++;
    food();
    updatePacman();
    pacman();
    gameModes();
    checkWin();
    // play();
    timecount();
    // window.requestAnimationFrame(loop);
}

function outerLoop() {
    begin();
    window.requestAnimationFrame(outerLoop);
}
outerLoop();
// loop();