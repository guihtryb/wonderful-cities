const setDarkMode = () => {
    const pageBody = document.querySelector('body');
    pageBody === null || pageBody === void 0 ? void 0 : pageBody.classList.toggle('dark-mode');
};
const darkModeEventListener = () => {
    const setDarkModeElement = document.querySelector('.set-darkmode');
    setDarkModeElement === null || setDarkModeElement === void 0 ? void 0 : setDarkModeElement.addEventListener('click', setDarkMode);
};
export default darkModeEventListener;
