const playButton = document.getElementById("playButton");

playButton.addEventListener("click", () => {
  // Opens the GIF on the same page
  document.body.innerHTML = `<img src="assets/birthday.gif" style="width:100%; height:100vh;">`;
});

  // Optional: play button bounce
  playButton.style.transform = "scale(1.4) rotate(10deg)";
  setTimeout(() => {
    playButton.style.transform = "scale(1.2) rotate(-10deg)";
  }, 300);

window.addEventListener('DOMContentLoaded', () => {
  const song = document.getElementById('song');
  setTimeout(() => {
    song.play().catch(err => {
      console.log("🎵 Autoplay was blocked, waiting for user interaction.");
    });
  }, 100);
});

document.addEventListener("click", () => {
  const song = document.getElementById("song");
  if (song) {
    song.play().catch((e) => {
      console.log("Autoplay prevented:", e);
    });
  }
});