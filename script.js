document.addEventListener('DOMContentLoaded', () => {

    const burgerButton = document.getElementById('burger-button');
    const mainMenu = document.getElementById('main-menu');

    burgerButton.addEventListener('click', () => {
        
        mainMenu.classList.toggle('opened');
    });

    const items = document.querySelector('.items');
    const slides = document.querySelectorAll('.carrusel .item');
    const buttonsContainer = document.querySelector('.buttons');
    let currentIndex = 0;

    // Create buttons for each slide
    slides.forEach((slide, index) => {
        const button = document.createElement('div');
        button.classList.add('circle')
        button.addEventListener('click', () => {
            moveToSlide(index);
        });
        buttonsContainer.appendChild(button);
    });

    const buttons = document.querySelectorAll('.buttons div');
    buttons[currentIndex].classList.add('active');

    function moveToSlide(index) {
        if (index >= slides.length) {
            index = 0;
        } else if (index < 0) {
            index = slides.length - 1;
        }
        items.style.transform = `translateX(calc(-${index * 100}% + -${index * 50}px))`;
        buttons[currentIndex].classList.remove('active');
        currentIndex = index;
        buttons[currentIndex].classList.add('active');
    }

    let startX = 0;
    let endX = 0;

    // Touch event listeners for mobile swipe functionality
    items.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    items.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX;
    });

    items.addEventListener('touchend', () => {
        if (startX > endX + 50) {
            moveToSlide(currentIndex + 1);
        } else if (startX < endX - 50) {
            moveToSlide(currentIndex - 1);
        }
    });
});