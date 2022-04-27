import { controlExtraParagraph } from "./extraTextSection.js";
import { deleteLastCityExtraSection } from "../../utils/index.js";
import { setScrollAnimation } from "./scrollAnimation.js";
const setCityTab = (index) => {
    const tabContent = document.querySelectorAll('[data-set="content"] section');
    tabContent.forEach((section) => section.classList.remove('active'));
    tabContent[index].classList.add('active');
};
const citiesTabEventListener = () => {
    const citiesTabMenu = document.querySelectorAll('[data-set="tab"] li');
    citiesTabMenu === null || citiesTabMenu === void 0 ? void 0 : citiesTabMenu.forEach((city, index) => {
        city.addEventListener('click', () => {
            setScrollAnimation();
            deleteLastCityExtraSection();
            setCityTab(index);
            controlExtraParagraph();
        });
    });
};
export default citiesTabEventListener;
