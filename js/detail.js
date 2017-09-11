/*menu icon*/

$(document).ready(function(){
    $(".menu-icon")
    .click(function(){
        $(".left").css({"margin-top":"-9px", "transform":"rotate(45deg)", "transition-duration":"0.2s"});
        $(".right").css({"margin-top":"13px", "transform":"rotate(-45deg)", "transition-duration":"0.2s"});
        $(".remove").css({"background-color":"transparent"});
        $(".menu li").css({"display":"inline-block", "margin-right":"0px", "transition-duration":"0.2s"});
    })
})

$(document).ready(function(){
    $(".split-slideshow")
    .click(function(){
        $(".left").css({"margin-top":"5px", "transform":"rotate(0deg)"});
        $(".right").css({"margin-top":"5px", "transform":"rotate(0deg)"});
        $(".remove").css({"margin-top":"5px", "background-color":"#292929"});
        $(".menu li").css({"display":"none"});
    })
})

/*slideshow*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex +=n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i =0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className +=" active";
}