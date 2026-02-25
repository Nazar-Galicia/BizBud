const burger = document.querySelector('.header__burger-button');
const headerNavigation = document.querySelector('.header__navigation');

const toggleNavMenu = () => {
    burger.classList.toggle('cross');

    if (!headerNavigation.classList.contains('open')) {
        headerNavigation.classList.add('open');
    } else {
        headerNavigation.classList.add('close');

        setTimeout(() => {
            headerNavigation.classList.remove('close');
            headerNavigation.classList.remove('open');
        }, 270)
    }

}

export { burger, toggleNavMenu };