const setDarkMode = (): void => {
  const pageBody: HTMLElement | null = document.querySelector('body');

  pageBody?.classList.toggle('dark-mode');
};

const darkModeEventListener = (): void => {
  const setDarkModeElement: HTMLElement | null = document.querySelector('.set-darkmode');

  setDarkModeElement?.addEventListener('click', setDarkMode);
}


const setCityTab = (index: number): void => {
  const tabContent: NodeListOf<Element> | null = document.querySelectorAll('.city-description');

  tabContent.forEach((section) => section.classList.remove('active'))

  tabContent[index].classList.add('active');
}

const citiesTabEventListener = (): void => {
  const citiesTabMenu: NodeListOf<Element> | null = document.querySelectorAll('.js-tabmenu li');

  citiesTabMenu?.forEach((city: Element, index) => {
    city.addEventListener('click', () => setCityTab(index));
  });
}

const setFaqDescription = ({ currentTarget }: Event): void => {
  (currentTarget as Element)?.classList.toggle('opened');

  (currentTarget as Element).nextElementSibling?.classList.toggle('active-accordion');
}

const faqTitleEventListener = (): void => {
  const faqDescriptionTitles: NodeListOf<Element> = document.querySelectorAll('.faq-list dt');

  faqDescriptionTitles
    .forEach((dt) => dt.addEventListener('click', setFaqDescription));
}

const smoothScrolling = (e: Event): void => {
  e.preventDefault();

  const href: string | null = (e.target as Element).getAttribute('href');

  if (href) {
    const goTo: Element | null = document.querySelector(href);
    goTo?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

const setSmoothScrolling = (): void => {
  const internalLinks: NodeListOf<Element> = document.querySelectorAll('.menu a[href^="#"]');

  internalLinks.forEach((e: Element) => e.addEventListener('click', smoothScrolling));
};

// WIP, function -> if content height > tab images, move last paragraph to outside section
const getWindowPercentage = (percentage: number) => window.innerHeight * (percentage / 100);

const setScrollAnimation = () => {
  const jsScrollElements: NodeListOf<Element> = document.querySelectorAll('.js-scroll');

  const windowPercentage = getWindowPercentage(70);

  jsScrollElements.forEach((element) => {
    const elementToTop = element.getBoundingClientRect().top;

    const elementIsVisible = elementToTop <= windowPercentage;

    if (elementIsVisible)
      element.classList.add('scroll-active');
    else
      element.classList.remove('scroll-active');
  });
}

const startScrollAnimation = () => {
  setScrollAnimation();

  window.addEventListener('scroll', setScrollAnimation)
}

const init = (): void => {
  setSmoothScrolling();
  
  darkModeEventListener();
  
  citiesTabEventListener();
  
  faqTitleEventListener();

  startScrollAnimation();
};

window.onload = () => init();