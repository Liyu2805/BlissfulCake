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

  document.getElementById("playbutton").addEventListener("click", () => {

  // Replace whole body with your GIF
  document.body.innerHTML = `
    <img id="gif" src="birthday.gif"
      style="width:100vw; height:100vh; object-fit:cover; display:block;">
    <audio id="song" autoplay loop>
      <source src="assets/HB.mp3" type="audio/mpeg">
    </audio>
  `;

  // Try to play the song
  const song = document.getElementById("song");
  song.play().catch(() => {
    console.log("Autoplay blocked — waiting for click");

    // fallback: first click starts music
    document.addEventListener("click", () => {
      song.play().catch(() => {});
    }, { once: true });
  });
});
