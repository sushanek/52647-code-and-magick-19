'use strict';
(function () {
  var setupPlayer = document.querySelector('.setup-player');

  // Значения по умолчанию:
  window.colors.my = {
    eyes: setupPlayer.querySelector('input[name="eyes-color"]').value,
    coat: setupPlayer.querySelector('input[name="coat-color"]').value
  };

  // Задает цвет фаербола
  var setupFireballWrap = setupPlayer.querySelector('.setup-fireball-wrap');
  var fireballColors = window.colors.FIREBALL;
  var fireballColorInput = setupPlayer.querySelector('input[name="fireball-color"]');
  window.utils.chooseColor(setupFireballWrap, fireballColors, fireballColorInput, 'fireball');

  // Задает цвет глаз
  var setupWizardEyes = setupPlayer.querySelector('.wizard-eyes');
  var eyesColors = window.colors.EYES;
  var eyesColorInput = setupPlayer.querySelector('input[name="eyes-color"]');
  window.utils.chooseColor(setupWizardEyes, eyesColors, eyesColorInput, 'eyes');

  // Задает цвет мантии
  var setupWizardCoat = setupPlayer.querySelector('.wizard-coat');
  var coatColors = window.colors.COAT;
  var coatColorInput = setupPlayer.querySelector('input[name="coat-color"]');
  window.utils.chooseColor(setupWizardCoat, coatColors, coatColorInput, 'coat');
})();
