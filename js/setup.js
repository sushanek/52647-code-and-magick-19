'use strict';
var FIRST_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

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

// Заполняем масив данных для магов
var wizardsSum = 4;
var wizards = [];
for (var i = 0; i < wizardsSum; i++) {
  wizards.push({
    'name': randomName(FIRST_NAME, SECOND_NAME),
    'coatColor': COAT_COLOR[Math.floor(Math.random() * COAT_COLOR.length)],
    'eyesColor': EYES_COLOR[Math.floor(Math.random() * EYES_COLOR.length)]
  });
}

// Генерация кода для отрисовки магов
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
