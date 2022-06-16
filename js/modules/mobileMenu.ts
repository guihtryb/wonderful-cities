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

  handleClickOutside();
};

const handleClickOutside = () => {
  const html = document.documentElement;

  const mobileMenu = getElement('[data-menu="list"]') as Element;
  const menuButton = getElement('[data-menu="button"]') as Element;

  html.addEventListener('click', (e) => closeMenuOnOutsideClick(e, mobileMenu, menuButton));
};

const closeMenuOnOutsideClick = (e: Event, mobileMenu: Element, menuButton: Element) => {
  const mobileMenuContent = mobileMenu?.innerHTML;
  const loginFormsContent = getElement('.modal-container')?.innerHTML;
  const elementClickedContent = (e.target as Element).innerHTML;

  const inMenu = mobileMenuContent?.includes(elementClickedContent);
  const notMenuButton = e.target !== menuButton;
  const inLoginForms = loginFormsContent?.includes(elementClickedContent);

  
  if (!inMenu && !inLoginForms && notMenuButton) {
    mobileMenu?.classList.remove('active');
    menuButton?.classList.remove('active-button');
  }
};


export default initMobileMenu;