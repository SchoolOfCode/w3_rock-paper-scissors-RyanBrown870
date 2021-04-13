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

let playOn = true;
while (playOn === true) {
  let computerMove = genComputerMove();
  let playerMove = prompt('move');

  let result = game(playerMove, computerMove);

  alert(
    `Player is ${playerMove}, computer is ${computerMove}, Result is ${result}`
  );

  playOn = confirm('Play again?');
}
