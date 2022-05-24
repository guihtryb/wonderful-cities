import { getElements } from "../../utils/index.js";

export default function initDropdownMenu() {
  const dropdownMenus = getElements('[data-dropdown]');

  dropdownMenus.forEach((menu) => {
    ['touchstart', 'click'].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleEvent);
    });
  });
};

function handleEvent(event: Event) {
  event.preventDefault();
  (event.currentTarget as Element).classList.toggle('active-dropdown');
};
