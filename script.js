
$(document).ready(function() {

// Navbar color change on scrolling
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



});
