import { setExtraParagraph } from "./extraTextSection.js";

const setCityTab = (index: number): void => {
  const tabContent: NodeListOf<Element> | null = document.querySelectorAll('[data-set="content"] section');

  tabContent.forEach((section) => section.classList.remove('active'))

  tabContent[index].classList.add('active');
};

const citiesTabEventListener = (): void => {
  const citiesTabMenu: NodeListOf<Element> | null = document.querySelectorAll('[data-set="tab"] li');

  citiesTabMenu?.forEach((city: Element, index) => {
    city.addEventListener('click', () => {
      setCityTab(index);
      setExtraParagraph();
    });
  });
};

export default citiesTabEventListener;