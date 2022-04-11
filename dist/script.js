"use strict";
var setDarkModeElement = document.querySelector('.set-darkmode');
var setDarkMode = function () {
    var pageBody = document.querySelector('body');
    pageBody === null || pageBody === void 0 ? void 0 : pageBody.classList.toggle('dark-mode');
};
setDarkModeElement === null || setDarkModeElement === void 0 ? void 0 : setDarkModeElement.addEventListener('click', setDarkMode);
var citiesTabMenu = document.querySelectorAll('.js-tabmenu li');
var setCityTab = function (_a, index) {
    var target = _a.target;
    var tabContent = document.querySelectorAll('.city-description');
    tabContent.forEach(function (section) { return section.classList.remove('active'); });
    tabContent[index].classList.add('active');
};
citiesTabMenu === null || citiesTabMenu === void 0 ? void 0 : citiesTabMenu.forEach(function (city, index) {
    city.addEventListener('click', function (e) { return setCityTab(e, index); });
});
