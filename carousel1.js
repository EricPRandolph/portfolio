document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".carousel").forEach((carousel, index) => {
    let slideIndex = 1;
    let slideInterval;

    const slides = carousel.querySelectorAll(".mySlides");
    const prevButton = carousel.querySelector(".prev");
    const nextButton = carousel.querySelector(".next");

    function showSlides(n) {
      if (n > slides.length) slideIndex = 1;
      if (n < 1) slideIndex = slides.length;

      slides.forEach((slide) => (slide.style.display = "none"));
      slides[slideIndex - 1].style.display = "block";
    }

    function plusSlides(n) {
      resetInterval();
      showSlides((slideIndex += n));
    }

    function startInterval() {
      slideInterval = setInterval(() => plusSlides(1), 3000);
    }

    function resetInterval() {
      clearInterval(slideInterval);
      startInterval();
    }

    prevButton.addEventListener("click", () => plusSlides(-1));
    nextButton.addEventListener("click", () => plusSlides(1));

    showSlides(slideIndex);
    startInterval();
  });
});