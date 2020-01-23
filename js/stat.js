'use strict';

var WIN_WIDTH = 420;
var WIN_HEIGHT = 270;
var WIN_X = 100;
var WIN_Y = 10;
var WIN_COLOR = '#fff';
var MY_LABEL = 'Вы';
var MY_COLOR = 'rgb(255, 0, 0)';
var TEXT_GAP = 20;
var SHADOW_GAP = 10;
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.3)';
var BAR_X = 130;
var BAR_Y = 250;
var BAR_WIDTH = 40;
var BAR_GAP = BAR_WIDTH + 50;
var BAR_HEIGHT = 150;
var TEXT_COLOR = 'rgb(0, 0, 0)';
var FONT_REGULAR = 'normal 16px PT Mono';
var FONT_BOLD = 'bold 16px PT Mono';


var renderWin = function (ctx, x, y, width, height, color, shadowColor, gap) {
  ctx.fillStyle = color;
  ctx.shadowOffsetX = gap;
  ctx.shadowOffsetY = gap;
  ctx.shadowColor = shadowColor;
  ctx.shadowBlur = 0;
  ctx.fillRect(x, y, width, height);
  ctx.shadowColor = 'transparent';
};

var getBestTime = function (times) {
  var bestTime = times[0];
  for (var i = 1; i < times.length; i++) {
    if (times[i] > bestTime) {
      bestTime = times[i];
    }
  }
  return bestTime;
};

var renderBar = function (ctx, color, x, y, width, height, player, time) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
  ctx.fillStyle = TEXT_COLOR;
  ctx.fillText(time, x, y - SHADOW_GAP);
  ctx.fillStyle = 'red';
  ctx.fillText(player, x, WIN_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {
  renderWin(ctx, WIN_X, WIN_Y, WIN_WIDTH, WIN_HEIGHT, WIN_COLOR, SHADOW_COLOR, SHADOW_GAP);
  ctx.fillStyle = TEXT_COLOR;
  ctx.font = FONT_BOLD;
  ctx.fillText('Ура вы победили!', WIN_X + TEXT_GAP, WIN_Y + 30);
  ctx.font = FONT_REGULAR;
  ctx.fillText('Список результатов:', WIN_X + TEXT_GAP, WIN_Y + 50);
  var barDiv = Math.floor(getBestTime(times) / BAR_HEIGHT);

  for (var i = 0; i < names.length; i++) {
    var time = Math.floor(times[i]);
    var barSize = Math.floor(time / barDiv);
    var name = names[i];
    var axisX = BAR_X + BAR_GAP * i;
    var axisY = BAR_Y - barSize;
    var rndBlue = 'hsla(200, 80%, ' + Math.floor((Math.random() * 100)) + '%)';
    var color = (name !== MY_LABEL) ? rndBlue : MY_COLOR;
    renderBar(ctx, color, axisX, axisY, BAR_WIDTH, barSize, name, time);
  }
};


