const introText = document.getElementById("introText");
const mainDiv = document.getElementById("main");
const startButton = document.getElementById("startButton");
const countdownDisplay = document.getElementById("countdown");
const timerDisplay = document.getElementById("timer");
const clickCountDisplay = document.getElementById("clickCount");
const clickButton = document.getElementById("clickButton");
const endVideo = document.getElementById("endVideo");

let clickCount = 0;
let timeLeft = 1;

// Function to start the countdown before the game starts
function startCountdown() {
  let countdown = 3;
  countdownDisplay.textContent = countdown;
  const countdownInterval = setInterval(() => {
    countdown--;
    countdownDisplay.textContent = countdown;

    if (countdown <= 0) {
      clearInterval(countdownInterval);
      countdownDisplay.style.display = "none";
      startGame(); // Start the game when the countdown ends
    }
  }, 1000);
}

// Function to start the game (timer and click count)
function startGame() {
  timerDisplay.style.display = "block";
  clickCountDisplay.style.display = "block";
  clickButton.style.display = "block";
  clickCount = 0;
  clickCountDisplay.textContent = "Clicks: 0";
  startTimer();
}

// Timer countdown function
function startTimer() {
  const timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Time Left: ${timeLeft}`;
    
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endGame(); // End the game when time runs out
    }
  }, 1000);
}

// Function to handle click button
clickButton.addEventListener("click", () => {
  clickCount++;
  clickCountDisplay.textContent = `Clicks: ${clickCount}`;
});

// Function to end the game, hide everything, and show video
function endGame() {
  // Hide the game elements
  timerDisplay.style.display = "none";
  clickButton.style.display = "none";
  clickCountDisplay.style.display = "none";

  // Show and play the video
  endVideo.style.display = "block";
  endVideo.play();
}

// Event listener to start the challenge
startButton.addEventListener("click", () => {
  introText.style.display = "none"; // Hide the intro text on button click
  startButton.style.display = "none";
  startCountdown(); // Start the countdown on button click
});
