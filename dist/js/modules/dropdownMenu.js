import { getElements } from "../../utils/index.js";
export default function initDropdownMenu() {
    const dropdownMenus = getElements('[data-dropdown]');
    dropdownMenus.forEach((menu) => {
        ['touchstart', 'click'].forEach((userEvent) => {
            menu.addEventListener(userEvent, handleEvent);
        });
    });
}
;
function handleEvent(event) {
    event.preventDefault();
    event.currentTarget.classList.toggle('active-dropdown');
}
;
