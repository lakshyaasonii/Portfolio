// Carousel logic
let current = 1;
const items = document.querySelectorAll('.carousel-item');

function updateCarousel() {
  items.forEach((item, index) => {
    item.classList.remove('active');
    if (index === current) item.classList.add('active');
  });
}

function next() {
  current = (current + 1) % items.length;
  updateCarousel();
}

function prev() {
  current = (current - 1 + items.length) % items.length;
  updateCarousel();
}

// Typing animation
const text = "Hii, I am Lakshya and this is my portfolio";
let index = 0;
const typingText = document.querySelector('.typing-text');

function typeWriter() {
  if (index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

window.onload = () => {
  updateCarousel();
  typeWriter();
};
