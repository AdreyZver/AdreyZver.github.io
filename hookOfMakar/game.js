//Сам канвас
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");





















// Получение элементов

/* Фон */
let fon_image = {
    sprite : new Image(800, 600) ,
    draw : () => { ctx.drawImage(fon_image.sprite, 0, 0) } ,
    setSRC : () => { fon_image.sprite.src = "images/game_pole.jpg" }
}

fon_image.setSRC();

/* Первое дерево */
let oneTree_image = {
    sprite : new Image(239,214) ,
    draw : () => { ctx.drawImage(oneTree_image.sprite, 0, 0) } ,
    setSRC : () => { oneTree_image.sprite.src = "images/one_tree.png" }
}

oneTree_image.setSRC();

/* Второе дерево */
let twoTree_image = {
    sprite : new Image(220,217) ,
    draw : () => { ctx.drawImage(twoTree_image.sprite, 0, 600 - 217) } ,
    setSRC : () => { twoTree_image.sprite.src = "images/two_tree.png" }
}

twoTree_image.setSRC();

/* Персонаж */
let person_image = {
    sprite : new Image(140,140) ,
    draw : () => { ctx.drawImage(person_image.sprite, person_image.x , person_image.y) } ,
    setSRC : () => { person_image.sprite.src = "images/makar_person.png" },
    x : (800 - 140) - 10, y : (600 - 140) / 2,
    UX : 20 , UY : 20,
    GoXPlus : () => { person_image.x += person_image.UX },
    GoYPlus : () => { person_image.y += person_image.UY },
    GoXMinus : () => { person_image.x -= person_image.UX },
    GoYMinus : () => { person_image.y -= person_image.UY },
    checkGran : () => {
        if(person_image.x > 0 && person_image.x + 140 < 800 && person_image.y > 0 && person_image.y + 140 < 600)
            return true;
        else{
            if(person_image.x <= 0) person_image.x = 0;
            else if(person_image.x + 140 >= 800) person_image.x = 800 - 140;
            if(person_image.y <= 0) person_image.y = 0;
            else if(person_image.y + 140 >= 600) person_image.y = 600 - 140;
            return true;
        }
    }
}

person_image.setSRC();

/* Пуля */

let mass_bullet = [];

function addBullet(){
    mass_bullet.push(
        {
            sprite : new Image(32,46) ,
            x : person_image.x,
            y : person_image.y ,
            UX : 5
        }
    );
}

function setSRCForBullets() {
    for(let i = 0; i < mass_bullet.length; i++) {
        mass_bullet[i].sprite.src = "images/kniga.png";
    }
}

function drawBullets() {
    if(mass_bullet.length != 0){
       for(let i = 0; i < mass_bullet.length; i++) {
            ctx.drawImage(mass_bullet[i].sprite , mass_bullet[i].x , mass_bullet[i].y);
            mass_bullet[i].x -= mass_bullet[i].UX;
        }
    }
}

function checkGranBullets() {
    for(let i = 0; i < mass_bullet.length; i++) {
        if(mass_bullet[i].x < 0) mass_bullet.splice(i,1);
    }
}

/* Враги */
let enemes_randomMaxMinus;
if(document.body.offsetWidth <= 768) enemes_randomMaxMinus = 2000;
else enemes_randomMaxMinus = 500;
let MapMassOf_enemes = new Map();

    /* Андрей */
MapMassOf_enemes.set("Andrey" , {
    sprite : new Image(49,172) ,
    x : Math.floor( -( 51 + (Math.random() * enemes_randomMaxMinus - 51) ) ) ,
    y : Math.floor( Math.random() * 400 )
});

    /* Арсений */
MapMassOf_enemes.set("Arsenii" , {
    sprite : new Image(49,171) ,
    x : Math.floor( -( 51 + (Math.random() * enemes_randomMaxMinus - 51) ) ) ,
    y : Math.floor( Math.random() * 400 )
});

    /* Глеб */
MapMassOf_enemes.set("Gleb" , {
    sprite : new Image(50,172) ,
    x : Math.floor( -( 51 + (Math.random() * enemes_randomMaxMinus - 51) ) ) ,
    y : Math.floor( Math.random() * 400 )
});

    /* Илья */
MapMassOf_enemes.set("Ilya" , {
    sprite : new Image(49,174) ,
    x : Math.floor( -( 51 + (Math.random() * enemes_randomMaxMinus - 51) ) ) ,
    y : Math.floor( Math.random() * 400 )
});

    /* Кирилл */
MapMassOf_enemes.set("Kirill" , {
    sprite : new Image(51,173) ,
    x : Math.floor( -( 51 + (Math.random() * enemes_randomMaxMinus - 51) ) ) ,
    y : Math.floor( Math.random() * 400 )
});

    /* Макс */
MapMassOf_enemes.set("Maks" , {
    sprite : new Image(49,175) ,
    x : Math.floor( -( 51 + (Math.random() * enemes_randomMaxMinus - 51) ) ) ,
    y : Math.floor( Math.random() * 400 )
});

    /* Саша */
MapMassOf_enemes.set("Sasha" , {
    sprite : new Image(51,175) ,
    x : Math.floor( -( 51 + (Math.random() * enemes_randomMaxMinus - 51) ) ) ,
    y : Math.floor( Math.random() * 400 )
});

    /* Влад */
MapMassOf_enemes.set("Vlad" , {
    sprite : new Image(51,174) ,
    x : Math.floor( -( 51 + (Math.random() * enemes_randomMaxMinus - 51) ) ) ,
    y : Math.floor( Math.random() * 400 )
});

for(let values of MapMassOf_enemes.keys()) {
    switch(values) {
        case "Andrey" : {
            ( Array.from(MapMassOf_enemes) )[0][1].sprite.src = "images/enemes/andrey.png";
        }break;
        case "Arsenii" : {
            ( Array.from(MapMassOf_enemes) )[1][1].sprite.src = "images/enemes/arsenii.png";
        }break;
        case "Gleb" : {
            ( Array.from(MapMassOf_enemes) )[2][1].sprite.src = "images/enemes/gleb.png";
        }break;
        case "Ilya" : {
            ( Array.from(MapMassOf_enemes) )[3][1].sprite.src = "images/enemes/ilya.png";
        }break;
        case "Kirill" : {
            ( Array.from(MapMassOf_enemes) )[4][1].sprite.src = "images/enemes/kirill.png";
        }break;
        case "Maks" : {
            ( Array.from(MapMassOf_enemes) )[5][1].sprite.src = "images/enemes/maks.png";
        }break;
        case "Sasha" : {
            ( Array.from(MapMassOf_enemes) )[6][1].sprite.src = "images/enemes/sasha.png";
        }break;
        case "Vlad" : {
            ( Array.from(MapMassOf_enemes) )[7][1].sprite.src = "images/enemes/vlad.png";
        }break;
    }
}

function drawEnemes() {
    for(let value of MapMassOf_enemes.keys()) {
        ctx.drawImage( MapMassOf_enemes.get(value).sprite , MapMassOf_enemes.get(value).x , MapMassOf_enemes.get(value).y );
    }
}

let velocityX = 4,
    velocityY = 4;

function updateCoordsEnemes() {
    for(let values of MapMassOf_enemes.keys() ) {
        if( MapMassOf_enemes.get(values).x >= 0) {
            if( MapMassOf_enemes.get(values).x + MapMassOf_enemes.get(values).sprite.offsetWidth <= person_image.x){
                MapMassOf_enemes.get(values).x += velocityX;
            }
            else if( MapMassOf_enemes.get(values).x >= person_image.x + person_image.sprite.offsetWidth ) MapMassOf_enemes.get(values).x -= velocityX;

            if( MapMassOf_enemes.get(values).y + MapMassOf_enemes.get(values).sprite.offsetHeight <= person_image.y ) {
                MapMassOf_enemes.get(values).y += velocityY;
            } else if ( MapMassOf_enemes.get(values).y >= person_image.y + person_image.sprite.offsetHeight ) MapMassOf_enemes.get(values).y -= velocityY;
        } else {
            MapMassOf_enemes.get(values).x += velocityX;
        }
    }
}

let person_score = 0;
let isGameLoop = true;

function checkCoordsEnemes() {
    for(let values of MapMassOf_enemes.keys() ) {
        if(
            (
                MapMassOf_enemes.get(values).x + MapMassOf_enemes.get(values).sprite.offsetWidth >= person_image.x - velocityX &&
                MapMassOf_enemes.get(values).x <= person_image.x + person_image.sprite.offsetWidth + velocityX
            ) &&
            (
                MapMassOf_enemes.get(values).y + MapMassOf_enemes.get(values).sprite.offsetHeight >= person_image.y - velocityY &&
                MapMassOf_enemes.get(values).y <= person_image.y + person_image.sprite.offsetHeight + velocityX
            ) 
        ) {
            isGameLoop = false;
            alert("Вы проиграли!!!");
        }
    }
}

let score_domElement = document.getElementById("score_view_id");

function CheckCoordsEnemesForBullets() {
    for(let values of MapMassOf_enemes.keys()) {
        if(mass_bullet.length != 0) {
            for(let i = 0; i < mass_bullet.length; i++) {
                if(
                   mass_bullet[i].x <= MapMassOf_enemes.get(values).x + 51 &&
                   mass_bullet[i].y <= MapMassOf_enemes.get(values).y + 150 &&
                   mass_bullet[i].y + 46 >= MapMassOf_enemes.get(values).y
                ) {
                    mass_bullet.splice(i,1);
                    MapMassOf_enemes.get(values).x = Math.floor( -( 51 + (Math.random() * enemes_randomMaxMinus - 51) ) );
                    MapMassOf_enemes.get(values).y = Math.floor( Math.random() * 400 );
                    person_score++;
                    switch(person_score) {
                        case 50 : {
                            alert("Ученики не довольны!");
                        }break;
                        case 500 : {
                            alert("Ученики уже желают вашей смерти!");
                        }break;
                        case 1000 : {
                            alert("Историк победил!");
                        }break;
                    }
                    score_domElement.innerHTML = person_score;
                }
            }
        }
    }
}





















// Управление
/* Персонажем */
window.addEventListener("keydown", ev => {
    if(person_image.checkGran()){
        if (ev.keyCode == 87) {
            person_image.GoYMinus();
        } else if(ev.keyCode == 83) {
            person_image.GoYPlus();
        } else if(ev.keyCode == 68) {
            person_image.GoXPlus();
        } else if(ev.keyCode == 65) {
            person_image.GoXMinus();
        }
    }
    if(ev.keyCode == 32){
        addBullet();
    }
});

canvas.addEventListener("mousemove" , (ev) => {
    person_image.x = ev.offsetX - 70;
    person_image.y = ev.offsetY - 70;
});

canvas.addEventListener("click" , () => {
    addBullet();
});
















// Игровой цикл
function drawElements() {
    fon_image.draw();
    oneTree_image.draw();
    twoTree_image.draw();
    person_image.draw();
    setSRCForBullets();
    drawBullets();
    drawEnemes();
}

function checkElements() {
    checkGranBullets();
    checkCoordsEnemes();
    CheckCoordsEnemesForBullets();
}

function updateElements() {
    updateCoordsEnemes();
}

function gameLoop() {
    if(isGameLoop == false) return;
    ctx.clearRect(0,0,800,600);
    drawElements();
    checkElements();
    updateElements();
    window.requestAnimationFrame(gameLoop);
}

MapMassOf_enemes.get("Vlad").sprite.onload = () => { gameLoop() };