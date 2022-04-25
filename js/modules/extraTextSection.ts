import IAbleToCreateExtraParagraph from "../../interfaces/IAbleToCreateExtraParagraph.js";
import { getElement, getElementHeight, getElements } from "../../utils/index.js";

const createExtraSection = (extraSectionNewP: Element | null | undefined): void => {
  if (!extraSectionNewP) return;

  const citiesSection: Element | null = getElement('#cities');
  const newSection: HTMLElement = document.createElement('section');

  newSection.dataset['section']= 'extra-content';
  newSection.dataset['animation']= 'scroll';

  citiesSection?.after(newSection);

  newSection.appendChild(extraSectionNewP);
};

const getCitySectionLastParagraph = (): Element | null | undefined => {
  const activeCitySection: Element | null = getElement('[data-set="content"] section.active');

  const lastParagraph: Element | null | undefined = activeCitySection?.lastElementChild;

  return lastParagraph;
};

const insertExtraParagraph = (): void => {
  const extraSection: Element | null = getElement('[data-section="extra-content"]');

  const extraSectionFirstP: Element | null = getElement('[data-section="extra-content"] p');

  const extraParagraph: Element | null | undefined = getCitySectionLastParagraph();

  if (!extraSection) {
    createExtraSection(extraParagraph);
    return;
  }

  extraParagraph && extraSection.insertBefore(extraParagraph, extraSectionFirstP as Node);
};

const bringExtraParagraphBack = (extraParagraph: ChildNode | null | undefined) => {
  if (!extraParagraph) return;

  const activeCitySection: Element | null = getElement('[data-set="content"] section.active');

  activeCitySection?.appendChild(extraParagraph);
};

const removeExtraParagraph = (): void => {
  const extraSection: Element | null = getElement('[data-section="extra-content"]');

  const firstParagraph: ChildNode | null | undefined = extraSection?.firstChild;

  const isExtraSectionUniqueP = extraSection?.children.length === 1;

  if (extraSection && isExtraSectionUniqueP) {
    bringExtraParagraphBack(firstParagraph);

    extraSection.remove();

    return;
  }

  bringExtraParagraphBack(firstParagraph)
};

const isAbleToCreateExtraParagraph = (
  activeCitySectionHeight: number,
  activeCitySectionChildrenLength: number,
  tabNavHeight: number,
  ): IAbleToCreateExtraParagraph => {

  const citySectionIsBigger: boolean = activeCitySectionHeight
    > (tabNavHeight + 60);

  const activeCitySectionHasMoreThanOneChild: boolean = activeCitySectionChildrenLength > 1;

  const conditions = [
    citySectionIsBigger,
    activeCitySectionHasMoreThanOneChild
  ];

  if (conditions.every((condition) => condition)) return {
    isAble: true,
    quantity: calcTimesBigger(activeCitySectionHeight, tabNavHeight),
  };

  return {
    isAble: false,
    quantity: 0,
  };
};

const isAbleToBringExtraParagraphBack = (
  firstExtraParagraphHeight: number,
  tabNavHeight: number,
  activeCitySectionHeight: number,
): boolean => {
  const isAbleToBringParagraphBack: boolean = (firstExtraParagraphHeight + 45)
    < (tabNavHeight - activeCitySectionHeight);

  if (isAbleToBringParagraphBack) return true;

  return false;
};

const calcTimesBigger = (activeCitySectionHeight: number, tabNavHeight: number) => {
  const howMuchTimesBigger: number = Math
  .ceil(activeCitySectionHeight / tabNavHeight);

  return howMuchTimesBigger;
}

const createExtraParagraphs = (quantity: number) => {
  let index = 0;

  while(index < quantity) {
    index += 1;
    insertExtraParagraph();
  }
}

export const controlExtraParagraph = (): void => {
  const tabNav: Element | null = getElement('[data-set="tab"]');

  const activeCitySection: Element | null = getElement('[data-set="content"] section.active');

  const tabNavHeight: number = getElementHeight(tabNav);

  const activeCitySectionHeight: number = getElementHeight(activeCitySection);

  const activeCitySectionChildrenLength: number = (activeCitySection as HTMLElement).children.length;

  const createExtraParagraph: IAbleToCreateExtraParagraph = isAbleToCreateExtraParagraph(
    activeCitySectionHeight,
    activeCitySectionChildrenLength,
    tabNavHeight
  );

  const firstExtraParagraph: Element | null = getElement(
    '[data-section="extra-content"] p',
  );

  const firstExtraParagraphHeight: number = getElementHeight(firstExtraParagraph);

  const ableToBringParagraphBack: boolean = isAbleToBringExtraParagraphBack(
    firstExtraParagraphHeight,
    tabNavHeight,
    activeCitySectionHeight
  );

  if (createExtraParagraph.isAble) {
    createExtraParagraphs(createExtraParagraph.quantity);
  }

  if (ableToBringParagraphBack) {
    removeExtraParagraph();
  }
};

export const deleteLastCityExtraSection = (): void => {
  const activeCitySection: Element | null = getElement(
    '[data-set="content"] section.active',
  );

  const extraSectionParagraphs: NodeListOf<Element> = getElements(
    '[data-section="extra-content"] p',
  );

  extraSectionParagraphs.forEach((paragraph) => {
    activeCitySection?.appendChild(paragraph);
  });
};

const extraParagraphEventListener = (): void => {
  controlExtraParagraph();

  window.addEventListener('resize', controlExtraParagraph);
}

export default extraParagraphEventListener;
