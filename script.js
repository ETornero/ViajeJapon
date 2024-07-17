document.addEventListener('DOMContentLoaded', () => {

    const burgerButton = document.getElementById('burger-button');
    const mainMenu = document.getElementById('main-menu');

    burgerButton.addEventListener('click', () => {
        mainMenu.classList.toggle('opened');
    });

});