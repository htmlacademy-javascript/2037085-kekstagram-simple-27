import {isEscapeKey} from './util.js';

const form = document.querySelector('#upload-select-image');
const formUploadPhoto = form.querySelector('#upload-file');
const uploadOverlayPhoto = form.querySelector('.img-upload__overlay');
const uploadCancelPhoto = document.querySelector('#upload-cancel');

const onOverlayEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeForm();
  }
};

const onButtonCloseOverlayClick = () => {
  closeForm();
};

const openForm = () => {
  uploadOverlayPhoto.classList.remove('hidden');
  document.body.classList.add('modal-open');

  uploadCancelPhoto.addEventListener('click', onButtonCloseOverlayClick);
  document.addEventListener('keydown', onOverlayEscKeydown);
};

function closeForm() {
  uploadOverlayPhoto.classList.add('hidden');
  document.body.classList.remove('modal-open');
  formUploadPhoto.value = '';

  document.removeEventListener('keydown', onOverlayEscKeydown);
  uploadCancelPhoto.removeEventListener('click', onButtonCloseOverlayClick);
  uploadCancelPhoto.addEventListener('click', openForm);
}

const onFormUploadPhotoChange = () => {
  openForm();
};


const setPhotoListener = () => {
  formUploadPhoto.addEventListener('change', onFormUploadPhotoChange);
};

export {setPhotoListener};

