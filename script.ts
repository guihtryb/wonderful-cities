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

const setFaqDescription = ({ currentTarget }: any): void => {
  currentTarget?.classList.toggle('opened');
  currentTarget.nextElementSibling?.classList.toggle('active-accordion');
}

const faqTitleEventListener = (): void => {
  const faqDescriptionTitles: NodeListOf<Element> = document.querySelectorAll('.faq-list dt');

  faqDescriptionTitles
    .forEach((dt) => dt.addEventListener('click', setFaqDescription));
}

const init = (): void => {
  darkModeEventListener();

  citiesTabEventListener();

  faqTitleEventListener();
}

window.onload = () => init();