// juego.js
let score = 0;
let timeLeft = 30;
let timer;
const gameArea = document.querySelector('.game-area');
const target = document.getElementById('target');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const startButton = document.getElementById('start-game');
const gameOverScreen = document.getElementById('game-over');
const finalScore = document.getElementById('final-score');
const restartButton = document.getElementById('restart-game');

// Mueve el objetivo a una posición aleatoria dentro del área de juego
function moveTarget() {
    const areaWidth = gameArea.offsetWidth;
    const areaHeight = gameArea.offsetHeight;
    const targetSize = target.offsetWidth;

    const randomX = Math.floor(Math.random() * (areaWidth - targetSize));
    const randomY = Math.floor(Math.random() * (areaHeight - targetSize));

    target.style.left = `${randomX}px`;
    target.style.top = `${randomY}px`;
}

// Inicia el juego
function startGame() {
    score = 0;
    timeLeft = 30;
    scoreDisplay.textContent = score;
    timeDisplay.textContent = timeLeft;

    gameOverScreen.classList.add('hidden');
    target.style.display = 'block';
    moveTarget();

    timer = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

// Finaliza el juego
function endGame() {
    clearInterval(timer);
    target.style.display = 'none';
    gameOverScreen.classList.remove('hidden');
    finalScore.textContent = score;
}

// Suma puntos al hacer clic en el objetivo
target.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    moveTarget();
});

// Reinicia el juego
restartButton.addEventListener('click', startGame);
startButton.addEventListener('click', startGame);
