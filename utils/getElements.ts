export default function getElements(selector: string): NodeListOf<Element> {
  return document.querySelectorAll(selector);
};