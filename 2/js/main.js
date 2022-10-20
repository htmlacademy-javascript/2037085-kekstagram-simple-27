//Функция, возвращающая случайное целое число из переданного диапазона включительно.
// Ссылка на источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  if (min >= 0 && max >= 0 && min < max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
  return NaN;
}

getRandomIntInclusive(5, 8);


//Функция для проверки максимальной длины строки. Будет использоваться для проверки длины введённого комментария
const checksLengthString = function (сheckedString, minLength, maxLength) {
  return сheckedString.length >= minLength && сheckedString.length <= maxLength;
};
// eslint-disable-next-line no-unused-vars
const rezult = checksLengthString('123', 20, 140);
// eslint-disable-next-line no-console
console.log(rezult); // Сейчас в консоли false, так как три символа меньше 20 (минимальная длина)


