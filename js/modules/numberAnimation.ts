const initNumbersAnimation = () => {
const setNumberAnimation = () => {
  const numbers: NodeListOf<HTMLSpanElement> = document.querySelectorAll('[data-number]')

  numbers.forEach((number) => setCounter(number, 100));
};

const setCounter = (number: HTMLSpanElement, speed: number) => {
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

const formatInhabitantsNumber = (inhabitants: number) => {
  const inhabitantsNum = inhabitants.toString();

  let inhabitantsNumFormated = '';

  const dotHouses: number[] = getDotHouses(inhabitantsNum);

  for (let index = 0; index < inhabitantsNum.length; index += 1) {
    if (dotHouses.includes(index)) {
      inhabitantsNumFormated += `.${inhabitantsNum[index]}`;
    } else {
      inhabitantsNumFormated += inhabitantsNum[index];
    }
  }

  return inhabitantsNumFormated;
};

const getDotHouses = (numToString: string) => {
  let counter = 0;
  const dotHouses: number[] = [];

  for (let index = numToString.length; index > 0; index -= 1) {
    if (counter % 3 === 0 && counter !== 0) {
      dotHouses.push(index);
    }
    counter += 1;
  }

  return dotHouses.sort();
};

const handleMutation: MutationCallback = (mutation) => {
  if ((mutation[0].target as Element).classList.contains('scroll-active')) {
    setNumberAnimation();
    observer.disconnect();
  }
};

const observerTarget = document.querySelector('.numbers');

const observer = new MutationObserver(handleMutation);

observer.observe(observerTarget as Element, { attributes: true });
};

export default initNumbersAnimation;
