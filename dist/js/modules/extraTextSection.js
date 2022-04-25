const createExtraParagraph = () => {
    const activeCitySection = document.querySelector('[data-set="content"] section.active');
    const extraSection = document.querySelector('[data-section="extra-content"]');
    const citiesSection = document.querySelector('#cities');
    const extraSectionParagraph = activeCitySection === null || activeCitySection === void 0 ? void 0 : activeCitySection.lastElementChild;
    if (!extraSection) {
        const newSection = document.createElement('section');
        newSection.dataset['section'] = 'extra-content';
        newSection.dataset['animation'] = 'scroll';
        citiesSection === null || citiesSection === void 0 ? void 0 : citiesSection.after(newSection);
        newSection.appendChild(extraSectionParagraph);
        return;
    }
    extraSectionParagraph && (extraSection === null || extraSection === void 0 ? void 0 : extraSection.appendChild(extraSectionParagraph));
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
export const setExtraParagraph = () => {
    const tabNav = document.querySelector('[data-set="tab"]');
    const activeCitySection = document.querySelector('[data-set="content"] section.active');
    const activeCitySectionHeight = activeCitySection === null || activeCitySection === void 0 ? void 0 : activeCitySection.getBoundingClientRect().height;
    const tabNavHeight = tabNav === null || tabNav === void 0 ? void 0 : tabNav.getBoundingClientRect().height;
    const activeCitySectionChildrenLength = activeCitySection
        .children.length;
    const heightsExist = activeCitySectionHeight && tabNavHeight;
    const citySectionIsBigger = heightsExist
        && (activeCitySectionHeight > (tabNavHeight + 59));
    const activeCitySectionHasMoreThanOneChild = activeCitySectionChildrenLength > 1;
    if (citySectionIsBigger && activeCitySectionHasMoreThanOneChild) {
        createExtraParagraph();
    }
    const firstExtraParagraph = document.querySelector('[data-section="extra-content"] p');
    const firstExtraParagraphHeight = firstExtraParagraph === null || firstExtraParagraph === void 0 ? void 0 : firstExtraParagraph.getBoundingClientRect().height;
    const firstExtraParagraphHeightAlsoExist = heightsExist && firstExtraParagraphHeight;
    const isAbleToBringParagraphBack = firstExtraParagraphHeightAlsoExist
        && (firstExtraParagraphHeight + 57) < (tabNavHeight - activeCitySectionHeight);
    if (isAbleToBringParagraphBack) {
        removeExtraParagraph();
    }
};
export const deleteLastCityExtraSection = () => {
    const activeCitySection = document.querySelector('[data-set="content"] section.active');
    const extraSectionParagraphs = document.querySelectorAll('[data-section="extra-content"] p');
    extraSectionParagraphs.forEach((paragraph) => {
        activeCitySection === null || activeCitySection === void 0 ? void 0 : activeCitySection.appendChild(paragraph);
    });
};
const extraParagraphEventListener = () => {
    setExtraParagraph();
    window.addEventListener('resize', setExtraParagraph);
};
export default extraParagraphEventListener;
