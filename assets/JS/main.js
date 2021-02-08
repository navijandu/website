$(document).ready(function () {
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        console.log(height)
        if (height > 300) {
            $(".sec-img").addClass("dekho")
            $(".sec-img").removeClass("sec");
            $(".sec-cont").addClass("sec-count-appear")
            $(".sec-cont").removeClass("sec-c")
        }
        if (height > 900) {
            $(".leftimg").addClass("dekho");
            $(".leftimg").removeClass("hide");
        }
    });
});
