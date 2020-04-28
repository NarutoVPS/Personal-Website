$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 100) {
            $('.bg-dark').addClass('navbarAfter');
        } else {
            $('.bg-dark').removeClass('navbarAfter');
        }
    });
});
