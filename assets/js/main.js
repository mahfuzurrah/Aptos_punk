(function (a) {
    "use strict";

    $(".navbar-toggler").on("click", function () {
        $(".navbar-toggler-icon").toggleClass("active");
        $(".navbar-collapse").toggleClass("show");
    });
    var aScroll = $(".nav-item .nav-link"),
        $navbarCollapse = $(".navbar-collapse");
    aScroll.on("click", function (event) {
        var target = $($(this).attr("href"));
        $(this).parent(".nav-item").siblings().removeClass("active");
        $(this).parent(".nav-item").addClass("active");
        if (target.length > 0) {
            event.preventDefault();
            $("html, body").animate({
                scrollTop: target.offset().top - 80,
            });
        }
        if ($(".navbar-collapse").hasClass("show")) {
            $(".navbar-collapse").toggleClass("show");
            $(".navbar-toggler-icon").removeClass("active");
            $(".navbar-toggler").toggleClass("collapsed");
        }
    });
    $(window).scroll(function () {
        if (
            $(document).scrollTop() > $(window).height() ||
            $(document).scrollTop() > 105
        ) {
            $(".navbar-sticky").addClass("navbar-fixed");
        } else {
            $(".navbar-sticky").removeClass("navbar-fixed");
        }
    });
})(jQuery);