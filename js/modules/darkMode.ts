const setDarkMode = (): void => {
  const pageBody: HTMLElement | null = document.querySelector('body');

  pageBody?.classList.toggle('dark-mode');
};

const darkModeEventListener = (): void => {
  const setDarkModeElement: HTMLElement | null = document.querySelector('.set-darkmode');

  setDarkModeElement?.addEventListener('click', setDarkMode);
}

export default darkModeEventListener;