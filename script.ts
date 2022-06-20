import startScrollAnimation from './js/modules/scrollAnimation.js';
import darkModeEventListener from './js/modules/darkMode.js';
import setSmoothScrolling from './js/modules/smoothScroll.js';
import citiesTabEventListener from './js/modules/tabNavigation.js';
import faqAccordionEventListener from './js/modules/accordion.js';
import extraParagraphEventListener from './js/modules/extraTextSection.js';
import modalEventListener from './js/modules/modal.js';
import initToolTip from './js/modules/toolTip.js';
import { initDropdownMenu } from './js/modules/dropdownMenu.js';
import initNumbersAnimation from './js/modules/numberAnimation.js';
import initMobileMenu from './js/modules/mobileMenu.js';
import initOpeningHours from './js/modules/openingHours.js';
import addDonationValue from './js/modules/fetchBitcoin.js';


const init = (): void => {
  darkModeEventListener();

  startScrollAnimation();

  setSmoothScrolling();

  citiesTabEventListener();

  faqAccordionEventListener();

  extraParagraphEventListener();

  modalEventListener();

  initToolTip();

  initDropdownMenu();

  initNumbersAnimation();

  initMobileMenu();

  initOpeningHours();

  addDonationValue();
};

window.onload = () => init();