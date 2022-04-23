const setFaqAccordion = ({ currentTarget }: Event): void => {
  (currentTarget as Element)?.classList.toggle('opened');

  (currentTarget as Element).nextElementSibling?.classList.toggle('active-accordion');
}

const faqAccordionEventListener = (): void => {
  const faqDescriptionTitles: NodeListOf<Element> = document.querySelectorAll('.faq-list dt');

  faqDescriptionTitles
    .forEach((dt) => dt.addEventListener('click', setFaqAccordion));
}
export default faqAccordionEventListener;
