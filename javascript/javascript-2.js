var acc = document.getElementsByClassName("historyclass");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panels = this.nextElementSibling;
    if (panels.style.maxHeight) {
      panels.style.maxHeight = null;
    } else {
      panels.style.maxHeight = panels.scrollHeight + "px";
    } 
  });
}
