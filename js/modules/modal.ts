import getElement from "../../utils/getElement.js"

const showModal = (): void => {
  const modalContainer = getElement('.modal-container');
  modalContainer?.classList.add('active-modal');
}

const closeModal = (): void => {
  const modalContainer = getElement('.modal-container');
  modalContainer?.classList.remove('active-modal');
}

const modalEventListener = ():void => {
  const loginAnchor: Element | null = getElement('a[data-modal="show"]');
  const closeElement: Element | null = getElement('button[data-modal="close"]');

  loginAnchor?.addEventListener('click', showModal)
  closeElement?.addEventListener('click', closeModal)
}

export default modalEventListener;
