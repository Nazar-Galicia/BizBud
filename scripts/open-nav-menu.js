const burger = document.querySelector('.header__burger-button');

const toggleNavMenu = () => {
    burger.classList.toggle('cross');
}

export { burger, toggleNavMenu };