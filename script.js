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
let audio = null;

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (audio) {
      audio.pause();
    }

    try {
      audio = new Audio(`sounds/${sounds[index]}`);
      audio.play().catch(err => {
        console.warn("Audio playback failed:", err);
      });
    } catch (err) {
      console.warn("Error creating Audio object:", err);
    }
  });
});

stopButton.addEventListener("click", () => {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
});

