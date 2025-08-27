const sounds = [
  "h1.mp3",
  "h2.mp3",
  "h3.mp3",
  "h4.mp3",
  "h5.mp3",
  "h6.mp3",
  "h7.mp3"
];

const buttons = document.querySelectorAll(".btn");
const stopButton = document.querySelector(".stop");
const player = document.getElementById("player");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    player.src = `sounds/${sounds[index]}`;
    player.play().catch(err => console.warn(err));
  });
});

stopButton.addEventListener("click", () => {
  player.pause();
  player.currentTime = 0;
});


