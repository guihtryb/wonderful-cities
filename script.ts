import startScrollAnimation from './js/modules/scrollAnimation.js';
import darkModeEventListener from './js/modules/darkMode.js';
import setSmoothScrolling from './js/modules/smoothScroll.js';
import citiesTabEventListener from './js/modules/tabNavigation.js';
import faqAccordionEventListener from './js/modules/accordion.js';
import extraParagraphEventListener from './js/modules/extraTextSection.js';

const init = (): void => {
  startScrollAnimation();

  darkModeEventListener();

  setSmoothScrolling();

  citiesTabEventListener();

  faqAccordionEventListener();

  extraParagraphEventListener();
};

window.onload = () => init();