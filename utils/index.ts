export const getElement = (selector: string): Element | null => {
  return document.querySelector(selector);
};

export const getElements = (selector: string): NodeListOf<Element> => {
  return document.querySelectorAll(selector);
};

export const getElementHeight = (element: Element | null): number => {
  if (!element) return 0;

  const height: number = element.getBoundingClientRect().height;

  return height;
};
