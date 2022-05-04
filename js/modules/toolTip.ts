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

const removeToolTip = (tooltip: HTMLDivElement) => {
  tooltip.remove();
};

const onMouseMove = (event: MouseEvent, toolTipBox: HTMLDivElement) => {
  toolTipBox.style.top = event.pageY + 20 + 'px';
  toolTipBox.style.left = event.pageX + 20 + 'px';
};

const onMouseOver = (e: Event): void => {
  const toolTipBoxCreated = getElement('.tooltip');

  if (toolTipBoxCreated) toolTipBoxCreated.remove();

  const toolTipBox = createToolTip(e.currentTarget as Element);

  toolTipBox.style.top = (e as MouseEvent).pageY + 20 + 'px';
  toolTipBox.style.left = (e as MouseEvent).pageX + 20 + 'px';

  toolTipBox.addEventListener('mouseleave', () => toolTipBox.remove());

  const image = e.currentTarget as HTMLImageElement;

  image.addEventListener('mousemove', (event: MouseEvent) => onMouseMove(event, toolTipBox));

  image.addEventListener('mouseout', () => removeToolTip(toolTipBox))
};
export default initToolTip;
