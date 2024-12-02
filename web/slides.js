let currentIndex = 0;
const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slideCount - 1;
    updateSlidePosition();
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex < slideCount - 1) ? currentIndex + 1 : 0;
    updateSlidePosition();
});

function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}
