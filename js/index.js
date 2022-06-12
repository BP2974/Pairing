window.addEventListener("DOMContentLoaded", function () {
    window.onscroll = function(){
        console.log(window.scrollY);
        if(window.scrollY>850){
            document.getElementById("section2_h2").classList.add("active");
            document.getElementById("t1").classList.add("active");
            document.getElementById("t2").classList.add("active");
            document.getElementById("t3").classList.add("active");
            document.getElementById("t4").classList.add("active");
            document.getElementById("t5").classList.add("active");
        } else {
            document.getElementById("section2_h2").classList.remove("active");
            document.getElementById("t1").classList.remove("active");
            document.getElementById("t2").classList.remove("active");
            document.getElementById("t3").classList.remove("active");
            document.getElementById("t4").classList.remove("active");
            document.getElementById("t5").classList.remove("active");
        }


        if(window.scrollY>950){
            document.getElementById("line").classList.add("active");
            document.getElementById("textbox").classList.add("active");
            document.getElementById("section2_p").classList.add("active");
        } else {
            document.getElementById("line").classList.remove("active");
            document.getElementById("textbox").classList.remove("active");
            document.getElementById("section2_p").classList.remove("active");
        }

        if(window.scrollY>1400){
            document.getElementById("h23").classList.add("active");
        } else {
            document.getElementById("h23").classList.remove("active");
        }


        if(window.scrollY>1600){
            document.getElementById("today").classList.add("active");
            document.getElementById("today_l").classList.add("active");
            document.getElementById("today_p").classList.add("active");
        } else {
            document.getElementById("today").classList.remove("active");
            document.getElementById("today_l").classList.remove("active");
            document.getElementById("today_p").classList.remove("active");
        }

        
        if(window.scrollY>2200){
            document.getElementById("h24").classList.add("active");
        } else {
            document.getElementById("h24").classList.remove("active");
        }

        if(window.scrollY>2400){
            document.getElementById("check").classList.add("active");
            document.getElementById("check_l").classList.add("active");
            document.getElementById("check_p").classList.add("active");
        } else {
            document.getElementById("check").classList.remove("active");
            document.getElementById("check_l").classList.remove("active");
            document.getElementById("check_p").classList.remove("active");
        }

        if(window.scrollY>3000){
            document.getElementById("h25").classList.add("active");
        } else {
            document.getElementById("h25").classList.remove("active");
        }

        if(window.scrollY>3200){
            document.getElementById("chat").classList.add("active");
            document.getElementById("chat_l").classList.add("active");
            document.getElementById("chat_p").classList.add("active");
        } else {
            document.getElementById("chat").classList.remove("active");
            document.getElementById("chat_l").classList.remove("active");
            document.getElementById("chat_p").classList.remove("active");
        }

        if(window.scrollY>3800){
            document.getElementById("h26").classList.add("active");
        } else {
            document.getElementById("h26").classList.remove("active");
        }

        if(window.scrollY>4000){
            document.getElementById("bord").classList.add("active");
            document.getElementById("bord_p").classList.add("active");
        } else {
            document.getElementById("bord").classList.remove("active");
            document.getElementById("bord_p").classList.remove("active");
        }

        if(window.scrollY>4050){
            document.getElementById("bord_l").classList.add("active");
        } else {
            document.getElementById("bord_l").classList.remove("active");
        }
    }
});