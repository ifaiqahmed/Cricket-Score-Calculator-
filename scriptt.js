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
          currentOver.push(button.textContent);

          if (button.id === 'wicket') {
              totalWickets++;
          } else {
              totalScore += value;
          }

          if (currentOver.length === ballsPerOver) {
              displayOver();
              currentOver = [];
              overCount++;
              if (overCount === maxOvers) {
                  gameOver();
              }
          }
          scoreUpdate();
      });
  });

  function scoreUpdate() {
      scoreDisplay.textContent = `Current Over: ${currentOver.join(', ')}`;
      calculationDisplay.textContent = `Total Score: ${totalScore} runs, Wickets: ${totalWickets}`;
  }

  function displayOver() {
      setTimeout(() => {
          scoreDisplay.textContent = '';
      }, 2000);
  }

  function gameOver() {
      calculationDisplay.textContent = `Game Over! The team scored ${totalScore} runs with ${totalWickets} wickets down. Please start the match again.`;
      disableButtons();
  }

  function disableButtons() {
      buttons.forEach(button => {
          button.disabled = true;
      });
  }
});
