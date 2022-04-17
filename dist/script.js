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
var smoothScrolling = function (e) {
    e.preventDefault();
    var href = e.currentTarget.getAttribute('href');
    var goTo = document.querySelector(href);
    goTo.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
};
var setSmoothScrolling = function () {
    var internalLinks = document.querySelectorAll('.menu a[href^="#"]');
    internalLinks.forEach(function (e) { return e.addEventListener('click', smoothScrolling); });
};
// WIP, function -> if content height > tab images, move last paragraph to outside section
var getWindowPercentage = function (percentage) { return window.innerHeight * (percentage / 100); };
var setScrollAnimation = function () {
    var jsScrollElements = document.querySelectorAll('.js-scroll');
    var windowPercentage = getWindowPercentage(70);
    jsScrollElements.forEach(function (element) {
        var elementToTop = element.getBoundingClientRect().top;
        var elementIsVisible = elementToTop <= windowPercentage;
        if (elementIsVisible)
            element.classList.add('scroll-active');
        else
            element.classList.remove('scroll-active');
    });
};
var startScrollAnimation = function () {
    setScrollAnimation();
    window.addEventListener('scroll', setScrollAnimation);
};
var init = function () {
    setSmoothScrolling();
    darkModeEventListener();
    citiesTabEventListener();
    faqTitleEventListener();
    startScrollAnimation();
};
window.onload = function () { return init(); };
