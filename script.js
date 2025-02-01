let slideIndex = 0;

// Show the first slide initially
showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  let slides = document.getElementsByClassName("slide");

  // Wrap around if at the end or beginning
  if (n >= slides.length) { slideIndex = 0; }
  if (n < 0) { slideIndex = slides.length - 1; }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Show the current slide
  slides[slideIndex].style.display = "block";
}

// Confetti Animation
const confettiSettings = {
  target: 'confetti',
  max: 150,
  size: 1.5,
  animate: true,
  props: ['circle', 'square', 'triangle', 'line'],
  colors: [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]],
  clock: 25,
  rotate: true,
  start_from_edge: true,
  respawn: true,
};

const confetti = new ConfettiGenerator(confettiSettings);
confetti.render();