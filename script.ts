const pageBody: HTMLElement | null = document.querySelector('body');
const setDarkModeElement: HTMLElement | null = document.querySelector('.set-darkmode');

const setDarkMode = () => {
  pageBody?.classList.toggle('dark-mode');
};

setDarkModeElement?.addEventListener('click', setDarkMode);
