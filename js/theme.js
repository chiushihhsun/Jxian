// nav Navbar Fixed 
 $(window).scroll(function(){
     let scrollTop=$(this).scrollTop();
     if(scrollTop>1){
         $("nav").addClass("navbar_fixed");
     }else{
         $("nav").removeClass("navbar_fixed");
     }
 });
//  wow
new WOW().init();
