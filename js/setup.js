'use strict';

(function () {
  var setupPlayer = document.querySelector('.setup-player');

  // Задает цвет фаербола
  var setupFireballWrap = setupPlayer.querySelector('.setup-fireball-wrap');
  var fireballColors = window.colors.FIREBALL;
  var fireballColorInput = setupPlayer.querySelector('input[name="fireball-color"]');
  window.util.chooseColor(setupFireballWrap, fireballColors, fireballColorInput);

  // Задает цвет глаз
  var setupWizardEyes = setupPlayer.querySelector('.wizard-eyes');
  var eyesColors = window.colors.EYES;
  var eyesColorInput = setupPlayer.querySelector('input[name="eyes-color"]');
  window.util.chooseColor(setupWizardEyes, eyesColors, eyesColorInput);

  // Задает цвет мантии
  var setupWizardCoat = setupPlayer.querySelector('.wizard-coat');
  var coatColors = window.colors.COAT;
  var coatColorInput = setupPlayer.querySelector('input[name="coat-color"]');
  window.util.chooseColor(setupWizardCoat, coatColors, coatColorInput);
})();
