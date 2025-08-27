const sounds = [
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
];

const buttons = document.querySelectorAll(".btn");
const stopButton = document.querySelector(".stop");
const player = document.getElementById("player");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    player.src = sounds[index];
    player.play().catch(err => console.warn(err));
  });
});

stopButton.addEventListener("click", () => {
  player.pause();
  player.currentTime = 0;
});



