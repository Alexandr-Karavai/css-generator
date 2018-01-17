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
		.borderRadius =' ' + borderRTL + 'px' + ' ' + borderRTR + 'px' +
				' ' + borderRBR + 'px' + ' ' + borderRBL + 'px';

  var computedStyle = getComputedStyle(document.getElementById('borderBlock'));
  document.getElementById('resultRTL').value =
		'border-radius: ' + computedStyle.borderRadius + ';';
}

function setBoxShadow() {
  var type       = document.getElementById('typeShadow').value;
  var horizontal = document.getElementById('typeHorizon').value;
  var vertical   = document.getElementById('typeVertical').value;
  var blur       = document.getElementById('typeBlur').value;
  var spread     = document.getElementById('typeSpread').value;
  var color      = document.getElementById('typeColor').value;

  if (type == "inset")
  {
    document.getElementById('shadowGen').style
      .boxShadow = type + ' ' + horizontal + 'px' + ' ' + vertical + 'px' +
          ' ' + blur + 'px' + ' ' + spread + 'px' + color;
  } else {
    document.getElementById('shadowGen').style
      .boxShadow = horizontal + 'px' + ' ' + vertical + 'px' +
          ' ' + blur + 'px' + ' ' + spread + 'px' + color;
  }

  var computedStyle = getComputedStyle(document.getElementById('shadowGen'));
  document.getElementById('resultShadow').value =
		'box-shadow: ' + computedStyle.boxShadow + ';';
}
