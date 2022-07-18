
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
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");
function register(){
   x.style.left="-400px";
   y.style.left="50px";
   z.style.left="110px";
}

function login(){
   x.style.left="50px";
   y.style.left="450px";
   z.style.left="0";
}

$(document).ready(function(){
 
    //// Nav bar responsive ////
     $nav=$('.nav');
     $toggleCollapse = $('.toggle-collapse');
     /* Click Event on Toggle menu */
     $toggleCollapse.click(function(){
         $nav.toggleClass('collapse');
     })
     ////// Login Form /////////
 
     

     //// click to scroll top 
     $('.move-up span').click(function(){
         $('html,body').animate({
             scrollTop:0
         },1000)
     })

     //AOS Intance
     AOS.init();


});
