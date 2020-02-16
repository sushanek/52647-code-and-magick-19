'use strict';

// Функционал перетаскивания попап окна
(function () {
  var popup = document.querySelector('.setup');
  var handle = popup.querySelector('.upload');
  var isClicks = function (evt) {
    evt.preventDefault();
  };

  handle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var isDragged = false;
    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      isDragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      popup.style.top = (popup.offsetTop - shift.y) + 'px';
      popup.style.left = (popup.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      if (isDragged) {
        handle.addEventListener('click', isClicks);
      }

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    handle.removeEventListener('click', isClicks);
  });
})();
