import getElement from "../../utils/getElement.js";
const showModal = () => {
    const modalContainer = getElement('.modal-container');
    modalContainer === null || modalContainer === void 0 ? void 0 : modalContainer.classList.add('active-modal');
};
const closeModal = () => {
    const modalContainer = getElement('.modal-container');
    modalContainer === null || modalContainer === void 0 ? void 0 : modalContainer.classList.remove('active-modal');
};
const modalEventListener = () => {
    const loginAnchor = getElement('a[data-modal="show"]');
    const closeElement = getElement('button[data-modal="close"]');
    loginAnchor === null || loginAnchor === void 0 ? void 0 : loginAnchor.addEventListener('click', showModal);
    closeElement === null || closeElement === void 0 ? void 0 : closeElement.addEventListener('click', closeModal);
};
export default modalEventListener;
