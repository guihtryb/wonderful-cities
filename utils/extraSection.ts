import IAbleToCreateExtraParagraph from "../interfaces/IAbleToCreateExtraParagraph";
import getElement from "./getElement.js";
import getElements from "./getElements.js";

export const isAbleToCreateExtraParagraph = (
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

export const isAbleToBringExtraParagraphBack = (
  firstExtraParagraphHeight: number,
  tabNavHeight: number,
  activeCitySectionHeight: number,
): boolean => {
  const isAbleToBringParagraphBack: boolean = (firstExtraParagraphHeight + 45)
    < (tabNavHeight - activeCitySectionHeight);

  if (isAbleToBringParagraphBack) return true;

  return false;
};

export const calcTimesBigger = (activeCitySectionHeight: number, tabNavHeight: number) => {
  const howMuchTimesBigger: number = Math
  .ceil(activeCitySectionHeight / tabNavHeight);

  return howMuchTimesBigger;
}

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
