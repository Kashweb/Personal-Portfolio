// $(document).ready(function()){
//     $(window).scroll(function(){
//         if(this.scrollY > 10){
//             $(".navnbar").addClass("scrolledNavbar");
//         }
//     }
// });

$(document).ready(function(){
    $(window).scroll(function(){
        if(window.scrollY > 100){
            $(".navbar").addClass("scrolledNavbar");
        }else{
            $(".navbar").removeClass("scrolledNavbar");
        }
    });
});
