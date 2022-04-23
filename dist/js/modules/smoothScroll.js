const smoothScrolling = (e) => {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    if (href) {
        const goTo = document.querySelector(href);
        goTo === null || goTo === void 0 ? void 0 : goTo.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
};
const setSmoothScrolling = () => {
    const internalLinks = document.querySelectorAll('.menu a[href^="#"]');
    internalLinks.forEach((e) => e.addEventListener('click', smoothScrolling));
};
export default setSmoothScrolling;
