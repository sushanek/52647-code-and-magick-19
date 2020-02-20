'use strict';
(function () {
  window.backend = {};

  var Code = {
    OK: 200,
    MULTIPLE_CHOICE: 300,
    NOT_FOUND: 404,
    SERVER_ERROR: 500
  };

  var URL = {
    GET: 'https://js.dump.academy/code-and-magick/data',
    POST: 'https://js.dump.academy/code-and-magick'
  };

  window.backend.load = function (method, onLoad, onError, data) {

    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open(method, URL[method]);

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

    xhr.send(data);
  };
})();
