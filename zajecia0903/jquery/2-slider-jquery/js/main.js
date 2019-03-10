$(document).ready(function () {
    let slideShow = $('.slide-show');
    let singleSlide = $('.single-slide')
    let slideCount = singleSlide.length;
    let slideWidth = 100/slideCount;
    let slideIndex = 0;
    slideShow.css('width', 100*slideCount + '%');
    singleSlide.each(function(index, item){
        $(this).css({left: slideWidth*index + '%', width: slideWidth + '%'});
    })

    let prev = $('.prev-slide');
    let next = $('.next-slide');

    next.click(function () {
        slide(slideIndex + 1);
        
    });

    prev.click(function(){
        slide(slideIndex - 1);
        
    });

    function slide(newSlideIndex){
        if(newSlideIndex < 0 || newSlideIndex > slideCount - 1){
            return;
        }

        let slideCaption = slideShow.find('.slide-caption').eq(newSlideIndex);
        let marginLeft = newSlideIndex * (-100) + '%';
        // $('.slide-caption').hide();
        slideShow.animate({marginLeft: marginLeft}, 800, function(){
            slideIndex = newSlideIndex;
            // slideCaption.fadeIn();
        })
    }
    
});