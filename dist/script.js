"use strict";
const setDarkMode = function () {
    const pageBody = document.querySelector('body');
    pageBody === null || pageBody === void 0 ? void 0 : pageBody.classList.toggle('dark-mode');
};
const darkModeEventListener = function () {
    const setDarkModeElement = document.querySelector('.set-darkmode');
    setDarkModeElement === null || setDarkModeElement === void 0 ? void 0 : setDarkModeElement.addEventListener('click', setDarkMode);
};
const setCityTab = function (index) {
    const tabContent = document.querySelectorAll('.city-description');
    tabContent.forEach(function (section) { return section.classList.remove('active'); });
    tabContent[index].classList.add('active');
};
const citiesTabEventListener = function () {
    const citiesTabMenu = document.querySelectorAll('.js-tabmenu li');
    citiesTabMenu === null || citiesTabMenu === void 0 ? void 0 : citiesTabMenu.forEach(function (city, index) {
        city.addEventListener('click', function () { return setCityTab(index); });
    });
};
const init = function () {
    darkModeEventListener();
    citiesTabEventListener();
};

window.onload = function () { return init(); };
