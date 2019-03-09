$(document).ready(function () {
    let heading = $('.main-header');

    // heading.hide(2000).show(2000);
    // heading.fadeOut(2000).fadeIn(2000);
    // heading.slideUp(2000).slideDown(2000);
    heading.animate({marginLeft: '200px'}, 2000, function(){
        $('p').animate({fontSize: '1.5rem'}, 100)
    })

});