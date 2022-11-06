import {isEscapeKey} from './util.js';

const body = document.querySelector('body');
const form = document.querySelector('#upload-select-image');
const formUploadFoto = form.querySelector('#upload-foto');
const uploadCancelFoto = document.querySelector('#upload-cancel');
const uploadOverlayFoto = form.querySelector('.img-upload__overlay');

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
  uploadOverlayFoto.classList.remove('hidden');
  body.classList.add('modal-open');

  uploadCancelFoto.addEventListener('click', onButtonCloseOverlayClick);
  document.addEventListener('keydown', onOverlayEscKeydown);
};


function closeForm() {
  uploadOverlayFoto.classList.add('hidden');
  body.classList.remove('modal-open');
  formUploadFoto.value = '';

  document.removeEventListener('keydown', onOverlayEscKeydown);
  uploadCancelFoto.removeEventListener('click', onButtonCloseOverlayClick);
}

const onFormUploadFotoChange = () => {
  openForm();
};

formUploadFoto.addEventListener('change', onFormUploadFotoChange);
