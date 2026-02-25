const burger = document.querySelector('.header__burger-button');
const headerNavigation = document.querySelector('.header__navigation');

const closeNav = () => {
    headerNavigation.classList.add('close');

    setTimeout(() => {
        headerNavigation.classList.remove('close');
        headerNavigation.classList.remove('open');
    }, 270)
};

const toggleNavMenu = () => {
    burger.classList.toggle('cross');

    if (!headerNavigation.classList.contains('open')) {
        headerNavigation.classList.add('open');
    } else {
        closeNav();
    }

}

const closeByLink = (event) => {
    burger.classList.toggle('cross');
    if (event.target.closest('.header__navigation-list-link')) {
        closeNav();
    }
}

export { burger, toggleNavMenu, headerNavigation, closeByLink };