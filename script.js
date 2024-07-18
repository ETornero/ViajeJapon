document.addEventListener('DOMContentLoaded', () => {

    //AIzaSyBWldOk78T1FKHabqE8D3vrU7hA3WzBFhw

    const burgerButton = document.getElementById('burger-button');
    const mainMenu = document.getElementById('main-menu');

    burgerButton.addEventListener('click', () => {
        mainMenu.classList.toggle('opened');
    });

});