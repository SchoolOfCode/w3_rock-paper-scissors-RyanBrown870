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
  user: '',
};

function formSubmit() {
  let usernameInput = document.getElementById('username-input');
  let username = usernameInput.value;

  if (username.length > 10) {
    alert('Your username must be 10 or fewer characters');
  } else if (!username[0].match(/[a-zA-Z]/)) {
    alert(
      'Your username must begin with a letter. Numbers or special characters are not allowed.'
    );
  } else if (username[0].match(/[a-z]/)) {
    alert('Your username must begin with an uppercase letter');
  } else {
    gameData.user = username;
  }
}

//

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
  // Get div elements and the current style applied
  let resultsContainer = document.getElementById('results-container');
  let gameContainer = document.getElementById('game-container');
  let resultsContainerStyle = window.getComputedStyle(
    document.getElementById('results-container')
  ).display;

  // Check style of the results div and toggle display
  resultsContainerStyle === 'none'
    ? ((resultsContainer.style.display = 'block'),
      (gameContainer.style.display = 'none'))
    : ((resultsContainer.style.display = 'none'),
      (gameContainer.style.display = 'block'));
}

function displayResult() {
  let p = document.getElementById('game-data-text');
  p.innerText = `Player is ${gameData.playerMove}, computer is ${gameData.computerMove}, result is ${gameData.result}. Score is ${gameData.score}. Games played: ${gameData.numOfGames}. Total wins: ${gameData.wins}. Total draws: ${gameData.draws}. Total losses: ${gameData.losses}.`;
  toggleDisplay();
}

function updateResults(result, playerMove, computerMove) {
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
}

function playGame(playerMove) {
  let computerMove = genComputerMove();

  let result = calcWinner(playerMove, computerMove);

  updateResults(result, playerMove, computerMove);
  displayResult();
}
