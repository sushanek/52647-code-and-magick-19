'use strict';
(function () {

  var wizards = [];


  // Раноговая система оценки похожести мага
  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === window.colors.my.coat) {
      rank += 2;
    }

    if (wizard.colorEyes === window.colors.my.eyes) {
      rank += 1;
    }

    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  window.updateWizards = function () {
    var wizards1 = wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    });
    window.render(wizards1);
  };

  // При успешной загрузке создаем фрагмент верстки для вставки
  var loadHandler = function (wizardsDownload) {
    wizards = wizardsDownload;
    window.updateWizards();
  };

  // Загружаем данные с сервера
  window.backend.load('GET', loadHandler, window.utils.errorHandler);

})();
