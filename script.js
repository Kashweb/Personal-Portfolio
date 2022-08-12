
$(document).ready(function() {

// Navbar color change on scrolling and scroll up button
    $(window).scroll(function() {
        if(window.scrollY > 100){
            $(".navbar").addClass("scrolledNavbar");
        }else {
            $(".navbar").removeClass("scrolledNavbar");
        }
        if(window.scrollY > 800){
            $(".scrollupbtn").addClass("visible");
        }else{
            $(".scrollupbtn").removeClass("visible");
        }
    });


// // scroll up button functionality             I initially used Jquery to make this scroll button work, found a much easy way by simply using HTML href="#home" which takes me back to the top
// $(".scrollupbtn").click(function(){           I ll leave this code here anyways incase you are checking out my code/ 
//     $("html").animate({scrollTop: 0})         The reason I did this is because Jquery seemed to be running slow and as programmers we are always taught speed / efficency is everything  
// });

// Fas Fa Bars toggle

$(".menu-bars").click(function(){
    $(".menu").toggleClass("active");
    $(".menu-bars i").toggleClass("active");
});

$(".menu-btn").click(function(){
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



function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "kashchawla01@gmail.com",
        Password : "",
        To : 'kashchawla01@gmail.com',
        From : document.getElementById("Email").value,
        Subject : "New Message From Portfolio ",
        Body : "And this is the body"
        }).then(
            message => alert(message)
            );
};
