const ball = document.querySelector('.ball');
const playerPaddle = document.getElementById('playerPaddle');
const aiPaddle = document.getElementById('aiPaddle');

let ballX = 0;
let ballY = 0;
let ballSpeedX = 2;
let ballSpeedY = 2;

const moveBall = () => {
    ballX += ballSpeedX;
    ballY += ballSpeedY;
    
    if (ballX >= 580 || ballX <= 0) {
        ballSpeedX = -ballSpeedX;
    }
    
    if (ballY >= 380 || ballY <= 0) {
        ballSpeedY = -ballSpeedY;
    }

    if (ballX >= 600) {
        // Reset the ball if it goes beyond the AI paddle
        ballX = 300;
        ballY = 200;
    }
    
    ball.style.transform = `translate(${ballX}px, ${ballY}px)`;
    
    // Move the AI paddle based on the ball's position
    const aiPaddleY = ballY - 40;
    aiPaddle.style.transform = `translate(0, ${aiPaddleY}px)`;

    requestAnimationFrame(moveBall);
}

moveBall();
