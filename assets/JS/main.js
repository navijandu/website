$(document).ready(function () {
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        console.log(height)

        if (height > 400) {
            $(".bl").addClass("bl-visible")
            $(".bl ul li").addClass("bl-color")
        } else {
            $("bl").removeClass("bl-visible")
        };
        if (height > 200) {
            $(".sec-img").addClass("dekho")
            $(".sec-img").removeClass("sec");
            $(".sec-cont").addClass("sec-count-appear")
            $(".sec-cont").removeClass("sec-c")
        }
        if (height > 800) {
            $(".leftimg").addClass("dekho");
            $(".leftimg").removeClass("hide");
            $(".rightimg").addClass("fromright");
            $(".rightimg").removeClass("hideright");
        }
        if (height > 1300) {
            $(".hide2").addClass("dekho");
            $(".hide2").removeClass("leftimg2");
            $(".rightimg2").addClass("fromright")
            $(".rightimg2").removeClass("hideright2")
        }
    });


    $('.your-class').slick({
        centerMode: true,
        slidesToShow: 3,
        dots: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    });

});
