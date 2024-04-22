var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active-accord");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

let bar = document.querySelector('#menu');
let nav_link = document.querySelector('#nav-link');
let sidebar = document.querySelector('.sidebar');
let sidein = document.querySelector('.side-in');
let main_content = document.querySelector('.main-content');
let widthbar = 310;

bar.addEventListener("click", function(){
  if (widthbar == 310) {
    widthbar = 75;
  } else if(widthbar == 75) {
    widthbar = 310;
  }
  sidebar.style.width = widthbar+"px";
  sidein.style.width = widthbar+"px";
  main_content.style.left = widthbar+"px";
});

sidebar.addEventListener("mouseover", function(){
  sidebar.style.width = "310px";
  sidein.style.width = "310px";
  main_content.style.left = "310px";
})

sidebar.addEventListener("mouseout", function(){
  sidebar.style.width = widthbar+"px";
  sidein.style.width = widthbar+"px";
  main_content.style.left = widthbar+"px";
})