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