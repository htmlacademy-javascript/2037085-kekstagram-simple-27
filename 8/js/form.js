import {isEscapeKey} from './util.js';
import {resetEffects} from './slider.js';
import {resetScale} from './scale.js';
import {sendData} from './api.js';

const form = document.querySelector('#upload-select-image');
const formUploadPhoto = form.querySelector('#upload-file');
const uploadOverlayPhoto = form.querySelector('.img-upload__overlay');
const uploadCancelPhoto = document.querySelector('#upload-cancel');
const submitButton = document.querySelector('#upload-submit');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text'
});

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Сохранить';
};

const onButtonCloseOverlayClick = () => {
  closeForm();
};

const onOverlayEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeForm();
  }
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
  resetEffects();
  resetScale();

  document.removeEventListener('keydown', onOverlayEscKeydown);
  uploadCancelPhoto.removeEventListener('click', onButtonCloseOverlayClick);
}

const onFormUploadPhotoChange = () => {
  openForm();
};


const setPhotoListener = () => {
  formUploadPhoto.addEventListener('change', onFormUploadPhotoChange);
};

const renderSuccessMessage = () => {
  const successElement = successTemplate.cloneNode(true);
  document.body.append(successElement);

  successElement.addEventListener('click', () => successElement.remove());
  document.addEventListener('keydown', (evt) => {

    if (evt.key === 'Escape') {
      successElement.remove();
    }
  }
  );
};

const renderErrorMessage = () => {
  const failElement = errorTemplate.cloneNode(true);
  document.body.append(failElement);

  failElement.addEventListener('click', () => failElement.remove());
  document.addEventListener('keydown', (evt) => {

    if (evt.key === 'Escape') {
      failElement.remove();
    }
  }
  );
};

const setUserFormSubmit = () => {
  form.addEventListener('submit', (evt) => {
    const isValid = pristine.validate();
    evt.preventDefault();

    if (isValid) {
      blockSubmitButton();

      sendData(
        () => {
          unblockSubmitButton();
          renderSuccessMessage();
        },
        () => {
          renderErrorMessage();
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};

export {setPhotoListener, setUserFormSubmit};

