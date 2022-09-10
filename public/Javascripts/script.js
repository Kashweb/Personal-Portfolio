
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



var button = document.querySelectorAll(".project-item");

var modals = document.querySelectorAll(".modal");

var closebutton = document.querySelectorAll(".modal-head button");

var modalback = document.querySelectorAll(".modalback");

var body = document.querySelectorAll("body");


button.forEach(function(btn){
    btn.onclick = function(){
        var modal = btn.getAttribute("href");

        document.getElementById(modal).style.display = "block";
    };
});

closebutton.forEach(function(btn){
    btn.onclick = function(){
        var modal = (btn.closest(".modal").style.display = "none");
    };
});

modalback.forEach(function(btn){
    btn.onclick = function(){
        var modal = (btn.closest(".modal").style.display = "none");
    };
});


// // scroll up button functionality             I initially used Jquery to make this scroll button work, found a much easy way by simply using HTML href="#home" which takes me back to the top
// $(".scrollupbtn").click(function(){           I ll leave this code here anyways incase you are checking out my code/ 
//     $("html").animate({scrollTop: 0})         The reason I did this is because Jquery seemed to be running slow and as programmers we are always taught speed / efficency is everything  
// });


// $(".project-item").click(function(){
//     alert("hello");
// });

// $(".project-item").click(function(){
//     $(".modal").style.display = "block";
// });



// $(".project-item").click(function(){
//     $(".modal").addClass("visible-modal");
// });

// $(".modal-head button").click(function(){
//     $(".modal").removeClass("visible-modal");
// });

// $(".modalback").click(function(){
//     $(".modal").removeClass("visible-modal");
// });








// for (var i = 0; i < button.length; i++){
//     button[i].onclick = function(e){
//         e.preventDefault();
//         modal = document.getElementById(e.target.getAttribute("href"));
//         modal.style.display = "block";
//     }
// };




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



// Initialize and add the map
// function initMap() {
//     const whereILive = { lat: -12.455004230327784, lng: 130.8421776692171 };
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 15,
//       center: whereILive,
//     });
//   }
  
//   window.initMap = initMap;



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
