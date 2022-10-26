//4.15. Больше деталей
// Массив исходных данных:
const PHOTO_DESCRIPTION_COUNT = 25;
const MIN_LIKES_COUNT = 15;
const MAX_LIKES_COUNT = 200;
const MIN_COMMENTS_COUNT = 0;
const MAX_COMMENTS_COUNT = 200;
const DESCRIPTIONS = [
  'Кекс в лесу',
  'Кекс едет к ветеринару',
  'Кекс обедает',
];
const identifiers = [];
const urls = [];

for (let i = 1; i <= PHOTO_DESCRIPTION_COUNT; i++) {
  identifiers.push(i);
  urls.push(`photos/${i}.jpg`);
}

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

//Функция, возвращающая индекс элемента массива
function getRandomArrayElement (еlement) {
  return еlement[getRandomIntInclusive(0, еlement.length - 1)];
}
//Функция builder, создающая описание фотографии
function createPhotoDescription () {
  return {
    id: getRandomArrayElement(identifiers),
    url: getRandomArrayElement(urls),
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomIntInclusive(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
    comments: getRandomIntInclusive(MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT),
  };
}

//Создание массива заданной длины (с 25 сгенерированными объектами)
// eslint-disable-next-line no-unused-vars
const randomPhotoDescription = Array.from({length: 25}, createPhotoDescription);

