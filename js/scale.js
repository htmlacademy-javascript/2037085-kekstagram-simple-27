const MAX_SCALE_RANGE = 100;
const MIN_SCALE_RANGE = 25;
const DEFAULT_SCALE = 100;


const reduceScale = document.querySelector('.scale__control--smaller');
const enhanceScale = document.querySelector('.scale__control--bigger');
const valueElement = document.querySelector('.scale__control--value');
const originalSizeImage = document.querySelector('.img-upload__preview');

let sizeValue = DEFAULT_SCALE;

const onReduceButtonClick = () => {

  if (sizeValue > MIN_SCALE_RANGE) {
    sizeValue -= MIN_SCALE_RANGE;
    valueElement.value = `${sizeValue}%`;
    originalSizeImage.style.transform = `scale(${sizeValue / DEFAULT_SCALE})`;
  }
};

const onIncreaseButtonClick = () => {

  if (sizeValue < MAX_SCALE_RANGE) {
    sizeValue += MIN_SCALE_RANGE;
    valueElement.value = `${sizeValue}%`;
    originalSizeImage.style.transform = `scale(${sizeValue / DEFAULT_SCALE})`;
  }
};

const getScaleValue = (value) => {
  valueElement.value = `${value}%`;
  originalSizeImage.style.transform = `scale(${value / DEFAULT_SCALE})`;
};

const resetScale = () => {
  sizeValue = MAX_SCALE_RANGE;
  getScaleValue(MAX_SCALE_RANGE);
  originalSizeImage.style.transform = 'scale(1)';
};

const setSizeListeners = () => {
  reduceScale.addEventListener('click', onReduceButtonClick);
  enhanceScale .addEventListener('click', onIncreaseButtonClick);
};

export {resetScale, setSizeListeners};

