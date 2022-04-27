import { controlExtraParagraph } from "./extraTextSection.js";
import { deleteLastCityExtraSection } from "../../utils/index.js";
import { setScrollAnimation } from "./scrollAnimation.js";

const setCityTab = (index: number): void => {
  const tabContent: NodeListOf<Element> | null = document.querySelectorAll('[data-set="content"] section');

  tabContent.forEach((section) => section.classList.remove('active'))

  tabContent[index].classList.add('active');
};

const citiesTabEventListener = (): void => {
  const citiesTabMenu: NodeListOf<Element> | null = document.querySelectorAll('[data-set="tab"] li');

  citiesTabMenu?.forEach((city: Element, index) => {
    city.addEventListener('click', () => {
      setScrollAnimation();
      deleteLastCityExtraSection();
      setCityTab(index);
      controlExtraParagraph();
    });
  });
};

export default citiesTabEventListener;