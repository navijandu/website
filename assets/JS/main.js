$(document).ready(function () {
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        console.log(height)
        if (height > 400) {
            $(".sec-img").addClass("dekho")
        }
    });
});
