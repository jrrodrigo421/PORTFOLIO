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
       strings:[" Seja bem vindo ao meu Portfólio, aqui você encontra algumas experiências profissionais, habilidades, currículo, GitHub e infomações para contato!"],
       typeSpeed:30,
       backSpeed:20,
       backDelay:4000,
       loop:true
  });
   var typed = new Typed(".typing-2", {
      strings:["estudande de Análise e Desenvolvimento de Sistemas na Estácio,", "formado em Gestão de Telecomunicações pelo INATEL,","de Santa Rita do Sapucaí - MG,"],
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

document.getElementById("whatsapp").addEventListener("click", function() {
    window.location.href = "https://api.whatsapp.com/send?phone=5535999539535";
  });

  document.getElementById("cidade").addEventListener("click", function() {
    window.location.href = "https://www.google.com/search?q=Santa+Rita+do+Sapica%C3%AD+MG&oq=Santa+Rita+do+Sapica%C3%AD+MG&aqs=chrome..69i57.12009j0j1&sourceid=chrome&ie=UTF-8";
  });
  document.getElementById("linkedin").addEventListener("click", function() {
    window.location.href = "https://www.linkedin.com/in/rodrigo-lopes-jr/";
  });
  document.getElementById("github").addEventListener("click", function() {
    window.location.href = "https://github.com/jrrodrigo421";
  });
  document.getElementById("email").addEventListener("click", function() {
    window.location.href = "mailto:rodrigoplopesjr@gmail.com";
  });