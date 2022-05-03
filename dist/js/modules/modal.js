import getElement from "../../utils/getElement.js";
const toggleModal = (e) => {
    e.preventDefault();
    const modalContainer = getElement('.modal-container');
    modalContainer === null || modalContainer === void 0 ? void 0 : modalContainer.classList.toggle('active-modal');
};
const outsideModalClickControl = (e) => {
    const outsideModal = getElement('.modal-container');
    if (e.target !== outsideModal)
        return;
    toggleModal(e);
};
const modalEventListener = () => {
    const loginAnchor = getElement('[data-modal="show"]');
    const closeElement = getElement('[data-modal="close"]');
    const outsideModal = getElement('.modal-container');
    loginAnchor === null || loginAnchor === void 0 ? void 0 : loginAnchor.addEventListener('click', toggleModal);
    closeElement === null || closeElement === void 0 ? void 0 : closeElement.addEventListener('click', toggleModal);
    outsideModal === null || outsideModal === void 0 ? void 0 : outsideModal.addEventListener('click', outsideModalClickControl);
};
export default modalEventListener;
