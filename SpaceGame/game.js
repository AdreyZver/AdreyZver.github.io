//Получение canvas
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

//Получение элементов

//Image Фон
let ImgBackFon = new Image(300,300);
ImgBackFon.src = "images/background.jpg";

//Корабль
let spaceShip = {
    sprite : new Image(40, 40),
    x : 130,
    y : 250,
    Ux : 10
}
spaceShip.sprite.src = "images/spaceShip.png";

//Метеориты
let meteor = {
    sprite : new Image(40 , 40),
    x : Math.floor( 1 + Math.random() * 260 ),
    y : -40,
    Uy : 0.3,
    setSRC : function() {
        this.sprite.src = "images/meteor.png";
    } ,
    drawElement : function() {
        ctx.drawImage( this.sprite , this.x , this.y );
    }
}

let mass_meteor = new Array();
mass_meteor.push(meteor);
mass_meteor[0].setSRC();


//Отрисовка обьектов
document.addEventListener("keydown" , function(ev){ // -- управление кораблем
    switch(ev.keyCode){
        case 65:{
            if(spaceShip.x > 0) spaceShip.x -= spaceShip.Ux;
        }break;
        case 68:{
            if(spaceShip.x + 40 < 300) spaceShip.x += spaceShip.Ux;
        }break;
    }
});

function drawBackground(){
    ctx.drawImage(ImgBackFon , 0 , 0);
}

function drawSpaceShip(){
    ctx.drawImage(spaceShip.sprite , spaceShip.x , spaceShip.y);
}

let ballSumm = 0;
let isLoopDoesGo = true;

function drawMeteorits(){
    for(let i = 0; i < mass_meteor.length ; i++){
        mass_meteor[i].setSRC();
        mass_meteor[i].drawElement();
        if(mass_meteor[i].y <= 300) mass_meteor[i].y += mass_meteor[i].Uy;
        else mass_meteor.splice(i, 1);
        if(mass_meteor.length <= 3)
            mass_meteor.push(
                {
                    sprite : new Image(40 , 40),
                    x : Math.floor( 1 + Math.random() * 260 ),
                    y : -40,
                    Uy : 0.3,
                    setSRC : function() {
                        this.sprite.src = "images/meteor.png";
                    } ,
                    drawElement : function() {
                        ctx.drawImage( this.sprite , this.x , this.y );
                    }
                }
            )
        else mass_meteor.pop();
        //Логика столкновения
        if(
            (mass_meteor[i].y + 40 >= spaceShip.y) &&
            ((mass_meteor[i].x >= spaceShip.x &&
             mass_meteor[i].x <= spaceShip.x + 40) ||
             (mass_meteor[i].x + 20 >= spaceShip.x &&
             mass_meteor[i].x + 20 <= spaceShip.x + 40) ||
             (mass_meteor[i].x + 40 >= spaceShip.x &&
             mass_meteor[i].x + 40 <= spaceShip.x + 40))
        ){
            document.getElementById("result").innerHTML = "Проигрыш";
            document.getElementById("result").style.color = "red";
            isLoopDoesGo = false;
        } else if(
            mass_meteor[i].y >= spaceShip.y &&
            mass_meteor[i].y < spaceShip.y + 0.3
        ){
            ballSumm++;
            document.getElementById("result").innerHTML = "Результат : " + (ballSumm / 3);
        }
    }
}

//Игровой цикл
function loop(){
    draw();
    update();
}

function update(){

}

function draw(){
    drawBackground();
    drawSpaceShip();
    drawMeteorits();
}

meteor.sprite.addEventListener("load" , function(){
    
    let gameMainLoop = setInterval( function(){
        if(isLoopDoesGo){
            ctx.clearRect(0 , 0 , 300 , 300);
            loop();
        } else{
            clearInterval(gameMainLoop);
        }
    } , 1000 / 20 );
});