window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementsById("nav-bar").style.opacity = "1";
    document.getElementsById("nav-bar").style.height = "3.6em";
    document.getElementsById("nav-bar").style.backgroundColor = "rgb(" + 125 + "," + 133 + "," + 52 + ")";
  } else {
    document.getElementsById("nav-bar").style.opacity = "1";
    document.getElementsById("nav-bar").style.backgroundColor = "";
    document.getElementsById("nav-bar").style.height = "5em";
  }
}
