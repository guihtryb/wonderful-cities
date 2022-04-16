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
var setFaqDescription = function (index) {
    var _a;
    var faqDescriptions = document.querySelectorAll('.faq-description');
    (_a = faqDescriptions[index]) === null || _a === void 0 ? void 0 : _a.classList.toggle('active-accordion');
};
var faqTitleEventListener = function () {
    var faqDescriptionTitles = document.querySelectorAll('.faq-list dt');
    faqDescriptionTitles
        .forEach(function (dt, index) { return dt.addEventListener('click', function () { return setFaqDescription(index); }); });
};
var init = function () {
    darkModeEventListener();
    citiesTabEventListener();
    faqTitleEventListener();
};
window.onload = function () { return init(); };
