$(document).ready(function()){
    $(window).scroll(function(){
        if(this.scrollY > 10){
            $(".navnbar").addClass("scrolledNavbar");
        }
    }
});