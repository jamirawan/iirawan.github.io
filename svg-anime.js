var lineDrawing = anime({

  targets: '.leaf path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 0 },
  direction: 'alternate',
  loop: true,
  delay:1000,
});


var lineDrawing = anime({
  targets: '.flower path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 0 },
  direction: 'alternate',
  loop: true
});
