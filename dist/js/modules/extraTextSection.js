import { getElement, getElementHeight, isAbleToBringExtraParagraphBack, isAbleToCreateExtraParagraph } from "../../utils/index.js";
const createExtraSection = (extraSectionNewP) => {
    if (!extraSectionNewP)
        return;
    const citiesSection = getElement('#cities');
    const newSection = document.createElement('section');
    newSection.dataset['section'] = 'extra-content';
    newSection.dataset['animation'] = 'scroll';
    citiesSection === null || citiesSection === void 0 ? void 0 : citiesSection.after(newSection);
    newSection.appendChild(extraSectionNewP);
};
const getCitySectionLastParagraph = () => {
    const activeCitySection = getElement('[data-set="content"] section.active');
    const lastParagraph = activeCitySection === null || activeCitySection === void 0 ? void 0 : activeCitySection.lastElementChild;
    return lastParagraph;
};
const insertExtraParagraph = () => {
    const extraSection = getElement('[data-section="extra-content"]');
    const extraSectionFirstP = getElement('[data-section="extra-content"] p');
    const extraParagraph = getCitySectionLastParagraph();
    if (!extraSection) {
        createExtraSection(extraParagraph);
        return;
    }
    extraParagraph && extraSection.insertBefore(extraParagraph, extraSectionFirstP);
};
const bringExtraParagraphBack = (extraParagraph) => {
    if (!extraParagraph)
        return;
    const activeCitySection = getElement('[data-set="content"] section.active');
    activeCitySection === null || activeCitySection === void 0 ? void 0 : activeCitySection.appendChild(extraParagraph);
};
const removeExtraParagraph = () => {
    const extraSection = getElement('[data-section="extra-content"]');
    const firstParagraph = extraSection === null || extraSection === void 0 ? void 0 : extraSection.firstChild;
    const isExtraSectionUniqueP = (extraSection === null || extraSection === void 0 ? void 0 : extraSection.children.length) === 1;
    if (extraSection && isExtraSectionUniqueP) {
        bringExtraParagraphBack(firstParagraph);
        extraSection.remove();
        return;
    }
    bringExtraParagraphBack(firstParagraph);
};
const createExtraParagraphs = (quantity) => {
    let index = 0;
    while (index < quantity) {
        index += 1;
        insertExtraParagraph();
    }
};
export const controlExtraParagraph = () => {
    const tabNav = getElement('[data-set="tab"]');
    const activeCitySection = getElement('[data-set="content"] section.active');
    const tabNavHeight = getElementHeight(tabNav);
    const activeCitySectionHeight = getElementHeight(activeCitySection);
    const activeCitySectionChildrenLength = activeCitySection.children.length;
    const createExtraParagraph = isAbleToCreateExtraParagraph(activeCitySectionHeight, activeCitySectionChildrenLength, tabNavHeight);
    const firstExtraParagraph = getElement('[data-section="extra-content"] p');
    const firstExtraParagraphHeight = getElementHeight(firstExtraParagraph);
    const ableToBringParagraphBack = isAbleToBringExtraParagraphBack(firstExtraParagraphHeight, tabNavHeight, activeCitySectionHeight);
    if (createExtraParagraph.isAble) {
        createExtraParagraphs(createExtraParagraph.quantity);
    }
    if (ableToBringParagraphBack) {
        removeExtraParagraph();
    }
};
const extraParagraphEventListener = () => {
    controlExtraParagraph();
    window.addEventListener('resize', controlExtraParagraph);
};
export default extraParagraphEventListener;
