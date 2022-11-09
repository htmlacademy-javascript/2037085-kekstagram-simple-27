const MAX_SCALE_RANGE = 100;
const MIN_SCALE_RANGE = 25;


const reduceScale = document.querySelector('.scale__control--smaller'); // Уменьшить масштаб
const enhanceScale = document.querySelector('.scale__control--bigger'); // Увеличить масштаб
const valueElement = document.querySelector('.scale__control--value'); // Поле со значением
const originalSizeImage = document.querySelector('.img-upload__preview'); //Картинка исходного размера
let sizeValue = 100;

// Функция масштабирования
const editSize = () => {

  reduceScale.addEventListener('click', () => {
    if(sizeValue > MIN_SCALE_RANGE) {
      sizeValue -= MIN_SCALE_RANGE;
      valueElement.value = `${sizeValue}%`;
      originalSizeImage.style.transform = `scale(${sizeValue / 100})`;
    }
  });

  enhanceScale .addEventListener('click', () => {
    if(sizeValue < MAX_SCALE_RANGE) {
      sizeValue += MIN_SCALE_RANGE;
      valueElement.value = `${sizeValue}%`;
      originalSizeImage.style.transform = `scale(${sizeValue / 100})`;
    }
  });
};

//Функция, устанавливающая значение масштаба
const getScaleValue = (value) => {
  valueElement.value = `${value}%`;
  originalSizeImage.style.transform = `scale(${value / 100})`;
};

getScaleValue(sizeValue);

//Функция, сбрасывающая значение масштаба
const resetScale = () => {
  sizeValue = MAX_SCALE_RANGE;
  getScaleValue(MAX_SCALE_RANGE);
  originalSizeImage.style.transform = `scale(${sizeValue / 100})`;
};

editSize();

export {resetScale};
