$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $('.navbar').addClass("sticky");
    }else{
      $('.navbar').removeClass("sticky");

    };
  });
});


$('.menu-btn').click(function(){
  $('.navbar .menu').toggleClass("active");
  $('.menu-btn i').toggleClass("active");
});

document.getElementById("contratar").addEventListener("click", function() {
  window.location.href = "https://api.whatsapp.com/send?phone=5535999539535";
});

// document.getElementById("github").addEventListener("click", function() {
//   window.location.href = "https://github.com/jrrodrigo421";
// });

