$(window).scroll(function() {
    let st = $(this).scrollTop();

    $(".banner__page").css({
        "transform" : "translate(-50%, -" + st/5 + "px"
    });
    $(".banner__phone").css({
        "transform" : "translate(0px, " + st/15 + "px"
    });
    $(".banner__phone2").css({
        "transform" : "translate(0px, -" + st/15 + "px"
    });
});
