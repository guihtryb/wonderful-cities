const setDarkModeElement: HTMLElement | null = document.querySelector('.set-darkmode');

const setDarkMode = () => {
  const pageBody: HTMLElement | null = document.querySelector('body');
  pageBody?.classList.toggle('dark-mode');
};

setDarkModeElement?.addEventListener('click', setDarkMode);

const citiesTabMenu: NodeListOf<Element> | null = document.querySelectorAll('.js-tabmenu li');

const setCityTab = (index: number) => {
  const tabContent: NodeListOf<Element> | null = document.querySelectorAll('.city-description');
  tabContent.forEach((section) => section.classList.remove('active'))
  tabContent[index].classList.add('active');
}

citiesTabMenu?.forEach((city: Element, index) => {
  city.addEventListener('click', () => setCityTab(index));
});

