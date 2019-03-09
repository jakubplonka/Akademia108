$(document).ready(function () {
    $('.users-list li').each(function(index, element){
        let x = index * 10 + 'px';
        $(element).css('margin-left', x);
        
        
        
    })
});