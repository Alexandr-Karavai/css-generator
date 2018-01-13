function range(rang, max) {
  var val = document.getElementById(rang).value;
  document.getElementById(rang).style
    .background = '-webkit-linear-gradient(left ,#009688 0%,#009688 ' + ((val * 100) / max) +
		'%,#fff ' + ((val * 100) / max) + '%, #fff 100%)';
  setColor();
  setBorderRadius();
}

function setColor() {
  var valR = document.getElementById('rangR').value;
  var valG = document.getElementById('rangG').value;
  var valB = document.getElementById('rangB').value;
  var valBlock = document.getElementById('colorBlock').style
    .backgroundColor = 'rgb(' + valR + ',' + valG + ',' + valB + ')';

  var computedStyle = getComputedStyle(document.getElementById('colorBlock'));
  document.getElementById('colorResult').value = computedStyle.backgroundColor;
}

function setBorderRadius() {
  var borderRTL = document.getElementById('borderRTL').value;
  var borderRTR = document.getElementById('borderRTR').value;
  var borderRBR = document.getElementById('borderRBR').value;
  var borderRBL = document.getElementById('borderRBL').value;

  document.getElementById('borderBlock').style
    .borderTopLeftRadius = borderRTL + 'px';
  document.getElementById('borderBlock').style
    .borderTopRightRadius = borderRTR + 'px';
  document.getElementById('borderBlock').style
    .borderBottomRightRadius = borderRBR + 'px';
  document.getElementById('borderBlock').style
    .borderBottomLeftRadius = borderRBL + 'px';

  var computedStyle = getComputedStyle(document.getElementById('borderBlock'));
  document.getElementById('resultRTL').value =
		'border-top-left-radius: ' + computedStyle.borderTopLeftRadius + ';';
  document.getElementById('resultRTR').value =
		'border-top-right-radius: ' + computedStyle.borderTopRightRadius + ';';
  document.getElementById('resultRBR').value =
		'border-bottom-right-radius: ' + computedStyle.borderBottomRightRadius + ';';
  document.getElementById('resultRBL').value =
		'border-bottom-left-radius: ' + computedStyle.borderBottomLeftRadius + ';';
}
