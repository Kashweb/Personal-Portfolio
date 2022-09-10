
$(document).ready(function(){
    setTimeout(function(){
        $(".preloader").fadeOut();
    }, 1200);
});


$(document).load(function(){
    setTimeout(function(){
        $(".preloader").fadeIn();
    }, 5000);
});



// $(document).ready(function() {
//     $(".preloader").addClass("preloaderhide");
// });

// $(window).load(function(){
//     $(".preloader").removeClass("preloaderhide");
// });

