'use strict';

var showSetupWindow = function () {
  var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARDS_SUM = 4;
  var userDialog = document.querySelector('.setup');

  userDialog.classList.remove('hidden');

  var similarListElement = document.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  // Генерация имени мага
  var randomName = function (name, surname) {
    var firstName = name[Math.floor((Math.random() * name.length))];
    var secondName = surname[Math.floor((Math.random() * surname.length))];
    return (firstName + ' ' + secondName);
  };

  var createWizardsArray = function (sum) {
    var wizards = [];
    for (var i = 0; i < sum; i++) {
      wizards.push({
        'name': randomName(FIRST_NAMES, SECOND_NAMES),
        'coatColor': COAT_COLORS[Math.floor(Math.random() * COAT_COLORS.length)],
        'eyesColor': EYES_COLORS[Math.floor(Math.random() * EYES_COLORS.length)]
      });
    }
    return wizards;
  };

  // Генерация кода для отрисовки магов
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  var createFragment = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    return fragment;
  };

  similarListElement.appendChild(createFragment(createWizardsArray(WIZARDS_SUM)));
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
};

showSetupWindow();
