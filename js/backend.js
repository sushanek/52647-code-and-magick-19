'use strict';
(function () {
  window.backend = {};

  window.backend.load = function (onLoad, onError) {
    var URL = 'https://js.dump.academy/code-and-magick/data1';
    var Code = {
      OK: 200,
      NOT_FOUND: 404,
      SERVER_ERROR: 500
    };

    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.open('GET', URL);

    xhr.addEventListener('load', function () {
      switch (xhr.status) {
        case Code.OK:
          onLoad(xhr.response);
          break;
        case Code.NOT_FOUND:
          onError(Code.NOT_FOUND + ' Ничего не нашел');
          break;
        case Code.SERVER_ERROR:
          onError(Code.SERVER_ERROR + ' Ошибка на сервере');
          break;
        default:
          onError('Неизвестная ошибка');
      }
    });

    xhr.send();
  };

  window.backend.save = function (data, onLoad, onError) {
    var URL = 'https://js.dump.academy/code-and-magick';
    var xhr = new XMLHttpRequest();
    xhr.responceType = 'json';

    xhr.open('POST', URL);

    xhr.addEventListener('load', function () {
      onLoad(xhr.response);
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.send(data);
  };
})();
