
var playPause = anime ({
targets:'div.box',
translateY: [
  { value: 300, duration: 1500 },
  { value: 0, duration: 1500 }
],
rotate:{
  value:'1turn',
  easing:'easeInOutSine',


},
delay: function(el, i, l) {
   // 100ms delay multiplied by every div index, in ascending order
   return i * 100;
 },
 elasticity: function(target, index, totalTargets)
 { return 100 + ((totalTargets - index)) * 100},
 loop:2,
 backgroundColor:'#f00',
 opacity:'0.5',
 autoplay:false,
 loop:true,
 borderRadius: ['0em', '3em'],
});


document.querySelector('#boxes .play') .onclick = playPause.play;
document.querySelector('#boxes .pause') .onclick = playPause.pause;
