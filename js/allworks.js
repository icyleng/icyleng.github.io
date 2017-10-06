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
    $(".allworks")
    .click(function(){
        $(".left").css({"margin-top":"5px", "transform":"rotate(0deg)"});
        $(".right").css({"margin-top":"5px", "transform":"rotate(0deg)"});
        $(".remove").css({"margin-top":"5px", "background-color":"#292929"});
        $(".menu li").css({"display":"none"});
    })
})

/*nav effection*/



$(document).ready(function(){
  $("ul").filter(".worklist2").hide();
  $(".section-line").hide();
  $(".all").css({"font-family": "'Radley', serif", "font-size": "72px", "line-height": "100px"});
});

/*select*/

$(document).ready(function(){
    $(".uiux").click(function(){
        $(".worklist li").not(".uiux-item").hide();
        $(".worklist li").filter(".uiux-item").show();
        $("#uiux").css({"font-family": "'Radley', serif", "font-size": "72px", "line-height": "100px"});
        $(".left-nav li").not("#uiux").css({"font-family": "'raleway', sans-serif", "font-size":"14px", "font-weight":"400", "line-height": "30px"});
        $(".section-line").show();
        $(".worklist2").not(".uiux-item2").show();
        $(".worklist2").filter(".uiux-item2").hide();
});

    $(".branding").click(function(){
        $(".worklist li").not(".branding-item").hide();
        $(".worklist li").filter(".branding-item").show();
        $("#branding").css({"font-family": "'Radley', serif", "font-size": "72px", "line-height": "100px"});
        $(".left-nav li").not("#branding").css({"font-family": "'raleway', sans-serif", "font-size":"14px", "font-weight":"400", "line-height": "30px"});
        $(".section-line").show();
        $(".worklist2").not(".branding-item2").show();
        $(".worklist2").filter(".branding-item2").hide();
});

    $(".video").click(function(){
        $(".worklist li").not(".video-item").hide();
        $(".worklist li").filter(".video-item").show();
        $("#video").css({"font-family": "'Radley', serif", "font-size": "72px", "line-height": "100px"});
        $(".left-nav li").not("#video").css({"font-family": "'raleway', sans-serif", "font-size":"14px", "font-weight":"400", "line-height": "30px"});
        $(".section-line").show();
        $(".worklist2").not(".video-item2").show();
        $(".worklist2").filter(".video-item2").hide();
});

    $(".printing").click(function(){
        $(".worklist li").not(".printing-item").hide();
        $(".worklist li").filter(".printing-item").show();
        $("#printing").css({"font-family": "'Radley', serif", "font-size": "72px", "line-height": "100px"});
        $(".left-nav li").not("#printing").css({"font-family": "'raleway', sans-serif", "font-size":"14px", "font-weight":"400", "line-height": "30px"});
        $(".section-line").show();
        $(".worklist2").not(".printing-item2").show();
        $(".worklist2").filter(".printing-item2").hide();
});

    $(".others").click(function(){
        $(".worklist li").not(".others-item").hide();
        $(".worklist li").filter(".others-item").show();
        $("#others").css({"font-family": "'Radley', serif", "font-size": "72px", "line-height": "100px"});
        $(".left-nav li").not("#others").css({"font-family": "'raleway', sans-serif", "font-size":"14px", "font-weight":"400", "line-height": "30px"});
        $(".section-line").show();
        $(".worklist2").not(".others-item2").show();
        $(".worklist2").filter(".others-item2").hide();
});

    $(".all").click(function(){
        $(".worklist li").show();
        $("#all").css({"font-family": "'Radley', serif", "font-size": "72px", "line-height": "100px"});
        $(".left-nav li").not("#all").css({"font-family": "'raleway', sans-serif", "font-size":"14px", "font-weight":"400", "line-height": "30px"});
        $(".section-line").hide();
        $(".worklist2").hide();
});
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