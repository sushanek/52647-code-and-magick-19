'use strict';

(function () {
  window.fireballSize = 32;
  window.wizardSpeed = 3;
  window.wizardWidth = 70;
  var FIREBALL_SPEED_LEFT = 5;
  var FIREBALL_SPEED_RIGHT = 2;
  var WIZARD_SIZE_RATIO = 1.337;
  var WIZARD_POSITION_RATIO_X = 2;
  var WIZARD_POSITION_RATIO_Y = 3;

  window.getFireballSpeed = function (left) {
    return left ? FIREBALL_SPEED_LEFT : FIREBALL_SPEED_RIGHT;
  };

  window.getWizardHeight = function () {
    return WIZARD_SIZE_RATIO * window.wizardWidth;
  };

  window.getWizardX = function (width) {
    return width / WIZARD_POSITION_RATIO_X - window.wizardWidth / WIZARD_POSITION_RATIO_X;
  };

  window.getWizardY = function (height) {
    return height / WIZARD_POSITION_RATIO_Y;
  };
})();
