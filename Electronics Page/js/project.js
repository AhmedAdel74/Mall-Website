
const responsive ={
   0 :{
       items:1
   },
    320:{
        items : 1
    },
    560 :{
        items : 2
    },
    960:{
        items:3
    }
}

$(document).ready(function(){

     $nav=$('.nav');
     $toggleCollapse = $('.toggle-collapse');
     /* Click Event on Toggle menu */
     $toggleCollapse.click(function(){
         $nav.toggleClass('collapse');
     })

     //owl-carousel
     $('.owl-carousel').owlCarousel({
         loop:true,
         autoplay:true,
         autoplayTimeout:2500,
         dots:false,
         nav:false,
         navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')]
         ,responsive : responsive
        });

     //// click to scroll top 
     $('.move-up span').click(function(){
         $('html,body').animate({
             scrollTop:0
         },1000)
     })

     //AOS Intance
     AOS.init();
    /*---------------------slider food----------------------------*/

    $(".add-mob").click(function(){
      $(".info-mob").fadeToggle(2000);
	});
    $(".add-lab").click(function(){
      $(".info-lab").fadeToggle(2000);
	});
    $(".add-kit").click(function(){
      $(".info-kit").fadeToggle(2000);
	});
    $(".add-hom").click(function(){
      $(".info-hom").fadeToggle(2000);
	});
    $(".btnn").click(function(){
     $(".topra").slideToggle(1500);
	});
});



