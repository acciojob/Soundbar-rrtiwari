const sounds = [
  "harmonica1.mp3",
  "harmonica2.mp3",
  "harmonica3.mp3",
  "harmonica4.mp3",
  "harmonica5.mp3",
  "harmonica6.mp3"
];

const buttons = document.querySelectorAll(".btn");
const stopButton = document.querySelector(".stop");
let audio = null;

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (audio) {
      audio.pause();
    }
    audio = new Audio(`sounds/${sounds[index]}`);
    audio.play();
  });
});

stopButton.addEventListener("click", () => {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
});

