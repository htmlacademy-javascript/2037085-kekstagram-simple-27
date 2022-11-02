import {createPhotos} from './data.js';

const picturesSection = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const posts = createPhotos();

const renderingPictures = () => {

  const postsFragment = document.createDocumentFragment();
  posts.forEach(({url, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__comments').textContent = comments;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    postsFragment.appendChild(pictureElement);
  });

  picturesSection.appendChild(postsFragment);

};

export {renderingPictures};
