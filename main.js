let gameData = {
  playerMove: '',
  computerMove: '',
  playOn: true,
  result: '',
  score: 0,
  numOfGames: 0,
  wins: 0,
  draws: 0,
  losses: 0,
};

function genComputerMove() {
  let moveSet = ['rock', 'paper', 'scissors'];
  return moveSet[Math.floor(Math.random() * 3)];
}

function calcWinner(player, computer) {
  if (player === 'paper') {
    if (computer === 'rock') {
      return 1;
    } else if (computer === 'scissors') {
      return -1;
    } else {
      return 0;
    }
  }

  if (player === 'rock') {
    if (computer === 'paper') {
      return -1;
    } else if (computer === 'scissors') {
      return 1;
    } else {
      return 0;
    }
  }

  if (player === 'scissors') {
    if (computer === 'rock') {
      return -1;
    } else if (computer === 'paper') {
      return 1;
    } else {
      return 0;
    }
  }
}

function toggleDisplay() {
  let resultsContainer = document.getElementById('results-container');
  let gameContainer = document.getElementById('game-container');
  let resultsContainerStyle = window.getComputedStyle(
    document.getElementById('results-container')
  ).display;

  resultsContainerStyle === 'none'
    ? ((resultsContainer.style.display = 'block'),
      (gameContainer.style.display = 'none'))
    : ((resultsContainer.style.display = 'none'),
      (gameContainer.style.display = 'block'));
}

function displayResult() {
  let pTagResult = document.getElementById('game-data-text');
  pTagResult.innerText = `Player is ${gameData.playerMove}, computer is ${gameData.computerMove}, result is ${gameData.result}. Score is ${gameData.score}. Games played: ${gameData.numOfGames}. Total wins: ${gameData.wins}. Total draws: ${gameData.draws}. Total losses: ${gameData.losses}.`;
  toggleDisplay();
}

function playGame(playerMove) {
  let computerMove = genComputerMove();

  let result = calcWinner(playerMove, computerMove);

  // Update game data
  gameData.result = result;
  gameData.playerMove = playerMove;
  gameData.computerMove = computerMove;
  gameData.score += result;
  gameData.numOfGames++;
  if (result === 1) {
    gameData.wins++;
  } else if (result === 0) {
    gameData.draws++;
  } else {
    gameData.losses++;
  }

  displayResult();
}
