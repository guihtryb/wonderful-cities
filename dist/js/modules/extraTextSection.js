const createExtraParagraph = () => {
    const activeCitySection = document.querySelector('[data-set="content"] section.active');
    const extraSection = document.querySelector('[data-section="extra-content"]');
    const extraSectionFirstP = document.querySelector('[data-section="extra-content"] p');
    const citiesSection = document.querySelector('#cities');
    const extraSectionNewP = activeCitySection === null || activeCitySection === void 0 ? void 0 : activeCitySection.lastElementChild;
    if (!extraSection) {
        const newSection = document.createElement('section');
        newSection.dataset['section'] = 'extra-content';
        newSection.dataset['animation'] = 'scroll';
        citiesSection === null || citiesSection === void 0 ? void 0 : citiesSection.after(newSection);
        newSection.appendChild(extraSectionNewP);
        return;
    }
    extraSectionNewP && extraSection.insertBefore(extraSectionNewP, extraSectionFirstP);
};
const removeExtraParagraph = () => {
    const activeCitySection = document.querySelector('[data-set="content"] section.active');
    const extraSection = document.querySelector('[data-section="extra-content"]');
    const firstParagraph = extraSection === null || extraSection === void 0 ? void 0 : extraSection.firstChild;
    if (extraSection && (extraSection === null || extraSection === void 0 ? void 0 : extraSection.children.length) < 2) {
        activeCitySection === null || activeCitySection === void 0 ? void 0 : activeCitySection.appendChild(firstParagraph);
        extraSection.remove();
        return;
    }
    activeCitySection === null || activeCitySection === void 0 ? void 0 : activeCitySection.appendChild(firstParagraph);
};
const getElementHeight = (element) => {
    if (!element)
        return 0;
    const height = element.getBoundingClientRect().height;
    return height;
};
export const setExtraParagraph = () => {
    const tabNav = document
        .querySelector('[data-set="tab"]');
    const activeCitySection = document
        .querySelector('[data-set="content"] section.active');
    const activeCitySectionHeight = getElementHeight(activeCitySection);
    const tabNavHeight = getElementHeight(tabNav);
    const activeCitySectionChildrenLength = activeCitySection.children.length;
    const citySectionIsBigger = activeCitySectionHeight
        > (tabNavHeight + 60);
    const activeCitySectionHasMoreThanOneChild = activeCitySectionChildrenLength > 1;
    if (citySectionIsBigger && activeCitySectionHasMoreThanOneChild) {
        const biggerQuantity = Math
            .ceil(activeCitySectionHeight / tabNavHeight);
        let index = 0;
        while (index < biggerQuantity) {
            index += 1;
            createExtraParagraph();
        }
    }
    const firstExtraParagraph = document
        .querySelector('[data-section="extra-content"] p');
    const firstExtraParagraphHeight = getElementHeight(firstExtraParagraph);
    const isAbleToBringParagraphBack = (firstExtraParagraphHeight + 45)
        < (tabNavHeight - activeCitySectionHeight);
    if (isAbleToBringParagraphBack) {
        removeExtraParagraph();
    }
};
export const deleteLastCityExtraSection = () => {
    const activeCitySection = document
        .querySelector('[data-set="content"] section.active');
    const extraSectionParagraphs = document
        .querySelectorAll('[data-section="extra-content"] p');
    extraSectionParagraphs.forEach((paragraph) => {
        activeCitySection === null || activeCitySection === void 0 ? void 0 : activeCitySection.appendChild(paragraph);
    });
};
const extraParagraphEventListener = () => {
    setExtraParagraph();
    window.addEventListener('resize', setExtraParagraph);
};
export default extraParagraphEventListener;
