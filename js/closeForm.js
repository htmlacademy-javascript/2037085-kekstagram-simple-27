import { uploadOverlayPhoto, formUploadPhoto, onOverlayEscKeydown, uploadCancelPhoto, onButtonCloseOverlayClick } from './form';

//const closeForm = () => {
export function closeForm() {
  uploadOverlayPhoto.classList.add('hidden');
  document.body.classList.remove('modal-open');
  formUploadPhoto.value = '';

  document.removeEventListener('keydown', onOverlayEscKeydown);
  uploadCancelPhoto.removeEventListener('click', onButtonCloseOverlayClick);
}
