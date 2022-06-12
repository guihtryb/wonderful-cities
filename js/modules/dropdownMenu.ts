import { getElements, getElement } from "../../utils/index.js";

export function initDropdownMenu() {
  const dropdownMenus = getElements('[data-dropdown]');

  const events = ['touchstart', 'click'];

  dropdownMenus.forEach((menu) => {
    events.forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
};

function handleClick(event: Event) {
  event.preventDefault();

  const dropdown = event.currentTarget as Element;

  const events = ['touchstart', 'click'];

  dropdown.classList.toggle('active-dropdown');

  handleOutsideClick(dropdown, events, close);
};

function close() {
  const dropdown = getElement('[data-dropdown].active-dropdown');

  dropdown?.classList.remove('active-dropdown');
}

export function handleOutsideClick(element: Element, events: string[], closeDropdown: Function): void {
  const html = document.documentElement;

  const outside = 'data-outside';

  if(!element.hasAttribute(outside)) {
    events.forEach((e) => {
      html.addEventListener(e, outsideClick)
    });
    element.setAttribute(outside, '');
  }

  function outsideClick(event: Event) {
    if (!element.contains(event.target as Element)) {
      events.forEach((e) => {
        html.removeEventListener(e, outsideClick)
      });

      element.removeAttribute(outside);

      closeDropdown();
    }
  }
}
