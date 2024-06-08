document.addEventListener('DOMContentLoaded', function () {
    const scoreDisplay = document.getElementById('score');
    const calculationDisplay = document.getElementById('calculation');
    const buttons = document.querySelectorAll('.buttons button');

    let currentOver = [];
    let totalScore = 0;
    let totalWickets = 0;
    let overCount = 0;
    const maxOvers = 5;
    const ballsPerOver = 6;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = parseInt(button.value);
            if (button.id === 'wicket') {
                totalWickets++;
            } else {
                totalScore += value;
            }
            currentOver.push(button.textContent);
            updateCurrentOver();

            if (currentOver.length === ballsPerOver) {
                overCount++;
                displayOver();
                currentOver = [];
                if (overCount === maxOvers) {
                    displayTotal();
                }
            }
        });
    });

    function updateCurrentOver() {
        scoreDisplay.textContent = `Current Over: ${currentOver.join(', ')}`;
        calculationDisplay.textContent = `Total Score: ${totalScore} runs, Wickets: ${totalWickets}`;
    }

    function displayOver() {
        setTimeout(() => {
            scoreDisplay.textContent = '';
        }, 2000);
    }

    function displayTotal() {
        calculationDisplay.textContent = `The team scored ${totalScore} runs with ${totalWickets} wickets down`;
    }
});
