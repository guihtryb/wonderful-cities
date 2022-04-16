const setDarkMode = () => {
  const pageBody: HTMLElement | null = document.querySelector('body');
  pageBody?.classList.toggle('dark-mode');
};

const darkModeEventListener = () => {
  const setDarkModeElement: HTMLElement | null = document.querySelector('.set-darkmode');

  setDarkModeElement?.addEventListener('click', setDarkMode);
}


const setCityTab = (index: number) => {
  const tabContent: NodeListOf<Element> | null = document.querySelectorAll('.city-description');
  tabContent.forEach((section) => section.classList.remove('active'))
  tabContent[index].classList.add('active');
}

const citiesTabEventListener = () => {
  const citiesTabMenu: NodeListOf<Element> | null = document.querySelectorAll('.js-tabmenu li');

  citiesTabMenu?.forEach((city: Element, index) => {
    city.addEventListener('click', () => setCityTab(index));
  });
}

const init = () => {
  darkModeEventListener();

  citiesTabEventListener();
}

window.onload = () => init();