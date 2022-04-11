"use strict";
var pageBody = document.querySelector('body');
var setDarkModeElement = document.querySelector('.set-darkmode');
var setDarkMode = function () {
    pageBody === null || pageBody === void 0 ? void 0 : pageBody.classList.toggle('dark-mode');
};
setDarkModeElement === null || setDarkModeElement === void 0 ? void 0 : setDarkModeElement.addEventListener('click', setDarkMode);
