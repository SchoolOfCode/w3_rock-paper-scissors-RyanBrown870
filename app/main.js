const quotes = [
  'The good fighters of old first put themselves beyond the possibility of defeat, and then waited for an opportunity of defeating the enemy.',
  'All warfare is based on deception.',
  'The supreme art of war is to subdue the enemy without fighting.',
  "Hence to fight and conquer in all your battles is not supreme excellence; supreme excellence consists in breaking the enemy's resistance without fighting.",
  'Strategy without tactics is the slowest route to victory. Tactics without strategy is the noise before defeat.',
  'Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win.',
  'The opportunity to secure ourselves against defeat lies in our own hands, but the opportunity of defeating the enemy is provided by the enemy himself.',
  'Opportunities multiply as they are seized.',
  'There is no instance of a nation benefitting from prolonged warfare.',
  'Pretend inferiority and encourage his arrogance.',
];

let moveSet = ['rock', 'paper', 'scissors'];

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

let imgData = {
  rock: {
    src: 'https://source.unsplash.com/e25vPueMBY4',
    alt: 'Hand fist photo by Diana Polekhina from Unsplash.com',
    href: 'https://unsplash.com/photos/e25vPueMBY4',
  },
  paper: {
    src: 'https://source.unsplash.com/HrfV0D8ddcs',
    alt: 'Hand (spread) photo by Diana Polekhina from Unsplash.com',
    href: 'https://unsplash.com/photos/HrfV0D8ddcs',
  },
  scissors: {
    src: 'https://source.unsplash.com/XT6rBc_XKUI',
    alt: 'Hand (two fingers) photo by Diana Polekhina from Unsplash.com',
    href: 'https://unsplash.com/photos/XT6rBc_XKUI',
  },
};

// Have a random username applied when no name is given? Use an api call?
// Try including argument for function so only send the value through once?
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

  let form = document.getElementById('form');
  form.style.display = 'none';
  let userName = document.getElementById('user');
  userName.innerText = `${gameData.user}`;
  userName.style.display = 'block';
  let separator = document.getElementById('user-underline');
  separator.style.display = 'flex';
}

// Add enter keydown listener
// Bug - clears the console, is it firing multiple times?
document.getElementById('username-input').addEventListener(
  'keydown',
  (event) => {
    if (event.defaultPrevented) {
      return;
    }
    if (event.key === 'Enter') {
      console.log('enter event listener');
      formSubmit();
    }
    event.preventDefault;
  },
  false
);

function randomArr(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
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
  let resultsContainer = document.getElementById('game-score-container');
  let gameContainer = document.getElementById('game-container');
  let resultsContainerStyle = window.getComputedStyle(
    document.getElementById('game-score-container')
  ).display;

  // Check style of the results div and toggle display
  resultsContainerStyle === 'none'
    ? ((resultsContainer.style.display = 'flex'),
      (gameContainer.style.display = 'none'))
    : ((resultsContainer.style.display = 'none'),
      (gameContainer.style.display = 'flex'));
}

function displayResult() {
  let p = document.getElementById('display-result');
  if (gameData.result === 1) {
    p.innerText = 'WON!';
  } else if (gameData.result === 0) {
    p.innerText = 'DRAW!';
  } else if (gameData.result === -1) {
    p.innerText = 'LOST!';
  }

  let currentRound = document.getElementById('current-round');
  currentRound.innerText = `ROUND ${gameData.numOfGames}`;
  let winCounter = document.getElementById('win-counter');
  winCounter.innerText = `${gameData.wins}`;
  let drawCounter = document.getElementById('draw-counter');
  drawCounter.innerText = `${gameData.draws}`;
  let lossCounter = document.getElementById('loss-counter');
  lossCounter.innerText = `${gameData.losses}`;

  let imgPlayer = document.getElementById('img-player');
  let imgComputer = document.getElementById('img-computer');
  let aPlayer = document.getElementById('player-img-link');
  let aComputer = document.getElementById('computer-img-link');

  switch (gameData.playerMove) {
    case 'rock':
      imgPlayer.src = imgData.rock.src;
      imgPlayer.alt = imgData.rock.alt;
      aPlayer.href = imgData.rock.href;
      break;
    case 'paper':
      imgPlayer.src = imgData.paper.src;
      imgPlayer.alt = imgData.paper.alt;
      aPlayer.href = imgData.paper.href;
      break;
    case 'scissors':
      imgPlayer.src = imgData.scissors.src;
      imgPlayer.alt = imgData.scissors.alt;
      aPlayer.href = imgData.scissors.href;
      break;
    default:
      break;
  }

  switch (gameData.computerMove) {
    case 'rock':
      imgComputer.src = imgData.rock.src;
      imgComputer.alt = imgData.rock.alt;
      aComputer.href = imgData.rock.href;
      break;
    case 'paper':
      imgComputer.src = imgData.paper.src;
      imgComputer.alt = imgData.paper.alt;
      aComputer.href = imgData.paper.href;
      break;
    case 'scissors':
      imgComputer.src = imgData.scissors.src;
      imgComputer.alt = imgData.scissors.alt;
      aComputer.href = imgData.scissors.href;
      break;
    default:
      break;
  }

  // Generate quote
  let quoteHeader = document.getElementById('quote');
  quoteHeader.innerText = randomArr(quotes);

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
  let computerMove = randomArr(moveSet);

  let result = calcWinner(playerMove, computerMove);

  updateResults(result, playerMove, computerMove);
  displayResult();
  console.log(gameData);
}
