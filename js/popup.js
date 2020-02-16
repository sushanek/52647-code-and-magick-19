'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpenControl = document.querySelector('.setup-open');
  var setupCloseControl = setup.querySelector('.setup-close');

  // Функция вызывает закрытия окна если на поле ввода нет фокуса
  var onPopupEscPress = function (evt) {
    if (evt.target.tagName !== 'INPUT') {
      window.util.isEscEvent(evt, closePopup);
    }
  };

  // Функция открытия модального окна
  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpenControl.addEventListener('click', openPopup);
  setupCloseControl.addEventListener('click', closePopup);

  setupOpenControl.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupCloseControl.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });
})();
