'use strict';

(function () {

  var similarList = document.querySelector('.setup-similar');
  var similarListElement = document.querySelector('.setup-similar-list');

  // Шаблон для отрисовки магов
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  // Генерация кода для отрисовки мага
  var createWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  window.render = function (wizards) {
    var WIZARDS_SUM = 4;
    similarListElement.innerHTML = '';

    for (var i = 0; i < WIZARDS_SUM; i++) {
      similarListElement.appendChild(createWizard(wizards[i]));
    }
    similarList.classList.remove('hidden');
  };
})();
