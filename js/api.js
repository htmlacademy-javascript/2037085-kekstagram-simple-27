import {showAlert} from './util.js';

const ERROR_GETTING_DATА = 'Ошибка получения данных с сервера';
const ERROR_SENDING_DATА = 'Ошибка отправки данных на сервер';

const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      showAlert(ERROR_GETTING_DATА);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple/multipart/form-data',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail(ERROR_SENDING_DATА);
      }
    })
    .catch(() => onFail(ERROR_SENDING_DATА));
};


export {getData, sendData};
