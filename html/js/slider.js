const slides = document.querySelectorAll('.header-slide');
let current = 0;

slides[current].style.opacity = '1';

function nextSlide() {
    slides[current].style.opacity = '0';
    current = (current + 1) % slides.length;
    slides[current].style.opacity = '1';
}

setInterval(nextSlide, 3000);
