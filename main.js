anime ({
targets:'div.box.red',
translateY: [
  { value: 300, duration: 1500 },
  { value: 0, duration: 1500 }
],
rotate:{
  value:'1turn',
  easing:'easeInOutSine'

}

})

anime ({
targets:'div.box.blue',
translateY: [
  { value: 300, duration: 1500, delay:2000 },
  { value: 0, duration: 1500 }
],
rotate:{
  value:'1turn',
  easing:'easeInOutSine',
  delay:2000,
}
})

anime ({
targets:'div.box.yellow',
translateY: [
  { value: 300, duration: 1500, delay:4000 },
  { value: 0, duration: 1500 }
],
rotate:{
  value:'1turn',
  easing:'easeInOutSine',
  delay:4000,
}
})
