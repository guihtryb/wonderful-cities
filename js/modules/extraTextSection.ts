const createExtraParagraph = (): void => {
  const activeCitySection: Element | null = document.querySelector('[data-set="content"] section.active');

  const extraSection: Element | null = document.querySelector('[data-section="extra-content"]');

  const extraSectionFirstP: Element | null = document.querySelector('[data-section="extra-content"] p');

  const citiesSection: Element | null = document.querySelector('#cities');

  const extraSectionNewP: Element | null | undefined = activeCitySection?.lastElementChild;
  
  if (!extraSection) {
    const newSection: HTMLElement = document.createElement('section');
    
    newSection.dataset['section']= 'extra-content';
    newSection.dataset['animation']= 'scroll';
    
    citiesSection?.after(newSection);
    
    newSection.appendChild(extraSectionNewP as Element)
    return;
  }

    extraSectionNewP && extraSection.insertBefore(extraSectionNewP, extraSectionFirstP as Node);
};

const removeExtraParagraph = (): void => {
  const activeCitySection: Element | null = document.querySelector('[data-set="content"] section.active');

  const extraSection: Element | null = document.querySelector('[data-section="extra-content"]');

  const firstParagraph: ChildNode | null | undefined = extraSection?.firstChild;

  if (extraSection && extraSection?.children.length < 2) {
    activeCitySection?.appendChild(firstParagraph as ChildNode);
    extraSection.remove();
    return;
  }

  activeCitySection?.appendChild(firstParagraph as ChildNode);
};

const getElementHeight = (element: Element | null): number => {
  if (!element) return 0;

  const height: number = element.getBoundingClientRect().height;

  return height;
};


export const setExtraParagraph = (): void => {
  const tabNav: Element | null = document
    .querySelector('[data-set="tab"]');

  const activeCitySection: Element | null = document
    .querySelector('[data-set="content"] section.active');

  const activeCitySectionHeight: number = getElementHeight(activeCitySection);

  const tabNavHeight: number = getElementHeight(tabNav);

  const activeCitySectionChildrenLength: number = (
    activeCitySection as HTMLElement
  ).children.length;

  const citySectionIsBigger: boolean = activeCitySectionHeight
    > (tabNavHeight + 60);

  const activeCitySectionHasMoreThanOneChild: boolean = activeCitySectionChildrenLength > 1;

  if (citySectionIsBigger && activeCitySectionHasMoreThanOneChild) {
    const biggerQuantity: number = Math
      .ceil(activeCitySectionHeight / tabNavHeight);

      let index = 0;

    while(index < biggerQuantity) {
      index += 1;
      createExtraParagraph();
    }
  }

  const firstExtraParagraph: Element | null = document
    .querySelector('[data-section="extra-content"] p');

  const firstExtraParagraphHeight: number = getElementHeight(firstExtraParagraph);

  const isAbleToBringParagraphBack: boolean = (firstExtraParagraphHeight + 45)
    < (tabNavHeight - activeCitySectionHeight);

  if (isAbleToBringParagraphBack) {
    removeExtraParagraph();
  }
};

export const deleteLastCityExtraSection = (): void => {
  const activeCitySection: Element | null = document
    .querySelector('[data-set="content"] section.active');

  const extraSectionParagraphs: NodeListOf<Element> = document
    .querySelectorAll('[data-section="extra-content"] p');

  extraSectionParagraphs.forEach((paragraph) => {
    activeCitySection?.appendChild(paragraph);
  });
};

const extraParagraphEventListener = (): void => {
  setExtraParagraph();

  window.addEventListener('resize', setExtraParagraph);
}

export default extraParagraphEventListener;
