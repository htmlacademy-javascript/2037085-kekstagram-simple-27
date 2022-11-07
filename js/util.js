//Функция, возвращающая случайное целое число из переданного диапазона включительно.
// Ссылка на источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomIntInclusive = (min, max) => {
  if (min < 0 || max < 0) {

    return NaN;
  }
  const rand = min + Math.random() * (max + 1 - min);

  return Math.floor(rand);
};

const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomIntInclusive, getRandomArrayElement, isEscapeKey, };
