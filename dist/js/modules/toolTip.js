import getElement from "../../utils/getElement.js";
import getElements from "../../utils/getElements.js";
const initToolTip = () => {
    const containToolTip = getElements('[data-tooltip=""]');
    containToolTip.forEach((item) => {
        item.addEventListener('mouseover', onMouseOver);
    });
};
const createToolTip = (element) => {
    const toolTipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    toolTipBox.classList.add('tooltip');
    toolTipBox.innerText = text;
    document.body.appendChild(toolTipBox);
    return toolTipBox;
};
const removeToolTip = (tooltip) => {
    tooltip.remove();
};
const onMouseMove = (event, toolTipBox) => {
    toolTipBox.style.top = event.pageY + 20 + 'px';
    toolTipBox.style.left = event.pageX + 20 + 'px';
};
const onMouseOver = (e) => {
    const toolTipBoxCreated = getElement('.tooltip');
    if (toolTipBoxCreated)
        toolTipBoxCreated.remove();
    const toolTipBox = createToolTip(e.currentTarget);
    toolTipBox.style.top = e.pageY + 20 + 'px';
    toolTipBox.style.left = e.pageX + 20 + 'px';
    toolTipBox.addEventListener('mouseleave', () => toolTipBox.remove());
    const image = e.currentTarget;
    image.addEventListener('mousemove', (event) => onMouseMove(event, toolTipBox));
    image.addEventListener('mouseout', () => removeToolTip(toolTipBox));
};
export default initToolTip;
