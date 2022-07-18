
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

     $nav=$('.navxxx');
     $toggleCollapse = $('.tocollapse');
     /* Click Event on Toggle menu */
     $toggleCollapse.click(function(){
         $nav.toggleClass('colls');
     })

     //owl-carousel
     $('.owl-carousel').owlCarousel({
         loop:true,
         autoplay:true,
         autoplayTimeout:2000,
         dots:false,
         nav:true,
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
     
     //shop form 
     $(".foll .btn").click(function () {
        var $btn = $(".foll .btn");
    
        $btn.toggleClass("booked");
        $(".foll").toggleClass("windup");
        $("form").slideToggle(300);
        $(".linkbox").toggle(200);
    
        if ($btn.text() === "GET NOW") {
          $btn.text("BOOKED!");
        } else {
          $btn.text("GET NOW");
        }
    });
});
