'use strict';

(function () {
  var ESC_KEY = 27;
  var ENTER_KEY = 13;
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

    shake: function (array) {
      var index = Math.floor(Math.random() * array.length);
      return array[index];
    },

    chooseColor: function (element, colors, input) {
      element.addEventListener('click', function () {
        var color = window.utils.shake(colors);
        if (element.tagName.toLowerCase() === 'div') {
          element.style.backgroundColor = color;
        } else {
          element.style.fill = color;
        }
        input.value = color;
      });
    },

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

  window.colors = {
    COAT: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES: ['black', 'red', 'blue', 'yellow', 'green'],
    FIREBALL: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
  };
})();
