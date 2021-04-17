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

if (playerMove === 'paper') {
  if (computerMove === 'rock') {
    console.log('paper player wins');
  } else if (computerMove === 'scissors') {
    console.log('scissors computer wins');
  } else {
    console.log('paper draw');
  }
}

if (playerMove === 'rock') {
  if (computerMove === 'paper') {
    console.log('rock computer wins');
  } else if (computerMove === 'scissors') {
    console.log('rock player wins');
  } else {
    console.log('rock draw');
  }
}

if (playerMove === 'scissors') {
  if (computerMove === 'rock') {
    console.log('scissors computer wins');
  } else if (computerMove === 'paper') {
    console.log('scissors player wins');
  } else {
    console.log('scissors draw');
  }
}
