jQuery(function($) {
    $(".fade").css("display", "none");
    $(".fade").fadeIn(2000);
    $("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $(".fade").fadeOut(1000, redirectPage);
    });
    function redirectPage() {
    window.location = linkLocation;
    }
});

document.addEventListener("DOMContentLoaded", function(){
    window.onscroll = function(){
        if(document.querySelector("html").scrollTop > 100){
            document.querySelector("header").style.top = "-80px";
        } else {
            document.querySelector("header").style.top = "0";
        }
    }
    window.onmousemove = function(e){
        if(e.clientY < 100){
            document.querySelector("header").style.top = "0";
        } else {
            document.querySelector("header").style.top = "-80px";
        }
    }
});