// global constants
const cluePauseTime = 333; // how long to pause in between clues
const nextClueWaitTime = 1000; // how long to wait before starting playback of the clue sequence
const numButtons = 6; // how many buttons there are
const patternLen = 3; // length of the pattern (how many buttons in the pattern)
const maxStrikes = 3; // how many strikes the user gets
const timeLimit = 3; // maximum seconds per turn

// global variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; // must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; // how long to hold each clue's light/sound
var strikesLeft = 0; // how many strikes the user has left
var id; // to be used by clearInterval()
var curr = timeLimit; // current time left

function startGame() {
  // initialize game variables
  progress = 0;
  gamePlaying = true;
  resetStrikes();
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  console.log("hello");
  generatePattern(patternLen);
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  resetTimer();
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 538.6,
  6: 608.6
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  resetTimer();
  guessCounter = 0;
  clueHoldTime -= 50;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  setTimeout(startTimer, delay);
}

function loseGame() {
  stopGame();
  alert("Game over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game over. You won!");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  if (btn == pattern[guessCounter]) {
    // Guess was correct!
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        // GAME OVER: WIN!
        winGame();
      } else {
        // Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    } else {
      // so far so good... check the next guess
      guessCounter++;
    }
  } else {
    strike();
  }
}

function generatePattern(len) {
  pattern = []; // clear pattern array
  var rand = 0;
  // iterate len times
  for (let i = 1; i <= len; ++i) {
    // generate random number in range [1, numButtons] and add to pattern array
    rand = Math.floor(Math.random() * numButtons + 1);
    pattern.push(rand);
  }
}

function startTimer() {
  document.getElementById("timer").classList.remove("hidden");
  id = setInterval(decrementTimer, 1000);
}

function stopTimer() {
  document.getElementById("timer").classList.add("hidden");
  clearInterval(id);
}

function resetTimer() {
  stopTimer();
  curr = timeLimit;
  document.getElementById("timer").innerHTML = curr;
}

function decrementTimer() {
  document.getElementById("timer").innerHTML = --curr;
  if (curr == 0) {
    resetTimer();
    strike();
  }
}

function strike() {
  strikesLeft--;
  setStrikes(strikesLeft);
  // GAME OVER: LOSE
  if (strikesLeft == 0) loseGame();
  else playClueSequence();
}

function setStrikes(strikesLeft) {
  document.getElementById("strikes").innerHTML =
    "Strikes remaining: " + strikesLeft;
}

function resetStrikes() {
  strikesLeft = maxStrikes;
  document.getElementById("strikes").innerHTML =
    "Strikes remaining: " + strikesLeft;
}
