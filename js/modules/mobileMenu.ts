import getElement from '../../utils/getElement.js';


const openMenu = (menuList: Element,  menuButton: Element) => {
  menuList?.classList.toggle('active');
  menuButton?.classList.toggle('active-button');
};

const initMobileMenu = () => {
  const menuList = getElement('[data-menu="list"]');
  const menuButton = getElement('[data-menu="button"]');
  
  if (menuList && menuButton) {
    menuButton.addEventListener('click', () => openMenu(menuList, menuButton));
  }
};


export default initMobileMenu;