let score = 0;
let timeLeft = 10;
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const gameButton = document.getElementById('gameButton');

gameButton.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `Puntaje: ${score}`;
});

const timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Tiempo restante: ${timeLeft} segundos`;
    if (timeLeft === 0) {
        clearInterval(timer);
        gameButton.disabled = true;
        alert(`¡Se acabó el tiempo! Tu puntaje final es: ${score}`);
    }
}, 1000);
