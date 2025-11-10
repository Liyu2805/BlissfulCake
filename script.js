const song = document.getElementById("song");

  // Try autoplay
song.play().catch(() => {
    console.log("Autoplay blocked — waiting for click.");
    document.addEventListener("click", () => song.play(), { once: true });
});
