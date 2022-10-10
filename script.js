// GAME VARIABLES AND CONSTANTS
let frames = 0;
let pos = 130;
let po1 = 414;
let f=0;

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
    -1, -1, 1, 0, 2, 0, 1, 0, 0, 0, 2, -1, 2, 3, -1, -1, 4, 2, -1, 2, 2, 2, 2, 1, 1, 0, 1, -1, -1,
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
    square.className = "";
    square.classList.add("pacman");
}

//GHOST

function ghost() {
    const square = squares[po1];
    square.className = "";
    square.classList.add("ghost1");
}

function updateghost() 
{
    if (frames % 20==0)
    {
            if (coordinates[po1+1] == 1||coordinates[po1+1] == 2)
                {}
            else if(po1 == 433)
            {
                if(squares[po1+1].classList.contains("blank"))
                {
                    if(f==0)
                        {
                            po1=406;
                            squares[433].className = "";
                            squares[433].className = "blank";
                            f=0;
                        }
                        else
                        {
                            po1=406;
                            squares[433].className = "";
                            squares[433].className = "food";
                            f=0;
                        }
                }
                else
                {
                    if(f==0)
                        {
                            po1=406;
                            squares[433].className = "";
                            squares[433].className = "blank";
                            f=1;
                        }
                        else
                        {
                            po1=406;
                            squares[433].className = "";
                            squares[433].className = "food";
                            f=1;
                        }
                }
            }
            else
            {
                if(squares[po1+1].classList.contains("blank"))
                {
                    if(f==0)
                    {
                        po1++;
                        squares[po1-1].className = "";
                        squares[po1-1].className = "blank";
                        f=0;
                    }
                    else
                    {
                        po1++;
                        squares[po1-1].className = "";
                        squares[po1-1].className = "food";
                        f=0;
                    }
                }
                else if(coordinates[po1+1] == 0)
                {
                    if(f==0)
                    {
                        po1++;
                        squares[po1-1].className = "";
                        squares[po1-1].className = "blank";
                        f=1;
                    }
                    else
                    {
                        po1++;
                        squares[po1-1].className = "";
                        squares[po1-1].className = "food";
                        f=1;
                    }
                }
            }
            console.log(po1);
    }
}

function updatePacman() {
    document.body.onkeydown = function (e) {
        if (e.key == "ArrowLeft") {
            if(pos == 406)
            {
                squares[pos].className = "";
                squares[pos].classList.add("blank");
                pos=434;
            }
            else if (coordinates[pos-1] == 0||coordinates[pos-1] == -2||coordinates[pos-1] == -1)
            {
                squares[pos].className = "";
                squares[pos].classList.add("blank");
                pos--;
            }
        }
        else if (e.key == "ArrowRight") {
            if(pos == 434)
            {
                squares[pos].className = "";
                squares[pos].classList.add("blank");
                pos=406;
            }
            else if (coordinates[pos+1] == 0||coordinates[pos+1] == -2||coordinates[pos+1] == -1)
            {
            squares[pos].className = "";
            squares[pos].classList.add("blank");
            pos++;
            }
        }
        else if (e.key == "ArrowUp") {
            if (coordinates[pos-29] == 0||coordinates[pos-29] == -2||coordinates[pos-29] == -1)
            {
            squares[pos].className = "";
            squares[pos].classList.add("blank");
            pos=pos-29;
            }
        }
        else if (e.key == "ArrowDown") {
            if (coordinates[pos+29] == 0||coordinates[pos+29] == -2||coordinates[pos+29] == -1)
            {
            squares[pos].className = "";
            squares[pos].classList.add("blank");
            pos=pos+29;
            }
        }

        console.log(e);
    }
}

// Loop

drawMap();
function loop() {
    frames++;
    updatePacman();
    pacman();
    ghost();
    updateghost();
    food();
    window.requestAnimationFrame(loop);
}
loop();
