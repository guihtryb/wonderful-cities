const smoothScrolling = (e: Event): void => {
  e.preventDefault();

  const href: string | null = (e.target as Element).getAttribute('href');

  if (href) {
    const goTo: Element | null = document.querySelector(href);
    goTo?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

const setSmoothScrolling = (): void => {
  const internalLinks: NodeListOf<Element> = document.querySelectorAll('.menu a[href^="#"]');

  internalLinks.forEach((e: Element) => e.addEventListener('click', smoothScrolling));
};

export default setSmoothScrolling;
