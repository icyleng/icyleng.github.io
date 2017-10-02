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

/*catalogs*/

$(document).ready(function(){
    $(".catalog")
     .mouseover(function(){
        $(".catalog-element1").css({"line-height":"20px", "color":"white", "transform":"scaleY", "transition-duration":"0.5s"});
        $(".catalog-element2").css({"line-height":"20px", "color":"white", "transform":"scaleY", "transition-duration":"0.5s", "transition-delay":".1s"});
        $(".catalog-element3").css({"line-height":"20px", "color":"white", "transform":"scaleY", "transition-duration":"0.5s", "transition-delay":".2s"});
        $(".catalog-element4").css({"line-height":"20px", "color":"white", "transform":"scaleY", "transition-duration":"0.5s", "transition-delay":".3s"});
        })
    
     .mouseout(function(){
        $(".catalog-element1").css({"line-height":"5px", "color":"transparent"});
        $(".catalog-element2").css({"line-height":"5px", "color":"transparent", "transition-delay":".1s"});
        $(".catalog-element3").css({"line-height":"5px", "color":"transparent", "transition-delay":".2s"});
        $(".catalog-element4").css({"line-height":"5px", "color":"transparent", "transition-delay":".3s"});
    })
})

$(document).ready(function(){
    $(".catalog-element1")
     .mouseover(function(){
        $(".catalog-element1").css({"opacity":".3", "transition-duration":"0.5s"});
    })
    
     .mouseout(function(){
        $(".catalog-element1").css({"line-height":"5px", "opacity":".07", "color":"transparent"});
    })
})

$(document).ready(function(){
    $(".catalog-element2")
     .mouseover(function(){
        $(".catalog-element2").css({"opacity":".3", "transition-duration":"0.5s"});
    })
    
     .mouseout(function(){
        $(".catalog-element2").css({"line-height":"5px", "opacity":".07", "color":"transparent"});
    })
})

$(document).ready(function(){
    $(".catalog-element3")
     .mouseover(function(){
        $(".catalog-element3").css({"opacity":".3", "transition-duration":"0.5s"});
    })
    
     .mouseout(function(){
        $(".catalog-element3").css({"line-height":"5px", "opacity":".07", "color":"transparent"});
    })
})

$(document).ready(function(){
    $(".catalog-element4")
     .mouseover(function(){
        $(".catalog-element4").css({"opacity":".3", "transition-duration":"0.5s"});
    })
    
     .mouseout(function(){
        $(".catalog-element4").css({"line-height":"5px", "opacity":".07", "color":"transparent"});
    })
})

$(document).ready(function(){
    $("li:second")
    .onclick(function(){
        $("#uiux").removeClass(".catalog-click")
              .addClass(".catalog-element1");
        
        $("#branding").removeClass(".catalog-element1")
                      .addClass(".catalog-click");
     })       
})

/*3d effection*/

$(document).ready(function(){
    $(".item").hover3d({
        selector:".homeimg",
        shine: true,
        perspective: 3000,
        sensitivity: 30,
        invert:true,
    })
    
    .hover3d({
        selector:".text",
        shine: true,
        perspective: 3000,
        sensitivity: 40,
        invert:true,
    })
})


/*slideshow*/

var slideIndex = 5;
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
    var text = document.getElementsByClassName("item-text");
    if (n > 5) {location.href="branding.html"}
    if (n < 1) {location.href="othersreverse.html"}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i =0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }
    for (i = 0; i < text.length; i++) {
        text[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className +=" active";
    text[slideIndex-1].style.display = "block";
}