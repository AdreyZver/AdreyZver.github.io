//Канвас
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

//Получение элементов :

/* Фон */
let image_background = new Image(300,300);
image_background.src = "images/background.jpg";

/* Космический корабль */
let image_spaceShip = {
    sprite : new Image(40,40),
    dx : 130,
    dy : 240,
    Ux : 1
}

canvas.addEventListener("mousemove" , function(ev){
    if(image_spaceShip.dx >= 0 && image_spaceShip.dx + 40 <= 300) image_spaceShip.dx = ev.offsetX - 20;
    else if(image_spaceShip.dx < 0) image_spaceShip.dx = 0;
    else if(image_spaceShip.dx + 40 > 300) image_spaceShip.dx = 260;
});

image_spaceShip.sprite.src = "images/spaceShip.png";

/* Метеориты */
let image_meteor = {
    sprite : new Image(40,40),
    dx : 1 + Math.random() * 260,
    dy : -40,
    Uy : 0.05,
    setSrc : function(){
        this.sprite.src = "images/meteor.png";
    } ,
    drawElement : function(){
        ctx.drawImage(this.sprite , this.dx , this.dy);
    }
}
image_meteor.setSrc();

let mass_meteors = [];

for(let i = 0; i < 5; i++){
    mass_meteors.push(
        {
            sprite : new Image(40,40),
            dx : 1 + Math.random() * 260,
            dy : -40,
            Uy : 2,
            setSrc : function(){
                this.sprite.src = "images/meteor.png";
            } ,
            drawElement : function(){
                ctx.drawImage(this.sprite , this.dx , this.dy);
            }
        }
    );
    mass_meteors[i].setSrc();
}

//Прорисовка обьектов :
function drawBackground(){
    ctx.drawImage(image_background , 0 , 0);
}

function drawSpaceShip(){
    ctx.drawImage(image_spaceShip.sprite , image_spaceShip.dx , image_spaceShip.dy);
}

let isGameLoopDoesWork = true;

let DOM_result = document.getElementById("result");

let sumBall = 0;

function drawMeteorits(){
    for(let i = 0; i < mass_meteors.length; i++){
        mass_meteors[i].drawElement();
    }

    if(mass_meteors[0].dy <= 300){
        for(let i = 0; i < mass_meteors.length; i++){
            mass_meteors[i].dy += mass_meteors[i].Uy;
        }
    } else{
        for(let i = 0; i < mass_meteors.length; i++){
            mass_meteors[i].dy = -40;
            mass_meteors[i].dx = 1 + Math.random() * 260;
        }
    }

    for(let i = 0; i < mass_meteors.length; i++){
        if(
            ((mass_meteors[i].dy + 30 >= image_spaceShip.dy && mass_meteors[i].dy + 30 <= image_spaceShip.dy + 40) || (mass_meteors[i].dy >= image_spaceShip.dy && mass_meteors[i].dy <= image_spaceShip.dy + 40)) &&

            (
                (mass_meteors[i].dx + 8 >= image_spaceShip.dx && mass_meteors[i].dx + 8 <= image_spaceShip.dx + 40) ||
                (mass_meteors[i].dx + 16 >= image_spaceShip.dx && mass_meteors[i].dx + 16 <= image_spaceShip.dx + 40) ||
                (mass_meteors[i].dx + 24 >= image_spaceShip.dx && mass_meteors[i].dx + 24 <= image_spaceShip.dx + 40)
            )
        ) {
            DOM_result.style.color = "red";
            DOM_result.innerHTML = "Вы проиграли. Результат : " + (sumBall / 10);

            isGameLoopDoesWork = false;
        } else if (
          mass_meteors[i].dy >= image_spaceShip.dy && mass_meteors[i].dy <= image_spaceShip.dy + 2
        ) {
          sumBall++;
          DOM_result.innerHTML = "Результат: " + (sumBall / 10);
        }
    }
}

//Игровой цикл :
function gameLoop(){
    if(isGameLoopDoesWork == false) return;
    ctx.clearRect(0 , 0, 300 , 300);
    drawBackground();
    drawSpaceShip();
    drawMeteorits();
    window.requestAnimationFrame(gameLoop);
}

image_meteor.sprite.addEventListener("load", function(){
    gameLoop();
    window.requestAnimationFrame(gameLoop);
});
