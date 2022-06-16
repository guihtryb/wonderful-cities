import getElement from "../../utils/getElement.js";

type openingInfo = 'days' | 'hours';

export default function initOpeningHours() {
  const openingElement = getElement('[data-opening-days]') as Element;

  const openingDays = getOpeningInfos(openingElement, 'days');
  const openingHours = getOpeningInfos(openingElement, 'hours');

  const opened = isOpened(openingDays, openingHours);

  setIsOpened(opened);

  return null;
};

const getOpeningInfos = (openingElement: Element, info: openingInfo): number[] => {
  const openingInfo = openingElement?.getAttribute(`data-opening-${info}`) as string;

  const numDateInfos: number[] = openingInfo.split(',').map(Number);

  return numDateInfos;
};

const isOpened = (openingDays: number[], openingHours: number[]): boolean => {
  const now: Date = new Date();

  const nowDay = now.getDay();
  const nowHours = Math.ceil((now.getHours() * 60 + now.getMinutes()) / 60);

  const isOpened = openingDays.includes(nowDay)
    && (nowHours >= openingHours[0] && nowHours <= openingHours[1]);

  return isOpened;
};

const setIsOpened = (isOpened: boolean) => {
  const opening = getElement('.opening-status');
  if (opening) {
    if (isOpened) {
      opening.classList.add('opened');
      opening.textContent = 'opened';
    } else {
      opening.classList.remove('opened');
      opening.textContent = 'closed';
    }
  }
  return null;
};
