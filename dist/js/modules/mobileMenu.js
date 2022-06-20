import getElement from '../../utils/getElement.js';
const openMenu = (menuList, menuButton) => {
    menuList === null || menuList === void 0 ? void 0 : menuList.classList.toggle('active');
    menuButton === null || menuButton === void 0 ? void 0 : menuButton.classList.toggle('active-button');
};
const initMobileMenu = () => {
    const menuList = getElement('[data-menu="list"]');
    const menuButton = getElement('[data-menu="button"]');
    if (menuList && menuButton) {
        menuButton.addEventListener('click', () => openMenu(menuList, menuButton));
    }
    handleClickOutside();
};
const handleClickOutside = () => {
    const html = document.documentElement;
    const mobileMenu = getElement('[data-menu="list"]');
    const menuButton = getElement('[data-menu="button"]');
    html.addEventListener('click', (e) => closeMenuOnOutsideClick(e, mobileMenu, menuButton));
};
const closeMenuOnOutsideClick = (e, mobileMenu, menuButton) => {
    var _a;
    const mobileMenuContent = mobileMenu === null || mobileMenu === void 0 ? void 0 : mobileMenu.innerHTML;
    const loginFormsContent = (_a = getElement('.modal-container')) === null || _a === void 0 ? void 0 : _a.innerHTML;
    const elementClickedContent = e.target.innerHTML;
    const inMenu = mobileMenuContent === null || mobileMenuContent === void 0 ? void 0 : mobileMenuContent.includes(elementClickedContent);
    const notMenuButton = e.target !== menuButton;
    const inLoginForms = loginFormsContent === null || loginFormsContent === void 0 ? void 0 : loginFormsContent.includes(elementClickedContent);
    if (!inMenu && !inLoginForms && notMenuButton) {
        mobileMenu === null || mobileMenu === void 0 ? void 0 : mobileMenu.classList.remove('active');
        menuButton === null || menuButton === void 0 ? void 0 : menuButton.classList.remove('active-button');
    }
};
export default initMobileMenu;
