// PAPER - rock

// rock - PAPER

// ROCK - scissors

// scissors - ROCK

// SCISSORS - paper

// paper - SCISSORS

// paper - paper

// scissors - scissors

// rock - rock

function genComputerMove() {
  let moveSet = ['rock', 'paper', 'scissors'];
  return moveSet[Math.floor(Math.random() * 3)];
}

function game(player, computer) {
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

let gameData = {
  playOn: true,
  score: 0,
  numOfGames: 0,
  wins: 0,
  draws: 0,
  losses: 0,
};

while (gameData.playOn === true) {
  let computerMove = genComputerMove();
  let playerMove = prompt('move');

  let result = game(playerMove, computerMove);

  // Update records
  gameData.score += result;
  gameData.numOfGames++;
  if (result === 1) {
    gameData.wins++;
  } else if (result === 0) {
    gameData.draws++;
  } else {
    gameData.losses++;
  }

  alert(
    `Player is ${playerMove}, computer is ${computerMove}, Result is ${result}. Score is ${gameData.score}. Games played: ${gameData.numOfGames}. Total wins: ${gameData.wins}. Total draws: ${gameData.draws}. Total losses: ${gameData.losses}.`
  );

  gameData.playOn = confirm('Play again?');
}
