export default function getElementHeight(element: Element | null): number {
  if (!element) return 0;

  const height: number = element.getBoundingClientRect().height;

  return height;
};