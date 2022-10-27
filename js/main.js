/* eslint-disable no-template-curly-in-string */
//4.15. Больше деталей
const PHOTO_COUNT = 25;
const MIN_LIKES_COUNT = 15;
const MAX_LIKES_COUNT = 200;
const MIN_COMMENTS_COUNT = 0;
const MAX_COMMENTS_COUNT = 200;
// Массив исходных данных:
const DESCRIPTIONS = [
  'Кекс в лесу',
  'Кекс едет к ветеринару',
  'Кекс обедает',
];

//Функция, возвращающая случайное целое число из переданного диапазона включительно.
// Ссылка на источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomIntInclusive = (min, max) => {
  if (min < 0 || max < 0) {

    return NaN;
  }
  const rand = min + Math.random() * (max + 1 - min);

  return Math.floor(rand);
};

//Функция для проверки максимальной длины строки. Будет использоваться для проверки длины введённого комментария
// eslint-disable-next-line no-unused-vars
const checkLengthString = (checkedString, maxLength) => {
  const result = checkedString.length <= maxLength;
  return result;
};

//Функция, возвращающая индекс элемента массива
const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

//Функция builder, создающая объект 1 фотографии
const createPhoto = (index) => ({
  id: index,
  url: 'photos/${index}.jpg',
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomIntInclusive(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
  comments: getRandomIntInclusive(MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT),
});

//Создание массива заданной длины - с 25 сгенерированными объектами
// Функция, создающая много фотографий
const createPhotos = () => {
  const result = []; //Результирующий массив


  for (let i = 1; i <= PHOTO_COUNT; i++) {
    const photo = createPhoto(i); // Передаём счётчик
    result.push(photo);
  }

  return result; // Возвращаем заполненный массив
};

createPhotos();
