//Функция, возвращающая случайное целое число из переданного диапазона включительно.
// Ссылка на источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomIntInclusive = (min, max) => {
  if (min < 0 || max < 0) {

    return NaN;
  }
  const rand = min + Math.random() * (max + 1 - min);

  return Math.floor(rand);
};

getRandomIntInclusive(5, 8);

//Функция для проверки максимальной длины строки. Будет использоваться для проверки длины введённого комментария
const checkLengthString = (сheckedString, maxLength) => {
  const rezult = сheckedString.length <= maxLength;
  return rezult;
};

checkLengthString(' ', 140);
