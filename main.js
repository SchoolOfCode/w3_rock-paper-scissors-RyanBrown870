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

function game(player, computer) {
  if (player === 'paper') {
    if (computer === 'rock') {
      console.log('paper player wins');
    } else if (computer === 'scissors') {
      console.log('scissors computer wins');
    } else {
      console.log('paper draw');
    }
  }

  if (player === 'rock') {
    if (computer === 'paper') {
      console.log('rock computer wins');
    } else if (computer === 'scissors') {
      console.log('rock player wins');
    } else {
      console.log('rock draw');
    }
  }

  if (player === 'scissors') {
    if (computer === 'rock') {
      console.log('scissors computer wins');
    } else if (computer === 'paper') {
      console.log('scissors player wins');
    } else {
      console.log('scissors draw');
    }
  }
}
