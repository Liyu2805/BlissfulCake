const playButton = document.getElementById("playButton");
const birthdayGif = document.getElementById("birthdayGif");

playButton.addEventListener("click", () => {
  // fade in GIF
  birthdayGif.style.opacity = 1;

  // Optional: play button bounce
  playButton.style.transform = "scale(1.4) rotate(10deg)";
  setTimeout(() => {
    playButton.style.transform = "scale(1.2) rotate(-10deg)";
  }, 300);
});
