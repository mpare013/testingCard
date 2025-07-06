function openBrickBreaker(){
    document.getElementById("window10").style.display = "block";
    bringWindowToFront(document.getElementById("window10"));

    if (!gameStarted && !context) {
        board = document.getElementById("board");
        board.height = boardHeight;
        board.width = boardWidth;
        context = board.getContext("2d");

        context.fillStyle = "#adadad";
        context.fillRect(player.x, player.y, player.width, player.height);

        document.addEventListener("keydown", movePlayer);
        createBlocks();
        requestAnimationFrame(update);
    }

    gamePaused = false;
}


// Globals
let board;
let boardWidth = 800;
let boardHeight = 700;
let context;

let gameStarted = false;
let gameOver = false;
let gamePaused= false;
// Player
let playerWidth = 80;
let playerHeight = 15;
let playerVelocityX = 15;

let player = {
    x: boardWidth / 2 - playerWidth / 2,
    y: boardHeight - playerHeight - 5,
    width: playerWidth,
    height: playerHeight,
    velocityX: playerVelocityX
};

// Ball
let ballWidth = 16;
let ballHeight = 16;
let ballVelocityX = 3;
let ballVelocityY = 2;

let ball = {
    x: boardWidth / 2,
    y: boardHeight / 2,
    width: ballWidth,
    height: ballHeight,
    velocityX: ballVelocityX,
    velocityY: ballVelocityY
};

// Blocks
let blockArray = [];
let blockWidth = 60;
let blockHeight = 20;
let blockColumns = 8;
let blockRows = 10;
let blockMaxRows = 10;
let blockCount = 0;
let blockX = (boardWidth - blockColumns * (blockWidth + 10)) / 2;
let blockY = 45;

let score = 0;

// Audio
let hitBrickSound = new Audio('audio/hitBrick.mp3');
let hitPaddleSound = new Audio('audio/hitBrick.mp3'); 



function update() {
    gameLoopId = requestAnimationFrame(update);
    context.clearRect(0, 0, board.width, board.height);
    if (gamePaused) return;
    // start message
    if (!gameStarted) {
        context.font = "30px windows95Font";
        context.fillStyle = "white";
        context.fillText("PRESS 'SPACE' TO PLAY", 250, 300);
        return;
    }

    if (gameOver) {
        context.font = "30px windows95Font";
        context.fillStyle = "white";
        context.fillText("GAME OVER: PRESS 'SPACE' TO PLAY AGAIN", 130, 300);
        return;
    }

    // Draw player
    context.fillStyle = "lightgreen";
    context.fillRect(player.x, player.y, player.width, player.height);

    // Move & draw ball
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;
    context.fillStyle = "white";
    context.fillRect(ball.x, ball.y, ball.width, ball.height);

    // Ball collisions with paddle
    if (topCollision(ball, player) || bottomCollision(ball, player)) {
        ball.velocityY *= -1;
        hitPaddleSound.play();
    } else if (leftCollision(ball, player) || rightCollision(ball, player)) {
        ball.velocityX *= -1;
    }

    // Ball wall collisions
    if (ball.y <= 0) {
        ball.velocityY *= -1;
    } else if (ball.x <= 0 || (ball.x + ball.width >= boardWidth)) {
        ball.velocityX *= -1;
    } else if (ball.y + ball.height >= boardHeight) {
        gameOver = true;
    }

    // Draw blocks
    context.fillStyle = "#adadad";
    for (let i = 0; i < blockArray.length; i++) {
        let block = blockArray[i];
        if (!block.break) {
            if (topCollision(ball, block) || bottomCollision(ball, block)) {
                block.break = true;
                ball.velocityY *= -1;
                score += 100;
                blockCount -= 1;
                hitBrickSound.play();
            } else if (leftCollision(ball, block) || rightCollision(ball, block)) {
                block.break = true;
                ball.velocityX *= -1;
                score += 100;
                blockCount -= 1;
                hitBrickSound.play();
            }
            context.fillRect(block.x, block.y, block.width, block.height);
        }
    }

    // Next level
    if (blockCount == 0) {
        score += 100 * blockRows * blockColumns;
        blockRows = Math.min(blockRows + 1, blockMaxRows);
        createBlocks();
    }

    // Score
    context.font = "22px windows95Font";
    context.fillStyle = "white";
    context.fillText(score, 10, 25);
}

function movePlayer(e) {
    if (!gameStarted) {
        if (e.code == "Space") {
            gameStarted = true;
            resetGame();
        }
        return;
    }

    if (gameOver) {
        if (e.code == "Space") {
            resetGame();
        }
        return;
    }

    if (e.code == "ArrowLeft") {
        let nextX = player.x - player.velocityX;
        if (!outOfBounds(nextX)) {
            player.x = nextX;
        }
    } else if (e.code == "ArrowRight") {
        let nextX = player.x + player.velocityX;
        if (!outOfBounds(nextX)) {
            player.x = nextX;
        }
    }
}

function outOfBounds(xPosition) {
    return (xPosition < 0 || xPosition + playerWidth > boardWidth);
}

function detectCollision(a, b) {
    return a.x < b.x + b.width &&
           a.x + a.width > b.x &&
           a.y < b.y + b.height &&
           a.y + a.height > b.y;
}

function topCollision(ball, block) {
    return detectCollision(ball, block) && (ball.y + ball.height) >= block.y;
}

function bottomCollision(ball, block) {
    return detectCollision(ball, block) && (block.y + block.height) >= ball.y;
}

function leftCollision(ball, block) {
    return detectCollision(ball, block) && (ball.x + ball.width) >= block.x;
}

function rightCollision(ball, block) {
    return detectCollision(ball, block) && (block.x + block.width) >= ball.x;
}

function createBlocks() {
    blockArray = [];
    for (let c = 0; c < blockColumns; c++) {
        for (let r = 0; r < blockRows; r++) {
            let block = {
                x: blockX + c * blockWidth + c * 10,
                y: blockY + r * blockHeight + r * 10,
                width: blockWidth,
                height: blockHeight,
                break: false
            };
            blockArray.push(block);
        }
    }
    blockCount = blockArray.length;
}

function resetGame() {
    gameOver = false;
    score = 0;
    player = {
        x: boardWidth / 2 - playerWidth / 2,
        y: boardHeight - playerHeight - 5,
        width: playerWidth,
        height: playerHeight,
        velocityX: playerVelocityX
    };
    ball = {
        x: boardWidth / 2,
        y: boardHeight / 2,
        width: ballWidth,
        height: ballHeight,
        velocityX: ballVelocityX,
        velocityY: ballVelocityY
    };
    blockRows = 10;
    createBlocks();
}

function exitBrickBreaker(){
    document.getElementById("window10").style.display = "none";
    
    hitBrickSound.pause();
    hitBrickSound.currentTime = 0;

    hitPaddleSound.pause();
    hitPaddleSound.currentTime = 0;
    gamePaused= true;
}
