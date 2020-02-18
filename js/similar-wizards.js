'use strict';
(function () {

  var WIZARDS_SUM = 4;
  var shake = window.utils.shake;
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  // Генерация кода для отрисовки похожих магов
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  // Создаем массив магов добытых с сервера
  window.backend.load(function (wizards) {
    // Создание фрагмента верстки для вставки
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < WIZARDS_SUM; i++) {
      fragment.appendChild(renderWizard(shake(wizards))); // В последствии заменим выбор случайного волшебника на похожего
    }

    // Вставляем магов
    similarListElement.appendChild(fragment);
    document.querySelector('.setup-similar').classList.remove('hidden');
  });

})();
