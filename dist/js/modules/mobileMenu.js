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
};
export default initMobileMenu;
