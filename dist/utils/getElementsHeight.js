export default function getElementHeight(element) {
    if (!element)
        return 0;
    const height = element.getBoundingClientRect().height;
    return height;
}
;
