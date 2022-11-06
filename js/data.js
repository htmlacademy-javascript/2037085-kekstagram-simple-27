import {getRandomIntInclusive} from './util.js';
import {getRandomArrayElement} from './util.js';


const PHOTO_COUNT = 25;
const MIN_LIKES_COUNT = 15;
const MAX_LIKES_COUNT = 200;
const MIN_COMMENTS_COUNT = 0;
const MAX_COMMENTS_COUNT = 200;
const DESCRIPTIONS = [
  'Кекс в лесу',
  'Кекс едет к ветеринару',
  'Кекс обедает',
];

const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomIntInclusive(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
  comments: getRandomIntInclusive(MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT),
});


const createPhotos = () => {
  const result = [];


  for (let i = 1; i <= PHOTO_COUNT; i++) {
    const photo = createPhoto(i);
    result.push(photo);
  }

  return result;
};

export {createPhotos};
