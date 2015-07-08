var raf = require('raf'),
  easing = require('bezier-easing')(0.445, 0.05, 0.55, 0.95), // sine
  round2 = function(val) { return Math.round(val * 100) / 100 },
  bound = Math.min(document.documentElement.clientWidth, document.documentElement.clientHeight),
  stamp = document.querySelector('.stamp'),
  direction = 1,
  min = 0.2,
  max = 0.8,
  scale = min,
  step = 0.01;

window.active = true;
window.verbose = false;

function tick() {
  raf(tick);
  if (!active) return;

  scale += step * direction;
  if (scale >= 1 || scale <= 0) direction = -direction;

  var size = bound * (min + (max - min) * easing.get(scale));
  stamp.style.marginLeft = -size/2 + 'px';
  stamp.style.marginTop = -size/2 + 'px';
  stamp.style.height = size + 'px';
  stamp.style.width = size + 'px';

  if (verbose) console.log(round2(scale) + ' ' + size);
}

tick();
