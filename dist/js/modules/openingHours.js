import getElement from "../../utils/getElement.js";
const twoMinutes = 120000;
export default function initOpeningHours() {
    const openingElement = getElement('[data-opening-days]');
    const openingDays = getOpeningInfos(openingElement, 'days');
    const openingHours = getOpeningInfos(openingElement, 'hours');
    const opened = isOpened(openingDays, openingHours);
    setIsOpened(opened);
    setInterval(() => {
        setIsOpened(opened);
    }, twoMinutes);
    return null;
}
;
const getOpeningInfos = (openingElement, info) => {
    const openingInfo = openingElement === null || openingElement === void 0 ? void 0 : openingElement.getAttribute(`data-opening-${info}`);
    const numDateInfos = openingInfo.split(',').map(Number);
    return numDateInfos;
};
const isOpened = (openingDays, openingHours) => {
    const now = new Date();
    const nowDay = now.getDay();
    const nowHours = now.getHours();
    const isOpened = openingDays.includes(nowDay)
        && (nowHours >= openingHours[0] && nowHours < openingHours[1]);
    return isOpened;
};
const setIsOpened = (isOpened) => {
    const opening = getElement('.opening-status');
    if (opening) {
        if (isOpened) {
            opening.classList.add('opened');
            opening.textContent = 'opened';
        }
        else {
            opening.classList.remove('opened');
            opening.textContent = 'closed';
        }
    }
    return null;
};
