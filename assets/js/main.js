$(document).ready(function(){
$('.box h3').click(function(){
    $(this).toggleClass('active');
    $(this).next().toggleClass('active');
})
});



function show() {
    var reveal = document.querySelectorAll(".reveal");
  
    for (var i = 1; i < reveal.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveal[i].getBoundingClientRect().top;
      var e = 200;
  
      if (elementTop < windowHeight-e) {
        reveal[i].classList.add("active");
        }
     
    }
  }
  
  window.addEventListener("scroll", show);