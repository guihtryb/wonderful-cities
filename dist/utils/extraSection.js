import getElement from "./getElement.js";
import getElements from "./getElements.js";
export const isAbleToCreateExtraParagraph = (activeCitySectionHeight, activeCitySectionChildrenLength, tabNavHeight) => {
    const citySectionIsBigger = activeCitySectionHeight
        > (tabNavHeight + 60);
    const activeCitySectionHasMoreThanOneChild = activeCitySectionChildrenLength > 2;
    const conditions = [
        citySectionIsBigger,
        activeCitySectionHasMoreThanOneChild
    ];
    if (conditions.every((condition) => condition))
        return {
            isAble: true,
            quantity: calcTimesBigger(activeCitySectionHeight, tabNavHeight),
        };
    return {
        isAble: false,
        quantity: 0,
    };
};
export const isAbleToBringExtraParagraphBack = (firstExtraParagraphHeight, tabNavHeight, activeCitySectionHeight) => {
    const isAbleToBringParagraphBack = (firstExtraParagraphHeight + 45)
        < (tabNavHeight - activeCitySectionHeight);
    if (isAbleToBringParagraphBack)
        return true;
    return false;
};
export const calcTimesBigger = (activeCitySectionHeight, tabNavHeight) => {
    const howMuchTimesBigger = Math
        .ceil(activeCitySectionHeight / tabNavHeight);
    return howMuchTimesBigger;
};
export const deleteLastCityExtraSection = () => {
    const activeCitySection = getElement('[data-set="content"] section.active');
    const extraSectionParagraphs = getElements('[data-section="extra-content"] p');
    extraSectionParagraphs.forEach((paragraph) => {
        activeCitySection === null || activeCitySection === void 0 ? void 0 : activeCitySection.appendChild(paragraph);
    });
};
