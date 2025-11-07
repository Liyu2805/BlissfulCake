const playButton = document.getElementById("playButton");

playButton.addEventListener("click", () => {

document.body.innerHTML = `
  <div style="
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
  ">
    <img src="assets/birthday.gif"
         style="
           max-width: 90vw;
           max-height: 90vh;
           width: auto;
           height: auto;
           object-fit: contain;
         ">
</div>

  <audio id="song" autoplay loop>
    <source src="assets/HB.mp3" type="audio/mpeg">
  </audio>
`;

  const song = document.getElementById("song");

  // Try autoplay
  song.play().catch(() => {
    console.log("Autoplay blocked — waiting for click.");
    document.addEventListener("click", () => song.play(), { once: true });
  });
});
