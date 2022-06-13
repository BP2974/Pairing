window.addEventListener("DOMContentLoaded", function () {
    window.onscroll = function(){
        console.log(window.scrollY);
        if(window.scrollY>1000){
            document.getElementById("today_1").classList.add("active");
            document.getElementById("text1").style.opacity = "1";
            document.getElementById("text2").style.opacity = "0";
            document.getElementById("today_text").style.opacity = "0";
        } else {
            document.getElementById("today_1").classList.remove("active");
        }

        if(window.scrollY>1400){
            document.getElementById("text1").style.opacity = "0";
            document.getElementById("text2").style.opacity = "1";
            document.getElementById("text3").style.opacity = "0";
            document.getElementById("today_text").style.opacity = "1";
            document.getElementById("g1_2").classList.add("active");
        } else {
            document.getElementById("g1_2").classList.remove("active");
        }

        if(window.scrollY>1800){
            document.getElementById("text2").style.opacity = "0";
            document.getElementById("text3").style.opacity = "1";
            document.getElementById("text4").style.opacity = "0";
            document.getElementById("g1_3").classList.add("active");
        } else {
            document.getElementById("g1_3").classList.remove("active");
        }

        if(window.scrollY>2200){
            document.getElementById("text3").style.opacity = "0";
            document.getElementById("today_text").style.opacity = "0";
            document.getElementById("text4").style.opacity = "1";
            document.getElementById("text5").style.opacity = "0";
            document.getElementById("check_text").style.opacity = "0";
            document.getElementById("g1_4").classList.add("active");
        } else {
            document.getElementById("g1_4").classList.remove("active");
        }

        if(window.scrollY>2400){
            document.getElementById("check_1").classList.add("active");
        } else {
            document.getElementById("check_1").classList.remove("active");
        }

        if(window.scrollY>2600){
            document.getElementById("text4").style.opacity = "0";
            document.getElementById("text5").style.opacity = "1";
            document.getElementById("text6").style.opacity = "0";
            document.getElementById("check_text").style.opacity = "1";
            document.getElementById("g1_5").classList.add("active");
        } else {
            document.getElementById("g1_5").classList.remove("active");
        }

        if(window.scrollY>3000){
            document.getElementById("text5").style.opacity = "0";
            document.getElementById("text6").style.opacity = "1";
            document.getElementById("text7").style.opacity = "0";
            document.getElementById("check_text").style.opacity = "0";
            document.getElementById("chat_text").style.opacity = "0";
            document.getElementById("g1_6").classList.add("active");
        } else {
            document.getElementById("g1_6").classList.remove("active");
        }

        if(window.scrollY>3200){
            document.getElementById("chat_1").classList.add("active");
        } else {
            document.getElementById("chat_1").classList.remove("active");
        }

        if(window.scrollY>3400){
            document.getElementById("text6").style.opacity = "0";
            document.getElementById("text7").style.opacity = "1";
            document.getElementById("text8").style.opacity = "0";
            document.getElementById("chat_text").style.opacity = "1";
            document.getElementById("g1_7").classList.add("active");
        } else {
            document.getElementById("g1_7").classList.remove("active");
        }

        if(window.scrollY>3800){
            document.getElementById("text7").style.opacity = "0";
            document.getElementById("text8").style.opacity = "1";
            document.getElementById("text9").style.opacity = "0";
            document.getElementById("g1_8").classList.add("active");
        } else {
            document.getElementById("g1_8").classList.remove("active");
        }

        if(window.scrollY>4200){
            document.getElementById("text8").style.opacity = "0";
            document.getElementById("text9").style.opacity = "1";
            document.getElementById("text10").style.opacity = "0";
            document.getElementById("g1_9").classList.add("active");
        } else {
            document.getElementById("g1_9").classList.remove("active");
        }

        if(window.scrollY>4600){
            document.getElementById("text9").style.opacity = "0";
            document.getElementById("text10").style.opacity = "1";
            document.getElementById("text11").style.opacity = "0";
            document.getElementById("g1_10").classList.add("active");
        } else {
            document.getElementById("g1_10").classList.remove("active");
        }

        if(window.scrollY>5000){
            document.getElementById("text10").style.opacity = "0";
            document.getElementById("text11").style.opacity = "1";
            document.getElementById("text12").style.opacity = "0";
            document.getElementById("chat_text").style.opacity = "0";
            document.getElementById("bord_text").style.opacity = "0";
            document.getElementById("g1_11").classList.add("active");
        } else {
            document.getElementById("g1_11").classList.remove("active");
        }

        if(window.scrollY>5200){
            document.getElementById("bord").classList.add("active");
        } else {
            document.getElementById("bord").classList.remove("active");
        }

        if(window.scrollY>5400){
            document.getElementById("text11").style.opacity = "0";
            document.getElementById("text12").style.opacity = "1";
            document.getElementById("text13").style.opacity = "0";
            document.getElementById("bord_text").style.opacity = "1";
            document.getElementById("g1_12").classList.add("active");
        } else {
            document.getElementById("g1_12").classList.remove("active");
        }

        if(window.scrollY>5800){
            document.getElementById("text12").style.opacity = "0";
            document.getElementById("text13").style.opacity = "1";
            document.getElementById("g1_13").classList.add("active");
        } else {
            document.getElementById("g1_13").classList.remove("active");
        }
    }
});