'use strict';
(function () {

  var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARDS_SUM = 4;
  var coatColors = window.colors.COAT;
  var eyesColors = window.colors.EYES;
  var shake = window.util.shake;
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  // Генерация имени мага
  var randomName = function (name, surname) {
    var firstName = shake(name);
    var secondName = shake(surname);
    return (firstName + ' ' + secondName);
  };

  // Создание массива магов
  var createWizardsArray = function (sum) {
    var wizards = [];
    for (var i = 0; i < sum; i++) {
      wizards.push({
        'name': randomName(FIRST_NAMES, SECOND_NAMES),
        'coatColor': shake(coatColors),
        'eyesColor': shake(eyesColors)
      });
    }
    return wizards;
  };

  // Генерация кода для отрисовки похожих магов
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  // Создание фрагмента верстки для вставки
  var createFragment = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    return fragment;
  };

  // Вызываем последовательно функции создания и вставляем получившийся код на страницу
  similarListElement.appendChild(createFragment(createWizardsArray(WIZARDS_SUM)));
  document.querySelector('.setup-similar').classList.remove('hidden');
})();
