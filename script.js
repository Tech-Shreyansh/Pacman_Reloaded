// GAME VARIABLES AND CONSTANTS
let frames = 0;
let pos = 130;

// let po1 = 414;
// let f = 0;
let direction = 1;
let score = 0;
// let d;


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

function ghost(po1) {
    const square = squares[po1];
    square.className = "";
    square.classList.add("ghost1");
}
function check(){
    let d2=Math.random;
    let po2=414;
    let g=0;
    ghost(po2);
    updateghost(d2,po2,g);
}

function updateghost(d,po1,f) {
    if (d < 0.25) {
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
    else if (d < 0.5) {
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
                        po1 = 407;
                        squares[407].className = "";
                        squares[407].className = "blank";
                        f = 1;
                    }
                    else {
                        po1 = 407;
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
    else if (d < 0.75) {
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
    else if (d < 1) {
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


drawMap();
function loop() {
    // if (po1 == pos) {
    //     alert("game over");
    // }
    // else {
        frames++;
        updatePacman();
        pacman();
        // ghost();
        // updateghost();
        check();
        food();
        window.requestAnimationFrame(loop);
        // d = Math.random();
        // console.log(d);
    // }
}
loop();