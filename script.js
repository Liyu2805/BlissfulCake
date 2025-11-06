const playButton = document.getElementById("playButton");
const birthdayGif = document.getElementById("birthdayGif");
birthdayGif.classList.add("show"); // triggers the fade-in

playButton.addEventListener("click", () => {
  birthdayGif.style.display = "block"; // show the GIF
});