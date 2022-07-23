
$(document).ready(function() {
    $(window).scroll(function() {
        if(window.scrollY > 100){
            $(".navbar").addClass("scrolledNavbar");
        }else {
            $(".navbar").removeClass("scrolledNavbar");
        }
    });


// Fas Fa Bars toggle

$(".menu-bars").click(function(){
    $(".menu").toggleClass("active");
    $(".menu-bars i").toggleClass("active");
});

// $(".menu-bars").toggle(function() {
//     $(".navbar .menu").addClass("active");
// }, function() {
//     $(".navbar .menu").removeClass("active");
// })

});
