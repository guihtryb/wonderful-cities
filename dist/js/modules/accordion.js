const setFaqAccordion = ({ currentTarget }) => {
    var _a, _b;
    (_a = currentTarget) === null || _a === void 0 ? void 0 : _a.classList.toggle('opened');
    (_b = currentTarget.nextElementSibling) === null || _b === void 0 ? void 0 : _b.classList.toggle('active-accordion');
};
const faqAccordionEventListener = () => {
    const faqDescriptionTitles = document.querySelectorAll('.faq-list dt');
    faqDescriptionTitles
        .forEach((dt) => dt.addEventListener('click', setFaqAccordion));
};
export default faqAccordionEventListener;
