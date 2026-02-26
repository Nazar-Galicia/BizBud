const burger = document.querySelector('.header__burger-button');
const headerNavigation = document.querySelector('.header__navigation');

const closeNav = () => {
    headerNavigation.classList.add('close');
    burger.classList.remove('cross');

    setTimeout(() => {
        headerNavigation.classList.remove('close');
        headerNavigation.classList.remove('open');
    }, 270)
};

const toggleNavMenu = () => {
    burger.classList.add('cross');

    if (!headerNavigation.classList.contains('open')) {
        headerNavigation.classList.add('open');
    } else {
        closeNav();
    }

}

const closeByLink = (event) => {
    if (event.target.closest('.header__navigation-list-link')) {
        closeNav();
        burger.classList.remove('cross');
    }
}

export { burger, toggleNavMenu, headerNavigation, closeByLink };