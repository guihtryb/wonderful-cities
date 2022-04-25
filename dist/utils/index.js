export const getElement = (selector) => {
    return document.querySelector(selector);
};
export const getElements = (selector) => {
    return document.querySelectorAll(selector);
};
export const getElementHeight = (element) => {
    if (!element)
        return 0;
    const height = element.getBoundingClientRect().height;
    return height;
};
