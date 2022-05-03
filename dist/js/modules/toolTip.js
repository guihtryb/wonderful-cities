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
const removeToolTip = (image, pageY, pageX) => {
    const toolTipBox = getElement('.tooltip');
    const mapBottomToTop = Math.floor(image.offsetTop + image.height);
    const mapToTop = Math.floor(image.offsetTop);
    const mapLeft = Math.floor(image.offsetLeft);
    const mapTotalLeft = Math.floor(image.offsetLeft + image.width);
    if (pageY > mapBottomToTop)
        toolTipBox === null || toolTipBox === void 0 ? void 0 : toolTipBox.remove();
    if (pageY < mapToTop)
        toolTipBox === null || toolTipBox === void 0 ? void 0 : toolTipBox.remove();
    if (pageX < mapLeft)
        toolTipBox === null || toolTipBox === void 0 ? void 0 : toolTipBox.remove();
    if (pageX > mapTotalLeft)
        toolTipBox === null || toolTipBox === void 0 ? void 0 : toolTipBox.remove();
};
const onMouseMove = (event, toolTipBox, image) => {
    toolTipBox.style.top = event.pageY - 15 + 'px';
    toolTipBox.style.left = event.pageX - 60 + 'px';
    const pageY = event.pageY;
    const pageX = event.pageX;
    removeToolTip(image, pageY, pageX);
};
const onMouseOver = (e) => {
    const toolTipBoxCreated = getElement('.tooltip');
    const image = e.currentTarget;
    if (toolTipBoxCreated) {
        toolTipBoxCreated.remove();
    }
    const toolTipBox = createToolTip(e.currentTarget);
    toolTipBox.style.top = e.pageY - 15 + 'px';
    toolTipBox.style.left = e.pageX - 60 + 'px';
    toolTipBox.addEventListener('mousemove', (event) => onMouseMove(event, toolTipBox, image));
    toolTipBox.addEventListener('mouseleave', () => toolTipBox.remove());
};
export default initToolTip;
