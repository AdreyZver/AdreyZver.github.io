const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const ground = new Image();
ground.src = "img/background.png";

const food = new Image();
food.src = "img/food.png";

let box = 32;

let score = 0;

let Food = {
    x: Math.floor(Math.random() * 17 + 1) * box,
    y: Math.floor(Math.random() * 15 + 3) * box
};

let snake = [];
snake[0] = {
    x: 9*box,
    y: 10*box
};

document.addEventListener("keydown",direction);

let dir;

function direction(event){
    if(event.keyCode == 37 && dir != "right") dir = "left";
    else if(event.keyCode == 38 && dir != "down") dir = "up";
    else if(event.keyCode == 39 && dir != "left") dir = "right";
    else if(event.keyCode == 40 && dir != "up") dir = "down";
}

function drawGame(){
    ctx.drawImage(ground,0,0);

    ctx.drawImage(food,Food.x, Food.y);

    for(let i = 0; i < snake.length; i++){
        ctx.fillStyle = i == 0 ? "green" : "red";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }

    ctx.fillStyle = "white";
    ctx.font = "50px Arial";
    ctx.fillText(score,box*2.5, box*1.7);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(snakeX == Food.x && snakeY == Food.y){
        score++;
        Food = {
            x: Math.floor(Math.random() * 17 + 1) * box,
            y: Math.floor(Math.random() * 15 + 3) * box
        };
    }else{
        snake.pop();
    }

    snake.pop();

    if(dir == "left") snakeX -= box;
    if(dir == "right") snakeX += box;
    if(dir == "up") snakeY -= box;
    if(dir == "down") snakeY += box;

    let newHead = {
        x: snakeX,
        y: snakeY
    };

    snake.unshift(newHead);

    if(score >= 20 && score < 30){
        document.getElementById("Text").innerText = "Хм, попробуем до 30!";
    } else if(score >= 30){
        document.getElementById("Text").innerText = "Так, есть секретная информация, что эта игра непроходима... С Вас пятерка)))";
    }
}

let game = setInterval(drawGame,100);