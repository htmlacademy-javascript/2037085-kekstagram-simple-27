import {renderingPictures} from './picture.js';
import {setPhotoListener, setUserFormSubmit} from './form.js';
import {initSlider} from './slider.js';
import {setSizeListeners} from './scale.js';
import {getData} from './api.js';

setPhotoListener();
initSlider();
setSizeListeners();
getData(renderingPictures);
setUserFormSubmit();
//Добавила этот комментарий, чтобы было хоть какое-то изменение и архив можно было обновить, дабы потом отправить ещё раз на проверку
