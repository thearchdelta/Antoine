var prevScrollPos = window.pageYOffset;
var currentScrollPos = window.pageYOffset;

window.onscroll = function() {
  currentScrollPos = window.pageYOffset;
  if (window.pageYOffset > 205) {
    // if (prevScrollPos < currentScrollPos) {
      document.getElementById("navbar").classList.add("show");
    } else {
      document.getElementById("navbar").classList.remove("show");
    }
  // }
  prevScrollPos = currentScrollPos;
};
