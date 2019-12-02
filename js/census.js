
window.onload = function() {
  prompt = 'group|project|person';
  nav = document.getElementById("_navInput");
  if (nav.value != prompt)
    nav.style.color = 'black';
  err = document.getElementById("_navErr");
  nav.onfocus = function(e) {
    if (nav.style.color == 'gray') {
        if (nav.value == prompt) nav.value = '';
      nav.style.color = 'black';
    }
  };
  nav.onblur = function(e) {
    err.style.visibility = "hidden";
    if (nav.style.color == 'black')
        if (nav.value == '') {
          nav.value = prompt;
          nav.style.color = 'gray';
        }
  };
  form = document.getElementById("_navForm");
  form.onsubmit = function(e) {
    err.style.visibility = "hidden";
    if (nav.value == "")
      window.location = "";
    else if (document.getElementById(nav.value)) {
      window.location = "#" + nav.value;
      nav.style.color = 'gray'
      nav.value = prompt;
    } else {
      err.style.visibility = "visible";
    }
    return false; }
}
