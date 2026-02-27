import { scrollAnimation } from "./animation.js";
import {Validation} from "./validation.js";
import {burger, toggleNavMenu, headerNavigation, closeByLink} from "./open-nav-menu.js";
import {paginationContainer, switchFeedback} from "./feedbacks-preview.js";

const sectionHeadings = document.querySelectorAll(".section-heading"); // 3
const sectionSubtitles = document.querySelectorAll(".section-subtitle"); // 2
const servicesCards = document.querySelectorAll(".services__card"); // all
const statsListItems = document.querySelectorAll(".stats__list-item"); // all
const aboutUsParagraphs = document.querySelectorAll(".about-us__text");
const heroHeading = document.querySelector(".hero__heading");
const heroParagraph = document.querySelector(".hero__paragraph");
const heroButton = document.querySelector(".hero > .button");

const animatedElements = [
    sectionHeadings[0],
    sectionHeadings[1],
    sectionHeadings[2],
    sectionSubtitles[0],
    sectionSubtitles[1],
    heroHeading,
    heroParagraph,
    heroButton,
    ...servicesCards,
    ...statsListItems,
    ...aboutUsParagraphs,
];

scrollAnimation(...animatedElements);
new Validation();

paginationContainer.addEventListener("click", switchFeedback)

burger.addEventListener('click', toggleNavMenu);
headerNavigation.addEventListener('click', closeByLink);