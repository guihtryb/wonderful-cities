const setCityTab = (index) => {
    const tabContent = document.querySelectorAll('[data-set="content"] section');
    tabContent.forEach((section) => section.classList.remove('active'));
    tabContent[index].classList.add('active');
};
const citiesTabEventListener = () => {
    const citiesTabMenu = document.querySelectorAll('[data-set="tab"] li');
    citiesTabMenu === null || citiesTabMenu === void 0 ? void 0 : citiesTabMenu.forEach((city, index) => {
        city.addEventListener('click', () => setCityTab(index));
    });
};
export default citiesTabEventListener;
