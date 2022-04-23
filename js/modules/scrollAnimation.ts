const getWindowPercentage = (percentage: number) => window.innerHeight * (percentage / 100);

const setScrollAnimation = () => {
  const jsScrollElements: NodeListOf<Element> = document.querySelectorAll('[data-animation="scroll"]');

  const windowPercentage = getWindowPercentage(70);
  
  jsScrollElements.forEach((element) => {
    const elementToTop = element.getBoundingClientRect().top;

    const elementIsVisible = elementToTop <= windowPercentage;

    if (elementIsVisible)
      element.classList.add('scroll-active');
    else
      element.classList.remove('scroll-active');
  });
};

const startScrollAnimation = () => {
  setScrollAnimation();

  window.addEventListener('scroll', setScrollAnimation)
};

export default startScrollAnimation;