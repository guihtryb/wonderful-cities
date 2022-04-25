export default function getElement(selector: string): Element | null {
  return document.querySelector(selector);
};