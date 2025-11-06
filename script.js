// Grab elements
const playButton = document.getElementById("playButton");
const birthdayGif = document.getElementById("birthdayGif");
const wishesContainer = document.getElementById("wishesContainer");
const wishes = wishesContainer.querySelectorAll("p");

// Click event for the play button
playButton.addEventListener("click", () => {
  // Fade in GIF background
  birthdayGif.style.opacity = 1;

  // Show wishes container
  wishesContainer.style.display = "flex"; // use flex if you want vertical stacking

  // Animate each wish one by one
  wishes.forEach((wish, index) => {
    wish.style.opacity = 0;              // start invisible
    wish.style.transform = "translateY(20px)";
    wish.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    
    // staggered animation
    setTimeout(() => {
      wish.style.opacity = 1;
      wish.style.transform = "translateY(0)";
    }, index * 500); // each wish appears 0.5s after the previous
  });

  // Optional: bounce the play button for extra magic
  playButton.style.transform = "scale(1.4) rotate(10deg)";
  setTimeout(() => {
    playButton.style.transform = "scale(1.2) rotate(-10deg)";
  }, 300);

  // Optional: hide the play button completely
  // playButton.style.display = "none";
});
