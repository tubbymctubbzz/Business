window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.fontSize = "18px";
    document.getElementById("logo").style.fontSize = "18px";
  } else {
    document.getElementById("navbar").style.fontSize = "25px";
    document.getElementById("logo").style.fontSize = "25px";
  }
}