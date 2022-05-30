import { getElements, getElement } from "../../utils/index.js";
export function initDropdownMenu() {
    const dropdownMenus = getElements('[data-dropdown]');
    const events = ['touchstart', 'click'];
    dropdownMenus.forEach((menu) => {
        events.forEach((userEvent) => {
            menu.addEventListener(userEvent, handleClick);
        });
    });
}
;
function handleClick(event) {
    event.preventDefault();
    const dropdown = event.currentTarget;
    const events = ['touchstart', 'click'];
    dropdown.classList.add('active-dropdown');
    handleOutsideClick(dropdown, events, closeDropdown);
}
;
function closeDropdown() {
    const dropdown = getElement('[data-dropdown].active-dropdown');
    dropdown === null || dropdown === void 0 ? void 0 : dropdown.classList.remove('active-dropdown');
}
export function handleOutsideClick(element, events, closeDropdown) {
    const html = document.documentElement;
    const outside = 'data-outside';
    if (!element.hasAttribute(outside)) {
        events.forEach((e) => {
            html.addEventListener(e, outsideClick);
        });
        element.setAttribute(outside, '');
    }
    function outsideClick(event) {
        if (!element.contains(event.target)) {
            events.forEach((e) => {
                html.removeEventListener(e, outsideClick);
            });
            element.removeAttribute(outside);
            closeDropdown();
        }
    }
}
