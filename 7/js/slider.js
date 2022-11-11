const EFFECTS = [
  {
    name: 'none',
    min: 0,
    max: 100,
    step: 1,
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
];


const formUploadImage = document.querySelector('.effects__list');
const sliderElement = document.querySelector('.effect-level__slider');
const previewUploadImage = document.querySelector('.img-upload__preview img');
const applyingEffect = document.querySelector('.effect-level__value');

const DEFAULT_EFFECT = EFFECTS[0];

let currentEffect = DEFAULT_EFFECT;

const isDefault = () => currentEffect === DEFAULT_EFFECT;

const updateSlider = () => {
  sliderElement.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: currentEffect.min,
      max: currentEffect.max,
    },
    step: currentEffect.step,
    start: currentEffect.max,
  });

  if (isDefault()) {
    sliderElement.classList.add('hidden');
  }
};

const onFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }

  currentEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  updateSlider();
};

const onSliderUpdate = () => {
  sliderElement.classList.add('hidden');
  previewUploadImage.style.filter = 'none';
  previewUploadImage.removeAttribute('class');
  previewUploadImage.className = '';
  applyingEffect.value = '';

  if (isDefault()){
    return;
  }

  sliderElement.classList.remove('hidden');

  const sliderValue = sliderElement.noUiSlider.get();
  previewUploadImage.style.filter = `${currentEffect.style}(${sliderValue}${currentEffect.unit})`;
  previewUploadImage.classList.add(`effects__preview--${currentEffect.name}`);
  applyingEffect.value = sliderValue;
};

const resetEffects = () => {
  currentEffect = DEFAULT_EFFECT;
  updateSlider();
};

const initSlider = () => {
  noUiSlider.create(sliderElement, {
    range: {
      min: DEFAULT_EFFECT.min,
      max: DEFAULT_EFFECT.max,
    },
    step: DEFAULT_EFFECT.step,
    start: DEFAULT_EFFECT.max,
    сonnect: 'lower',
  });

  updateSlider();

  sliderElement.classList.add('hidden');
  sliderElement.noUiSlider.on('update', onSliderUpdate);
  formUploadImage.addEventListener('change', onFormChange);
};

export {resetEffects, initSlider};
