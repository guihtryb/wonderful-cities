const tabNav = document.querySelector('[data-set="tab"]');


const createExtraParagraph = () => {
  const activeCitySection = document.querySelector('[data-set="content"] section.active');

  const extraSection = document.querySelector('[data-section="extra-content"]');

  const citiesSection = document.querySelector('#cities');

  const extraSectionParagraph = activeCitySection?.lastElementChild;
  
  if (!extraSection) {
    const newSection = document.createElement('section');
    
    newSection.dataset['section']= 'extra-content';
    newSection.dataset['animation']= 'scroll';
    
    citiesSection?.after(newSection);
    
    newSection.appendChild(extraSectionParagraph as ChildNode)
    return;
  }
    extraSectionParagraph && extraSection?.appendChild(extraSectionParagraph);
};

const removeExtraParagraph = ():void => {
  const activeCitySection = document.querySelector('[data-set="content"] section.active');

  const extraSection = document.querySelector('[data-section="extra-content"]');

  const firstParagraph = extraSection?.firstChild;

  if (extraSection && extraSection?.children.length < 2) {
    activeCitySection?.appendChild(firstParagraph as ChildNode);
    extraSection.remove();
    return;
  }

  activeCitySection?.appendChild(firstParagraph as ChildNode);
};

const setExtraParagraph = (): void => {
  const activeCitySection = document.querySelector('[data-set="content"] section.active');

  const activeCitySectionHeight = activeCitySection
    ?.getBoundingClientRect().height;

  const tabNavHeight = tabNav
    ?.getBoundingClientRect().height;

  const activeCitySectionChildrenLength = (activeCitySection as HTMLElement)
    .children.length;

  const heightsExist = activeCitySectionHeight && tabNavHeight;

  const citySectionIsBigger = heightsExist
    && (activeCitySectionHeight > (tabNavHeight + 59));

  const activeCitySectionHasMoreThanOneChild = activeCitySectionChildrenLength > 1;

  if (citySectionIsBigger && activeCitySectionHasMoreThanOneChild) {
    createExtraParagraph();
  }

  const firstExtraParagraph = document.querySelector('[data-section="extra-content"] p');

  const firstExtraParagraphHeight = firstExtraParagraph
    ?.getBoundingClientRect().height;

  const firstExtraParagraphHeightAlsoExist =  activeCitySectionHeight
    && tabNavHeight && firstExtraParagraphHeight;

  const isAbleToBringParagraphBack = firstExtraParagraphHeightAlsoExist 
    && (firstExtraParagraphHeight + 57) < (tabNavHeight - activeCitySectionHeight);

  if (isAbleToBringParagraphBack) {
    removeExtraParagraph();
  }
};

const extraParagraphEventListener = () => {
  setExtraParagraph();

  window.addEventListener('resize', setExtraParagraph);
}

export default extraParagraphEventListener;
