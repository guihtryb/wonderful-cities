import getElement from "../../utils/getElement.js"

const toggleModal = (e: Event): void => {
  e.preventDefault();
  const modalContainer = getElement('.modal-container');
  modalContainer?.classList.toggle('active-modal');
};

const outsideModalClickControl = (e: Event): void => {
  const outsideModal: Element | null = getElement('.modal-container');

  if (e.target !== outsideModal) return;

  toggleModal(e);
};

const modalEventListener = ():void => {
  const loginAnchor: Element | null = getElement('[data-modal="show"]');
  const closeElement: Element | null = getElement('[data-modal="close"]');
  const outsideModal: Element | null = getElement('.modal-container');
  
  loginAnchor?.addEventListener('click', toggleModal);
  closeElement?.addEventListener('click', toggleModal);
  outsideModal?.addEventListener('click', outsideModalClickControl);
};

export default modalEventListener;
