$(document).ready(function(){
  $(window).scroll(function(){
      if(this.scrollY > 20){
          $('.navbar').addClass("sticky");
      }else{
          $('.navbar').removeClass("sticky");
      }
      if(this.scrollY > 500){
          $('.scroll-up-btn').addClass("show");
      }else{
          $('.scroll-up-btn').removeClass("show");
      }
  });
   $('.scroll-up-btn').click(function(){
       $('html').animate({scrollTop: 0});
   });

   var typed = new Typed(".typing", {
       strings:[" Seja bem vindo ao meu Portfólio Online, aqui você encontra algumas experiências profissionais, habilidades, currículo, GitHub e infomações para contato!"],
       typeSpeed:30,
       backSpeed:20,
       backDelay:4000,
       loop:true
  });
   var typed = new Typed(".typing-2", {
      strings:["Estudande de Programação,", "Formado em Gestão de Telecomunicações pelo INATEL,","de Santa Rita do Sapucaí - MG,"],
      typeSpeed:20,
      backSpeed:80,
      loop:true
  });

  $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  });
  // $('.carousel').owlCarousel({
  //     margin:20,
  //     loop:true,
  //     autoplayTimeOut:2000,
  //     autoplayHoverPauser:true,
  //     responsive:{
  //         0:{
  //             items:1,
  //             nav:false
  //         },
  //         600:{
  //             items:2,
  //             nav:false
  //         },
  //         1000:{
  //             items:3,
  //             nav:false
  //         }
  //     }
  // });
  
});

document.getElementById("contratar").addEventListener("click", function() {
  window.location.href = "https://api.whatsapp.com/send?phone=5535999539535";
});