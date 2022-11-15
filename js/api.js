import {showAlert} from './util.js';

const API_URL = 'https://27.javascript.pages.academy/kekstagram-simple';

const GET_DATA_ERROR = 'Ошибка получения данных с сервера';

const getData = (onSuccess) => {
  fetch(`${API_URL}/data`)
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      showAlert(GET_DATA_ERROR);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    API_URL,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => onFail());
};

export {getData, sendData};
