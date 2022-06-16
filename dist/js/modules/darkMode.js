const setDarkMode = () => {
    const screenMode = JSON.stringify(localStorage.getItem('screen-mode')).replace(/"/g, '');
    const pageBody = document.querySelector('body');
    if (screenMode === 'dark-mode') {
        localStorage.removeItem('screen-mode');
        pageBody === null || pageBody === void 0 ? void 0 : pageBody.classList.remove('dark-mode');
    }
    else {
        localStorage.setItem('screen-mode', 'dark-mode');
        pageBody === null || pageBody === void 0 ? void 0 : pageBody.classList.add('dark-mode');
    }
};
const darkModeEventListener = () => {
    const setDarkModeElement = document.querySelector('.set-darkmode');
    const screenMode = JSON.stringify(localStorage.getItem('screen-mode')).replace(/"/g, '');
    const pageBody = document.querySelector('body');
    pageBody === null || pageBody === void 0 ? void 0 : pageBody.classList.add(screenMode);
    setDarkModeElement === null || setDarkModeElement === void 0 ? void 0 : setDarkModeElement.addEventListener('click', setDarkMode);
};
export default darkModeEventListener;
