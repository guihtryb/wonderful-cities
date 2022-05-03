import getElement from "../../utils/getElement.js";
import getElements from "../../utils/getElements.js";

const initToolTip = (): void => {
  const containToolTip: NodeListOf<Element> = getElements('[data-tooltip=""]');

  containToolTip.forEach((item: Element) => {
    item.addEventListener('mouseover', onMouseOver);
  });
};

const createToolTip = (element: Element): HTMLDivElement => {
  const toolTipBox: HTMLDivElement = document.createElement('div');

  const text: string | null = element.getAttribute('aria-label');

  toolTipBox.classList.add('tooltip');

  toolTipBox.innerText = text as string;

  document.body.appendChild(toolTipBox);

  return toolTipBox;
};

const removeToolTip = (image: HTMLImageElement, pageY: number, pageX: number) => {
  const toolTipBox: Element | null = getElement('.tooltip');

  const mapBottomToTop = Math.floor(image.offsetTop + image.height);
  const mapToTop = Math.floor(image.offsetTop);
  const mapLeft = Math.floor(image.offsetLeft);
  const mapTotalLeft = Math.floor(image.offsetLeft + image.width);

  if (pageY > mapBottomToTop) toolTipBox?.remove();
  if (pageY < mapToTop) toolTipBox?.remove();
  if (pageX < mapLeft) toolTipBox?.remove();
  if (pageX > mapTotalLeft) toolTipBox?.remove();
};

const onMouseMove = (event: MouseEvent, toolTipBox: HTMLDivElement, image: HTMLImageElement) => {
  toolTipBox.style.top = event.pageY - 15 + 'px';
  toolTipBox.style.left = event.pageX - 60 + 'px';

  const pageY = event.pageY;
  const pageX = event.pageX;

  removeToolTip(image, pageY, pageX);
};

const onMouseOver = (e: Event): void => {
  const toolTipBoxCreated = getElement('.tooltip');

  if (toolTipBoxCreated) toolTipBoxCreated.remove();

  const toolTipBox = createToolTip(e.currentTarget as Element);

  toolTipBox.style.top = (e as MouseEvent).pageY - 15 + 'px';
  toolTipBox.style.left = (e as MouseEvent).pageX - 60 + 'px';

  const image = e.currentTarget as HTMLImageElement;

  toolTipBox.addEventListener('mousemove', (event: MouseEvent) => onMouseMove(event, toolTipBox, image));

  toolTipBox.addEventListener('mouseleave', () => toolTipBox.remove());
};

export default initToolTip;
