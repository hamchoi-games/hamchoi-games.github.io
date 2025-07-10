// Animate fade-in on scroll

document.addEventListener("DOMContentLoaded", function () {
  // Only run intro if not already shown in this session
  if (!sessionStorage.getItem("introPlayed")) {
    sessionStorage.setItem("introPlayed", "true");

    const text = "HAMCHƠI GAMES";
    const introText = document.getElementById("intro-text");
    let index = 0;
    const typingSpeed = 80;

    function typeWriter() {
      if (index < text.length) {
        introText.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, typingSpeed);
      } else {
        setTimeout(() => {
          const intro = document.getElementById("intro-screen");
          intro.style.transition = "transform 0.7s cubic-bezier(0.77, 0, 0.175, 1)";
          intro.style.transform = "translateX(-100vw)";

          setTimeout(() => {
            intro.style.display = "none";
          }, 700);
        }, 500);
      }
    }

    typeWriter();
  } else {
    // Skip intro if already played
    const intro = document.getElementById("intro-screen");
    intro.style.display = "none";
  }
});




document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
});

// Add scroll shadow to navbar
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".sticky-nav");
  nav.classList.toggle("scrolled", window.scrollY > 0);
});
