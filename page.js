
var minSearchSize = 10;

function remQ(ob) {
  if (ob.style.color == 'gray') {
    ob.value = '';
    ob.style.color = 'black';
  }
}

function addQ(ob, s) {
  if (ob.style.color == 'black' && ob.value == '' && s != '')  {
    ob.value = s;
    ob.style.color = 'gray';
    ob.size = minSearchSize;
  }
}

/*
function doSomething(e) {
  if (!e) var e = window.event;
  alert(e.type);
}
*/

window.onload = function() {
  searchBox = document.getElementById("searchBox");
  searchBox.onfocus = function(e) { remQ(e.target); }
  searchBox.onblur = function(e) { addQ(e.target, 'search'); }
  searchBox.onkeypress = adjustLength;
}

function getTarget(e) {
  var ob;
  if (!e) var e = window.event;
  if (e.target) ob = e.target;
  else if (e.srcElement) ob = e.srcElement;
  if (ob.nodeType == 3) // Safari bug
    ob = ob.parentNode;
  return ob;
}

function getChar(e, ob) {
  var c;
  if (e.keyCode) c = e.keyCode;
  else if (e.which) c = e.which;
  return c;
}

function adjustLength(e) {
  var ob = getTarget(e);
  var c = getChar(e, ob);
  var isDel = (c == 8) || (c == 0x7f);

  if (!isDel && ob.size < ob.value.length + 2)
    ob.size = ob.value.length + 2;
  else if (ob.size > minSearchSize) {
    if (isDel) {
      if (ob.size > ob.value.length)
	ob.size = ob.value.length;
    } else if (ob.size > ob.value.length + 2)
      ob.size = ob.value.length + 2;
  }

}


function displayOneOf(a, b) {
  if (Math.random() < .5)
    elt = document.getElementById(a);
  else
    elt = document.getElementById(b);
  elt.style.display = "block";
}
