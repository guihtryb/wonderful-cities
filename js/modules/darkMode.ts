const setDarkMode = (): void => {
  const screenMode = JSON.stringify(localStorage.getItem('screen-mode')).replace(/"/g, '');
  const pageBody: HTMLElement | null = document.querySelector('body');

  if (screenMode === 'dark-mode') {
    localStorage.removeItem('screen-mode');
    pageBody?.classList.remove('dark-mode');
  } else {
    localStorage.setItem('screen-mode', 'dark-mode');
    pageBody?.classList.add('dark-mode');
  }
};

const darkModeEventListener = (): void => {
  const setDarkModeElement: HTMLElement | null = document.querySelector('.set-darkmode');

  const screenMode = JSON.stringify(localStorage.getItem('screen-mode')).replace(/"/g, '');

  const pageBody: HTMLElement | null = document.querySelector('body');

  pageBody?.classList.add(screenMode);

  setDarkModeElement?.addEventListener('click', setDarkMode);
};

export default darkModeEventListener;