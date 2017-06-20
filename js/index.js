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
    $(".slider").hover3d({
        selector:".homeimg",
        shine: true,
        perspective: 3000,
        sensitivity: 40,
        invert:true,
    })
    
    .hover3d({
        selector:".project h1",
        shine: true,
        perspective: 3000,
        sensitivity: 25,
        invert:true,
    })
})

$(document).ready(function(){
    $(".meau-icon")
        .click(function(){
        $(".menu li")
            .css({"display":"inline-block"})
    })
})