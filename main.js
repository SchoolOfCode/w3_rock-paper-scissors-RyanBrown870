// PAPER - rock

// rock - PAPER

// ROCK - scissors

// scissors - ROCK

// SCISSORS - paper

// paper - SCISSORS

// paper - paper

// scissors - scissors

// rock - rock

let result;
let moveSet = ['rock', 'paper', 'scissors'];
let computerMove = moveSet[Math.floor(Math.random() * 3)];

let playerMove = prompt('move');
// console.log('player is', playerMove);
// console.log('computer is', computerMove);

function game(player, computer) {
  if (player === 'paper') {
    if (computer === 'rock') {
      return 1;
      console.log('paper player wins');
    } else if (computer === 'scissors') {
      return -1;
      console.log('scissors computer wins');
    } else {
      return 0;
      console.log('paper draw');
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

let result = game(playerMove, computerMove);
