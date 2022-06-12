const initNumbersAnimation = () => {
    const setNumberAnimation = () => {
        const numbers = document.querySelectorAll('[data-number]');
        numbers.forEach((number) => setCounter(number, 100));
    };
    const setCounter = (number, speed) => {
        const total = +number.innerText;
        const speedFactor = speed - number.innerText.length * 10;
        const interval = number.innerText.length * 10 - speedFactor;
        let counter = 0;
        number.innerText = counter + ' inhabitants';
        const timer = setInterval(() => {
            counter += Math.round(total / 80);
            number.innerText = formatInhabitantsNumber(counter) + ' inhabitants';
            if (counter > total) {
                number.innerText = formatInhabitantsNumber(total) + ' inhabitants';
                clearInterval(timer);
            }
        }, interval);
    };
    const formatInhabitantsNumber = (inhabitants) => {
        const inhabitantsNum = inhabitants.toString();
        let inhabitantsNumFormated = '';
        const dotHouses = getDotHouses(inhabitantsNum);
        for (let index = 0; index < inhabitantsNum.length; index += 1) {
            if (dotHouses.includes(index)) {
                inhabitantsNumFormated += `.${inhabitantsNum[index]}`;
            }
            else {
                inhabitantsNumFormated += inhabitantsNum[index];
            }
        }
        return inhabitantsNumFormated;
    };
    const getDotHouses = (numToString) => {
        let counter = 0;
        const dotHouses = [];
        for (let index = numToString.length; index > 0; index -= 1) {
            if (counter % 3 === 0 && counter !== 0) {
                dotHouses.push(index);
            }
            counter += 1;
        }
        return dotHouses.sort();
    };
    const handleMutation = (mutation) => {
        if (mutation[0].target.classList.contains('scroll-active')) {
            setNumberAnimation();
            observer.disconnect();
        }
    };
    const observerTarget = document.querySelector('.numbers');
    const observer = new MutationObserver(handleMutation);
    observer.observe(observerTarget, { attributes: true });
};
export default initNumbersAnimation;
