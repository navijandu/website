$(document).ready(function () {
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        console.log(height)
        if (height > 200) {
            $(".sec-img").addClass("dekho")
            $(".sec-img").removeClass("sec");
            $(".sec-cont").addClass("sec-count-appear")
            $(".sec-cont").removeClass("sec-c")
        }
        if (height > 800) {
            $(".leftimg").addClass("dekho");
            $(".leftimg").removeClass("hide");
        }
    });
});
