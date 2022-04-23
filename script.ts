import startScrollAnimation from './js/modules/scrollAnimation.js';
import darkModeEventListener from './js/modules/darkMode.js';
import setSmoothScrolling from './js/modules/smoothScroll.js';
import citiesTabEventListener from './js/modules/tabNavigation.js';
import faqAccordionEventListener from './js/modules/accordion.js';
// WIP, function -> if content height > tab images, move last paragraph to outside section

const init = (): void => {
  startScrollAnimation();

  darkModeEventListener();

  setSmoothScrolling();

  citiesTabEventListener();

  faqAccordionEventListener();
};

window.onload = () => init();