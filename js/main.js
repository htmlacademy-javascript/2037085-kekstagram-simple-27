import {renderingPictures} from './picture.js';
import {setPhotoListener} from './form.js';
import {initSlider} from './slider.js';
import {setSizeListeners} from './scale.js';

renderingPictures();
setPhotoListener();
initSlider();
setSizeListeners();

//Вызываю, так как линтер ругается: "Свойство "Название функции" объявлено, но его значение не было прочитано. А код с ошибками в гитхаб нельзя отправлять"
