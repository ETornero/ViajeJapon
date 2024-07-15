document.addEventListener('DOMContentLoaded', () => {

    const burgerButton = document.getElementById('burger-button');
    const mainMenu = document.getElementById('main-menu');
    mainMenu.style.top = `${-mainMenu.offsetHeight}px`;

    burgerButton.addEventListener('click', () => {
        
        mainMenu.classList.toggle('opened');
    });

    console.log('DOMContentLoaded');
});