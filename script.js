
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

-12.446872261024101, 130.83924018435545
-12.455246192756226, 130.84019531546517
-12.455004230327784, 130.8421776692171

// Initialize and add the map
function initMap() {
    const whereILive = { lat: -12.455004230327784, lng: 130.8421776692171 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: whereILive,
    });
  }
  
  window.initMap = initMap;
