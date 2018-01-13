function range(rang) {
	var val = document.getElementById(rang).value;
	document.getElementById(rang).style
  .background = '-webkit-linear-gradient(left ,#009688 0%,#009688 '+((val*100)/255)+'%,#fff '+((val*100)/255)+'%, #fff 100%)';
  setColor();
 }

function setColor() {
  var valR     = document.getElementById('rangR').value;
  var valG     = document.getElementById('rangG').value;
  var valB     = document.getElementById('rangB').value;
  var valBlock = document.getElementById('colorBlock').style
  .backgroundColor = 'rgb('+valR+','+valG+','+valB+')';
  var computedStyle = getComputedStyle(document.getElementById('colorBlock'));
 }
