"use strict";
var setDarkMode = function () {
    var pageBody = document.querySelector('body');
    pageBody === null || pageBody === void 0 ? void 0 : pageBody.classList.toggle('dark-mode');
};
var darkModeEventListener = function () {
    var setDarkModeElement = document.querySelector('.set-darkmode');
    setDarkModeElement === null || setDarkModeElement === void 0 ? void 0 : setDarkModeElement.addEventListener('click', setDarkMode);
};
var setCityTab = function (index) {
    var tabContent = document.querySelectorAll('.city-description');
    tabContent.forEach(function (section) { return section.classList.remove('active'); });
    tabContent[index].classList.add('active');
};
var citiesTabEventListener = function () {
    var citiesTabMenu = document.querySelectorAll('.js-tabmenu li');
    citiesTabMenu === null || citiesTabMenu === void 0 ? void 0 : citiesTabMenu.forEach(function (city, index) {
        city.addEventListener('click', function () { return setCityTab(index); });
    });
};
var setFaqDescription = function (_a) {
    var currentTarget = _a.currentTarget;
    var _b;
    currentTarget === null || currentTarget === void 0 ? void 0 : currentTarget.classList.toggle('opened');
    (_b = currentTarget.nextElementSibling) === null || _b === void 0 ? void 0 : _b.classList.toggle('active-accordion');
};
var faqTitleEventListener = function () {
    var faqDescriptionTitles = document.querySelectorAll('.faq-list dt');
    faqDescriptionTitles
        .forEach(function (dt) { return dt.addEventListener('click', setFaqDescription); });
};
var init = function () {
    darkModeEventListener();
    citiesTabEventListener();
    faqTitleEventListener();
};
window.onload = function () { return init(); };
