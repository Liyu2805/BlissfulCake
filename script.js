const playButton = document.getElementById("playButton");

playButton.addEventListener("click", () => {

  // Replace whole page with GIF + audio
  document.body.innerHTML = `
    <img src="assets/birthday.gif"
      style="width:100vw; height:100vh; object-fit:cover; display:block;">

    <audio id="song" autoplay loop>
      <source src="assets/HB.mp3" type="audio/mpeg">
    </audio>
  `;

  const song = document.getElementById("song");

  // Try autoplay
  song.play().catch(() => {
    console.log("Autoplay blocked. Waiting for click.");
    document.addEventListener("click", () => song.play(), { once: true });
  });
});
