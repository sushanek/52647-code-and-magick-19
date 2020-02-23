'use strict';

(function () {
  var ESC_KEY = 27;
  var ENTER_KEY = 13;
  var TIMEOUT = 300;
  var lastTimeout;

  window.colors = {
    my: {},
    COAT: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES: ['black', 'red', 'blue', 'yellow', 'green', 'orange', 'silver'],
    FIREBALL: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848', '#000000']
  };

  window.utils = {
    pressEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEY) {
        action();
      }
    },

    pressEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEY) {
        action();
      }
    },

    // Задержка в исполнении кода
    debonce: function (cb) {
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(cb, TIMEOUT);
    },

    // Возращает случайный элемент из массива
    shake: function (array) {
      var index = Math.floor(Math.random() * array.length);
      return array[index];
    },

    // Задаем случайный цвет из набора для мага
    chooseColor: function (element, colors, input, type) {
      element.addEventListener('click', function () {
        var color = window.utils.shake(colors);
        if (element.tagName.toLowerCase() === 'div') {
          element.style.backgroundColor = color;
        } else {
          element.style.fill = color;
        }
        input.value = color;

        // Если цвет глаз или накидки изменился обнавляем мага
        if (type === 'eyes' || type === 'coat') {
          window.colors.my[type] = color;
          window.utils.debonce(window.updateWizards());
        }
      });
    },

    // Обработка ошибки загрузки данных
    errorHandler: function (errorMessage) {
      var node = document.createElement('div');
      node.className = 'error';
      node.textContent = errorMessage;
      document.body.insertAdjacentElement('afterbegin', node);

      // Закрытие ошибки по клику
      document.querySelector('.error').addEventListener('click', function (evt) {
        evt.target.remove();
      });
    }
  };
})();
