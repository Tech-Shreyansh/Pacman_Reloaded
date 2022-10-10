// GAME VARIABLES AND CONSTANTS
let frames = 0;
let pos = 130;

let po1 = 414;
let po2 = 426;
let po3 = 739;
let po4 = 140;
let po5 = 120;
let f = 0;
let g = 0;
let h = 0;
let i = 0;
let j = 0;
let direction = 1;
let d1, d2, d3, d4, d5;


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
    if (frames % 60 == 30) {
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
    else if (frames % 60 == 0) {
        square.className = "";
        square.classList.add("pacman");
    }

    // square.className = "";
    // square.classList.add("pacman-right");
}

function scoreCount() {
    const scoreDisplay = document.getElementById("score");
    if (squares[pos].classList.contains("food") || squares[pos].classList.contains("food2")) score += 10;
    else if (squares[pos].classList.contains("power-pellet")) score += 200;
    scoreDisplay.innerHTML = "SCORE: " + score;
}
function updatePacman() {
    document.body.onkeydown = function (e) {
        if (e.key == "ArrowLeft") {
            if (pos == 406) {
                squares[pos].className = "";
                squares[pos].classList.add("blank");
                pos = 434;
                scoreCount();
            }
            else if (coordinates[pos - 1] == 0 || coordinates[pos - 1] == -2 || coordinates[pos - 1] == -1) {
                squares[pos].className = "";
                squares[pos].classList.add("blank");
                pos--;
                scoreCount();
            }
            direction = 4;
        }
        else if (e.key == "ArrowRight") {
            if (pos == 434) {
                squares[pos].className = "";
                squares[pos].classList.add("blank");
                pos = 406;
                scoreCount();
            }
            else if (coordinates[pos + 1] == 0 || coordinates[pos + 1] == -2 || coordinates[pos + 1] == -1) {
                squares[pos].className = "";
                squares[pos].classList.add("blank");
                pos++;
                scoreCount();
            }
            direction = 2;
        }
        else if (e.key == "ArrowUp") {
            if (coordinates[pos - 29] == 0 || coordinates[pos - 29] == -2 || coordinates[pos - 29] == -1) {
                squares[pos].className = "";
                squares[pos].classList.add("blank");
                pos = pos - 29;
                scoreCount();
            }
            direction = 1;
        }
        else if (e.key == "ArrowDown") {
            if (coordinates[pos + 29] == 0 || coordinates[pos + 29] == -2 || coordinates[pos + 29] == -1) {
                squares[pos].className = "";
                squares[pos].classList.add("blank");
                pos = pos + 29;
                scoreCount();
            }
            direction = 3;
        }
        console.log(score);
    }
}

//GHOST

function ghost1() {
    const square = squares[po1];
    square.className = "";
    square.classList.add("ghost1");
}

function ghost2() {
    const square = squares[po2];
    square.className = "";
    square.classList.add("ghost2");
}

function ghost3() {
    const square = squares[po3];
    square.className = "";
    square.classList.add("ghost3");
}

function ghost4() {
    const square = squares[po4];
    square.className = "";
    square.classList.add("ghost4");
}

function ghost5() {
    const square = squares[po5];
    square.className = "";
    square.classList.add("ghost5");
}

function updateghost1() {
    if (d1 < 0.25) {
        if (frames % 10 == 0) {
            if (coordinates[po1 + 1] == 1 || coordinates[po1 + 1] == 2) { }
            else if (po1 == 433) {
                if (squares[po1 + 1].classList.contains("blank")) {
                    if (f == 0) {
                        po1 = 406;
                        squares[433].className = "";
                        squares[433].className = "blank";
                        f = 0;
                    }
                    else {
                        po1 = 406;
                        squares[433].className = "";
                        squares[433].className = "food";
                        f = 0;
                    }
                }
                else {
                    if (f == 0) {
                        po1 = 406;
                        squares[433].className = "";
                        squares[433].className = "blank";
                        f = 1;
                    }
                    else {
                        po1 = 406;
                        squares[433].className = "";
                        squares[433].className = "food";
                        f = 1;
                    }
                }
            }
            else {
                if (squares[po1 + 1].classList.contains("blank")) {
                    if (f == 0) {
                        po1++;
                        squares[po1 - 1].className = "";
                        squares[po1 - 1].className = "blank";
                        f = 0;
                    }
                    else {
                        po1++;
                        squares[po1 - 1].className = "";
                        squares[po1 - 1].className = "food";
                        f = 0;
                    }
                }
                else if (coordinates[po1 + 1] == 0) {
                    if (f == 0) {
                        po1++;
                        squares[po1 - 1].className = "";
                        squares[po1 - 1].className = "blank";
                        f = 1;
                    }
                    else {
                        po1++;
                        squares[po1 - 1].className = "";
                        squares[po1 - 1].className = "food";
                        f = 1;
                    }
                }
            }
        }
    }
    else if (d1 < 0.5) {
        if (frames % 10 == 0) {
            if (coordinates[po1 - 1] == 1 || coordinates[po1 - 1] == 2) { }
            else if (po1 == 407) {
                if (squares[po1 - 1].classList.contains("blank")) {
                    if (f == 0) {
                        po1 = 433;
                        squares[407].className = "";
                        squares[407].className = "blank";
                        f = 0;
                    }
                    else {
                        po1 = 433;
                        squares[407].className = "";
                        squares[407].className = "food";
                        f = 0;
                    }
                }
                else {
                    if (f == 0) {
                        po1 = 433;
                        squares[407].className = "";
                        squares[407].className = "blank";
                        f = 1;
                    }
                    else {
                        po1 = 432;
                        squares[407].className = "";
                        squares[407].className = "food";
                        f = 1;
                    }
                }
            }
            else {
                if (squares[po1 - 1].classList.contains("blank")) {
                    if (f == 0) {
                        po1--;
                        squares[po1 + 1].className = "";
                        squares[po1 + 1].className = "blank";
                        f = 0;
                    }
                    else {
                        po1--;
                        squares[po1 + 1].className = "";
                        squares[po1 + 1].className = "food";
                        f = 0;
                    }
                }
                else if (coordinates[po1 - 1] == 0) {
                    if (f == 0) {
                        po1--;
                        squares[po1 + 1].className = "";
                        squares[po1 + 1].className = "blank";
                        f = 1;
                    }
                    else {
                        po1--;
                        squares[po1 + 1].className = "";
                        squares[po1 + 1].className = "food";
                        f = 1;
                    }
                }
            }
        }
    }
    else if (d1 < 0.75) {
        if (frames % 10 == 0) {
            if (coordinates[po1 - 29] == 1 || coordinates[po1 - 29] == 2) { }
            else {
                if (squares[po1 - 29].classList.contains("blank")) {
                    if (f == 0) {
                        po1 -= 29;
                        squares[po1 + 29].className = "";
                        squares[po1 + 29].className = "blank";
                        f = 0;
                    }
                    else {
                        po1 -= 29;
                        squares[po1 + 29].className = "";
                        squares[po1 + 29].className = "food";
                        f = 0;
                    }
                }
                else if (coordinates[po1 - 29] == 0) {
                    if (f == 0) {
                        po1 -= 29;
                        squares[po1 + 29].className = "";
                        squares[po1 + 29].className = "blank";
                        f = 1;
                    }
                    else {
                        po1 -= 29;
                        squares[po1 + 29].className = "";
                        squares[po1 + 29].className = "food";
                        f = 1;
                    }
                }
            }
        }
    }
    else if (d1 < 1) {
        if (frames % 10 == 0) {
            if (coordinates[po1 + 29] == 1 || coordinates[po1 + 29] == 2) { }
            else {
                if (squares[po1 + 29].classList.contains("blank")) {
                    if (f == 0) {
                        po1 += 29;
                        squares[po1 - 29].className = "";
                        squares[po1 - 29].className = "blank";
                        f = 0;
                    }
                    else {
                        po1 += 29;
                        squares[po1 - 29].className = "";
                        squares[po1 - 29].className = "food";
                        f = 0;
                    }
                }
                else if (coordinates[po1 + 29] == 0) {
                    if (f == 0) {
                        po1 += 29;
                        squares[po1 - 29].className = "";
                        squares[po1 - 29].className = "blank";
                        f = 1;
                    }
                    else {
                        po1 += 29;
                        squares[po1 - 29].className = "";
                        squares[po1 - 29].className = "food";
                        f = 1;
                    }
                }
            }
        }
    }
}
function updateghost2() {
    if (d2 < 0.25) {
        if (frames % 10 == 0) {
            if (coordinates[po2 + 1] == 1 || coordinates[po2 + 1] == 2) { }
            else if (po2 == 433) {
                if (squares[po2 + 1].classList.contains("blank")) {
                    if (g == 0) {
                        po2 = 406;
                        squares[433].className = "";
                        squares[433].className = "blank";
                        g = 0;
                    }
                    else {
                        po2 = 406;
                        squares[433].className = "";
                        squares[433].className = "food";
                        g = 0;
                    }
                }
                else {
                    if (g == 0) {
                        po2 = 406;
                        squares[433].className = "";
                        squares[433].className = "blank";
                        g = 1;
                    }
                    else {
                        po2 = 406;
                        squares[433].className = "";
                        squares[433].className = "food";
                        g = 1;
                    }
                }
            }
            else {
                if (squares[po2 + 1].classList.contains("blank")) {
                    if (f == 0) {
                        po2++;
                        squares[po2 - 1].className = "";
                        squares[po2 - 1].className = "blank";
                        g = 0;
                    }
                    else {
                        po2++;
                        squares[po2 - 1].className = "";
                        squares[po2 - 1].className = "food";
                        g = 0;
                    }
                }
                else if (coordinates[po2 + 1] == 0) {
                    if (g == 0) {
                        po2++;
                        squares[po2 - 1].className = "";
                        squares[po2 - 1].className = "blank";
                        g = 1;
                    }
                    else {
                        po2++;
                        squares[po2 - 1].className = "";
                        squares[po2 - 1].className = "food";
                        g = 1;
                    }
                }
            }
        }
    }
    else if (d2 < 0.5) {
        if (frames % 10 == 0) {
            if (coordinates[po2 - 1] == 1 || coordinates[po2 - 1] == 2) { }
            else if (po2 == 407) {
                if (squares[po2 - 1].classList.contains("blank")) {
                    if (g == 0) {
                        po2 = 433;
                        squares[407].className = "";
                        squares[407].className = "blank";
                        g = 0;
                    }
                    else {
                        po2 = 433;
                        squares[407].className = "";
                        squares[407].className = "food";
                        g = 0;
                    }
                }
                else {
                    if (f == 0) {
                        po2 = 433;
                        squares[407].className = "";
                        squares[407].className = "blank";
                        g = 1;
                    }
                    else {
                        po2 = 433;
                        squares[407].className = "";
                        squares[407].className = "food";
                        g = 1;
                    }
                }
            }
            else {
                if (squares[po2 - 1].classList.contains("blank")) {
                    if (g == 0) {
                        po2--;
                        squares[po2 + 1].className = "";
                        squares[po2 + 1].className = "blank";
                        g = 0;
                    }
                    else {
                        po2--;
                        squares[po2 + 1].className = "";
                        squares[po2 + 1].className = "food";
                        g = 0;
                    }
                }
                else if (coordinates[po2 - 1] == 0) {
                    if (g == 0) {
                        po2--;
                        squares[po2 + 1].className = "";
                        squares[po2 + 1].className = "blank";
                        g = 1;
                    }
                    else {
                        po2--;
                        squares[po2 + 1].className = "";
                        squares[po2 + 1].className = "food";
                        g = 1;
                    }
                }
            }
        }
    }
    else if (d2 < 0.75) {
        if (frames % 10 == 0) {
            if (coordinates[po3 - 29] == 1 || coordinates[po2 - 29] == 2) { }
            else {
                if (squares[po2 - 29].classList.contains("blank")) {
                    if (g == 0) {
                        po2 -= 29;
                        squares[po2 + 29].className = "";
                        squares[po2 + 29].className = "blank";
                        g = 0;
                    }
                    else {
                        po2 -= 29;
                        squares[po2 + 29].className = "";
                        squares[po2 + 29].className = "food";
                        g = 0;
                    }
                }
                else if (coordinates[po2 - 29] == 0) {
                    if (g == 0) {
                        po2 -= 29;
                        squares[po2 + 29].className = "";
                        squares[po2 + 29].className = "blank";
                        g = 1;
                    }
                    else {
                        po2 -= 29;
                        squares[po2 + 29].className = "";
                        squares[po2 + 29].className = "food";
                        g = 1;
                    }
                }
            }
        }
    }
    else if (d2 < 1) {
        if (frames % 10 == 0) {
            if (coordinates[po2 + 29] == 1 || coordinates[po2 + 29] == 2) { }
            else {
                if (squares[po2 + 29].classList.contains("blank")) {
                    if (g == 0) {
                        po2 += 29;
                        squares[po2 - 29].className = "";
                        squares[po2 - 29].className = "blank";
                        g = 0;
                    }
                    else {
                        po2 += 29;
                        squares[po2 - 29].className = "";
                        squares[po2 - 29].className = "food";
                        g = 0;
                    }
                }
                else if (coordinates[po2 + 29] == 0) {
                    if (g == 0) {
                        po2 += 29;
                        squares[po2 - 29].className = "";
                        squares[po2 - 29].className = "blank";
                        g = 1;
                    }
                    else {
                        po2 += 29;
                        squares[po2 - 29].className = "";
                        squares[po2 - 29].className = "food";
                        g = 1;
                    }
                }
            }
        }
    }
}
function updateghost3() {
    if (d3 < 0.25) {
        if (frames % 10 == 0) {
            if (coordinates[po3 + 1] == 1 || coordinates[po3 + 1] == 2) { }
            else if (po3 == 433) {
                if (squares[po3 + 1].classList.contains("blank")) {
                    if (h == 0) {
                        po3 = 406;
                        squares[433].className = "";
                        squares[433].className = "blank";
                        h = 0;
                    }
                    else {
                        po3 = 406;
                        squares[433].className = "";
                        squares[433].className = "food";
                        h = 0;
                    }
                }
                else {
                    if (h == 0) {
                        po3 = 406;
                        squares[433].className = "";
                        squares[433].className = "blank";
                        h = 1;
                    }
                    else {
                        po3 = 406;
                        squares[433].className = "";
                        squares[433].className = "food";
                        h = 1;
                    }
                }
            }
            else {
                if (squares[po3 + 1].classList.contains("blank")) {
                    if (h == 0) {
                        po3++;
                        squares[po3 - 1].className = "";
                        squares[po3 - 1].className = "blank";
                        h = 0;
                    }
                    else {
                        po3++;
                        squares[po3 - 1].className = "";
                        squares[po3 - 1].className = "food";
                        h = 0;
                    }
                }
                else if (coordinates[po3 + 1] == 0) {
                    if (h == 0) {
                        po3++;
                        squares[po3 - 1].className = "";
                        squares[po3 - 1].className = "blank";
                        h = 1;
                    }
                    else {
                        po3++;
                        squares[po3 - 1].className = "";
                        squares[po3 - 1].className = "food";
                        h = 1;
                    }
                }
            }
        }
    }
    else if (d3 < 0.5) {
        if (frames % 10 == 0) {
            if (coordinates[po3 - 1] == 1 || coordinates[po3 - 1] == 2) { }
            else if (po3 == 407) {
                if (squares[po3 - 1].classList.contains("blank")) {
                    if (h == 0) {
                        po3 = 433;
                        squares[407].className = "";
                        squares[407].className = "blank";
                        h = 0;
                    }
                    else {
                        po3 = 433;
                        squares[407].className = "";
                        squares[407].className = "food";
                        h = 0;
                    }
                }
                else {
                    if (h == 0) {
                        po3 = 407;
                        squares[407].className = "";
                        squares[407].className = "blank";
                        h = 1;
                    }
                    else {
                        po3 = 407;
                        squares[407].className = "";
                        squares[407].className = "food";
                        h = 1;
                    }
                }
            }
            else {
                if (squares[po3 - 1].classList.contains("blank")) {
                    if (h == 0) {
                        po3--;
                        squares[po3 + 1].className = "";
                        squares[po3 + 1].className = "blank";
                        h = 0;
                    }
                    else {
                        po3--;
                        squares[po3 + 1].className = "";
                        squares[po3 + 1].className = "food";
                        h = 0;
                    }
                }
                else if (coordinates[po3 - 1] == 0) {
                    if (h == 0) {
                        po3--;
                        squares[po3 + 1].className = "";
                        squares[po3 + 1].className = "blank";
                        h = 1;
                    }
                    else {
                        po3--;
                        squares[po3 + 1].className = "";
                        squares[po3 + 1].className = "food";
                        h = 1;
                    }
                }
            }
        }
    }
    else if (d3 < 0.75) {
        if (frames % 10 == 0) {
            if (coordinates[po3 - 29] == 1 || coordinates[po3 - 29] == 2) { }
            else {
                if (squares[po3 - 29].classList.contains("blank")) {
                    if (h == 0) {
                        po3 -= 29;
                        squares[po3 + 29].className = "";
                        squares[po3 + 29].className = "blank";
                        h = 0;
                    }
                    else {
                        po3 -= 29;
                        squares[po3 + 29].className = "";
                        squares[po3 + 29].className = "food";
                        h = 0;
                    }
                }
                else if (coordinates[po3 - 29] == 0) {
                    if (h == 0) {
                        po3 -= 29;
                        squares[po3 + 29].className = "";
                        squares[po3 + 29].className = "blank";
                        h = 1;
                    }
                    else {
                        po3 -= 29;
                        squares[po3 + 29].className = "";
                        squares[po3 + 29].className = "food";
                        h = 1;
                    }
                }
            }
        }
    }
    else if (d3 < 1) {
        if (frames % 10 == 0) {
            if (coordinates[po3 + 29] == 1 || coordinates[po3 + 29] == 2) { }
            else {
                if (squares[po3 + 29].classList.contains("blank")) {
                    if (h == 0) {
                        po3 += 29;
                        squares[po3 - 29].className = "";
                        squares[po3 - 29].className = "blank";
                        h = 0;
                    }
                    else {
                        po3 += 29;
                        squares[po3 - 29].className = "";
                        squares[po3 - 29].className = "food";
                        h = 0;
                    }
                }
                else if (coordinates[po3 + 29] == 0) {
                    if (h == 0) {
                        po3 += 29;
                        squares[po3 - 29].className = "";
                        squares[po3 - 29].className = "blank";
                        h = 1;
                    }
                    else {
                        po3 += 29;
                        squares[po3 - 29].className = "";
                        squares[po3 - 29].className = "food";
                        h = 1;
                    }
                }
            }
        }
    }
}
function updateghost4() {
    if (d4 < 0.25) {
        if (frames % 10 == 0) {
            if (coordinates[po4 + 1] == 1 || coordinates[po4 + 1] == 2) { }
            else if (po4 == 433) {
                if (squares[po4 + 1].classList.contains("blank")) {
                    if (i == 0) {
                        po4 = 406;
                        squares[433].className = "";
                        squares[433].className = "blank";
                        i = 0;
                    }
                    else {
                        po4 = 406;
                        squares[433].className = "";
                        squares[433].className = "food";
                        i = 0;
                    }
                }
                else {
                    if (i == 0) {
                        po4 = 406;
                        squares[433].className = "";
                        squares[433].className = "blank";
                        i = 1;
                    }
                    else {
                        po4 = 406;
                        squares[433].className = "";
                        squares[433].className = "food";
                        i = 1;
                    }
                }
            }
            else {
                if (squares[po4 + 1].classList.contains("blank")) {
                    if (i == 0) {
                        po4++;
                        squares[po4 - 1].className = "";
                        squares[po4 - 1].className = "blank";
                        i = 0;
                    }
                    else {
                        po4++;
                        squares[po4 - 1].className = "";
                        squares[po4 - 1].className = "food";
                        i = 0;
                    }
                }
                else if (coordinates[po4 + 1] == 0) {
                    if (i == 0) {
                        po4++;
                        squares[po4 - 1].className = "";
                        squares[po4 - 1].className = "blank";
                        i = 1;
                    }
                    else {
                        po4++;
                        squares[po4 - 1].className = "";
                        squares[po4 - 1].className = "food";
                        i = 1;
                    }
                }
            }
        }
    }
    else if (d4 < 0.5) {
        if (frames % 10 == 0) {
            if (coordinates[po4 - 1] == 1 || coordinates[po4 - 1] == 2) { }
            else if (po4 == 407) {
                if (squares[po4 - 1].classList.contains("blank")) {
                    if (i == 0) {
                        po4 = 433;
                        squares[407].className = "";
                        squares[407].className = "blank";
                        i = 0;
                    }
                    else {
                        po4 = 433;
                        squares[407].className = "";
                        squares[407].className = "food";
                        i = 0;
                    }
                }
                else {
                    if (i == 0) {
                        po4 = 433;
                        squares[407].className = "";
                        squares[407].className = "blank";
                        i = 1;
                    }
                    else {
                        po4 = 432;
                        squares[407].className = "";
                        squares[407].className = "food";
                        i = 1;
                    }
                }
            }
            else {
                if (squares[po4 - 1].classList.contains("blank")) {
                    if (i == 0) {
                        po4--;
                        squares[po4 + 1].className = "";
                        squares[po4 + 1].className = "blank";
                        i = 0;
                    }
                    else {
                        po4--;
                        squares[po4 + 1].className = "";
                        squares[po4 + 1].className = "food";
                        i = 0;
                    }
                }
                else if (coordinates[po4 - 1] == 0) {
                    if (i == 0) {
                        po4--;
                        squares[po4 + 1].className = "";
                        squares[po4 + 1].className = "blank";
                        i = 1;
                    }
                    else {
                        po4--;
                        squares[po4 + 1].className = "";
                        squares[po4 + 1].className = "food";
                        i = 1;
                    }
                }
            }
        }
    }
    else if (d4 < 0.75) {
        if (frames % 10 == 0) {
            if (coordinates[po4 - 29] == 1 || coordinates[po4 - 29] == 2) { }
            else {
                if (squares[po4 - 29].classList.contains("blank")) {
                    if (i == 0) {
                        po4 -= 29;
                        squares[po4 + 29].className = "";
                        squares[po4 + 29].className = "blank";
                        i = 0;
                    }
                    else {
                        po4 -= 29;
                        squares[po4 + 29].className = "";
                        squares[po4 + 29].className = "food";
                        i = 0;
                    }
                }
                else if (coordinates[po4 - 29] == 0) {
                    if (i == 0) {
                        po4 -= 29;
                        squares[po4 + 29].className = "";
                        squares[po4 + 29].className = "blank";
                        i = 1;
                    }
                    else {
                        po4 -= 29;
                        squares[po4 + 29].className = "";
                        squares[po4 + 29].className = "food";
                        i = 1;
                    }
                }
            }
        }
    }
    else if (d4 < 1) {
        if (frames % 10 == 0) {
            if (coordinates[po4 + 29] == 1 || coordinates[po4 + 29] == 2) { }
            else {
                if (squares[po4 + 29].classList.contains("blank")) {
                    if (i == 0) {
                        po4 += 29;
                        squares[po4 - 29].className = "";
                        squares[po4 - 29].className = "blank";
                        i = 0;
                    }
                    else {
                        po4 += 29;
                        squares[po4 - 29].className = "";
                        squares[po4 - 29].className = "food";
                        i = 0;
                    }
                }
                else if (coordinates[po4 + 29] == 0) {
                    if (i == 0) {
                        po4 += 29;
                        squares[po4 - 29].className = "";
                        squares[po4 - 29].className = "blank";
                        i = 1;
                    }
                    else {
                        po4 += 29;
                        squares[po4 - 29].className = "";
                        squares[po4 - 29].className = "food";
                        i = 1;
                    }
                }
            }
        }
    }
}
function updateghost5() {
    if (d5 < 0.25) {
        if (frames % 10 == 0) {
            if (coordinates[po5 + 1] == 1 || coordinates[po5 + 1] == 2) { }
            else if (po5 == 433) {
                if (squares[po5 + 1].classList.contains("blank")) {
                    if (j == 0) {
                        po5 = 406;
                        squares[433].className = "";
                        squares[433].className = "blank";
                        j = 0;
                    }
                    else {
                        po5 = 406;
                        squares[433].className = "";
                        squares[433].className = "food";
                        j = 0;
                    }
                }
                else {
                    if (j == 0) {
                        po5 = 406;
                        squares[433].className = "";
                        squares[433].className = "blank";
                        j = 1;
                    }
                    else {
                        po5 = 406;
                        squares[433].className = "";
                        squares[433].className = "food";
                        j = 1;
                    }
                }
            }
            else {
                if (squares[po5 + 1].classList.contains("blank")) {
                    if (j == 0) {
                        po5++;
                        squares[po5 - 1].className = "";
                        squares[po5 - 1].className = "blank";
                        j = 0;
                    }
                    else {
                        po5++;
                        squares[po5 - 1].className = "";
                        squares[po5 - 1].className = "food";
                        j = 0;
                    }
                }
                else if (coordinates[po5 + 1] == 0) {
                    if (j == 0) {
                        po5++;
                        squares[po5 - 1].className = "";
                        squares[po5 - 1].className = "blank";
                        j = 1;
                    }
                    else {
                        po5++;
                        squares[po5 - 1].className = "";
                        squares[po5 - 1].className = "food";
                        j = 1;
                    }
                }
            }
        }
    }
    else if (d5 < 0.5) {
        if (frames % 10 == 0) {
            if (coordinates[po5 - 1] == 1 || coordinates[po5 - 1] == 2) { }
            else if (po5 == 407) {
                if (squares[po5 - 1].classList.contains("blank")) {
                    if (j == 0) {
                        po5 = 433;
                        squares[407].className = "";
                        squares[407].className = "blank";
                        j = 0;
                    }
                    else {
                        po5 = 433;
                        squares[407].className = "";
                        squares[407].className = "food";
                        j = 0;
                    }
                }
                else {
                    if (j == 0) {
                        po5 = 433;
                        squares[407].className = "";
                        squares[407].className = "blank";
                        j = 1;
                    }
                    else {
                        po5 = 432;
                        squares[407].className = "";
                        squares[407].className = "food";
                        j = 1;
                    }
                }
            }
            else {
                if (squares[po5 - 1].classList.contains("blank")) {
                    if (j == 0) {
                        po5--;
                        squares[po5 + 1].className = "";
                        squares[po5 + 1].className = "blank";
                        j = 0;
                    }
                    else {
                        po5--;
                        squares[po5 + 1].className = "";
                        squares[po5 + 1].className = "food";
                        j = 0;
                    }
                }
                else if (coordinates[po5 - 1] == 0) {
                    if (j == 0) {
                        po5--;
                        squares[po5 + 1].className = "";
                        squares[po5 + 1].className = "blank";
                        j = 1;
                    }
                    else {
                        po5--;
                        squares[po5 + 1].className = "";
                        squares[po5 + 1].className = "food";
                        j = 1;
                    }
                }
            }
        }
    }
    else if (d5 < 0.75) {
        if (frames % 10 == 0) {
            if (coordinates[po5 - 29] == 1 || coordinates[po5 - 29] == 2) { }
            else {
                if (squares[po5 - 29].classList.contains("blank")) {
                    if (j == 0) {
                        po5 -= 29;
                        squares[po5 + 29].className = "";
                        squares[po5 + 29].className = "blank";
                        j = 0;
                    }
                    else {
                        po5 -= 29;
                        squares[po5 + 29].className = "";
                        squares[po5 + 29].className = "food";
                        j = 0;
                    }
                }
                else if (coordinates[po5 - 29] == 0) {
                    if (j == 0) {
                        po5 -= 29;
                        squares[po5 + 29].className = "";
                        squares[po5 + 29].className = "blank";
                        j = 1;
                    }
                    else {
                        po5 -= 29;
                        squares[po5 + 29].className = "";
                        squares[po5 + 29].className = "food";
                        j = 1;
                    }
                }
            }
        }
    }
    else if (d5 < 1) {
        if (frames % 10 == 0) {
            if (coordinates[po5 + 29] == 1 || coordinates[po5 + 29] == 2) { }
            else {
                if (squares[po5 + 29].classList.contains("blank")) {
                    if (j == 0) {
                        po5 += 29;
                        squares[po5 - 29].className = "";
                        squares[po5 - 29].className = "blank";
                        j = 0;
                    }
                    else {
                        po5 += 29;
                        squares[po5 - 29].className = "";
                        squares[po5 - 29].className = "food";
                        j = 0;
                    }
                }
                else if (coordinates[po5 + 29] == 0) {
                    if (j == 0) {
                        po5 += 29;
                        squares[po5 - 29].className = "";
                        squares[po5 - 29].className = "blank";
                        j = 1;
                    }
                    else {
                        po5 += 29;
                        squares[po5 - 29].className = "";
                        squares[po5 - 29].className = "food";
                        j = 1;
                    }
                }
            }
        }
    }
}



drawMap();
function loop() {
    if (po1 == pos || po2 == pos || po3 == pos || po4 == pos || po5 == pos) { alert("game over"); }
    else {
        frames++;
        updatePacman();
        pacman();
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
        food();
        window.requestAnimationFrame(loop);
        d1 = Math.random();
        d2 = Math.random();
        d3 = Math.random();
        d4 = Math.random();
        d5 = Math.random();
        console.log(d);
    }
}
loop();
