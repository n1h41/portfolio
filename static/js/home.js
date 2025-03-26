ScrollReveal().reveal(".intro", {
  reset: true,
  delay: 200,
  duration: 1000,
  origin: "left",
  distance: "50px",
});

ScrollReveal().reveal(".experience", {
  reset: true,
  delay: 200,
  duration: 1000,
  origin: "right",
  distance: "50px",
});

ScrollReveal().reveal(".exp-1", {
  reset: true,
  delay: 200,
  duration: 1000,
  origin: "left",
  distance: "50px",
});

ScrollReveal().reveal(".exp-2", {
  reset: true,
  delay: 200,
  duration: 1000,
  origin: "right",
  distance: "50px",
});

ScrollReveal().reveal(".exp-3", {
  reset: true,
  delay: 200,
  duration: 1000,
  origin: "left",
  distance: "50px",
});

ScrollReveal().reveal(".education", {
  reset: true,
  delay: 200,
  duration: 1000,
  origin: "right",
  distance: "50px",
});

ScrollReveal().reveal(".certifications", {
  reset: true,
  delay: 200,
  duration: 1000,
  origin: "left",
  distance: "50px",
});

document.addEventListener('DOMContentLoaded', function() {
  // Clone tech icons to create infinite loop effect
  const carouselContainer = document.querySelector('.carousel-container');
  if (carouselContainer) {
    const icons = document.querySelectorAll('.tech-icon');

    // Clone each icon and append to container for seamless looping
    icons.forEach(icon => {
      const clone = icon.cloneNode(true);
      carouselContainer.appendChild(clone);
    });

    // Pause animation on hover
    // carouselContainer.addEventListener('mouseenter', () => carouselContainer.style.animationPlayState = 'paused');
    // carouselContainer.addEventListener('mouseleave', () => carouselContainer.style.animationPlayState = 'running');
  }
});
