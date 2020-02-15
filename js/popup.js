'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpenControl = document.querySelector('.setup-open');
  var setupCloseControl = setup.querySelector('.setup-close');
  var ESC_KEY = 27;
  var ENTER_KEY = 13;

  var onPopupEscPress = function (evt) {
    if ((evt.keyCode === ESC_KEY) && (evt.target.tagName !== 'INPUT')) {
      closePopup();
    }
  };
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
    if (evt.keyCode === ENTER_KEY) {
      openPopup();
    }
  });

  setupCloseControl.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEY) {
      closePopup();
    }
  });
})();
