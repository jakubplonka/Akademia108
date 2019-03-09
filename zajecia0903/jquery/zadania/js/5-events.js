$(document).ready(function () {
    // let heading = $('.main-header');
    // heading.click(function(){
    //     $(this).css('background-color', 'red');
    // });
    // // kilka triggerow na raz
    // $('p').on({
    //     click: function () {
    //         $(this).css('background-color', 'red');
    //     },
    //     mouseover: function () {
    //         $(this).css('color', 'yellow');
    //     }
    // });
    $('.add-user').on('click', function () {
        let x = $('.users-list li').length + 1;
        
        let li = '<li>User ' + x + '</li>';
        $('.users-list').append(li);
         
    });

    $('.rm-user').on('click', function(){
        $('.users-list li:last-child').remove();
        
    })
});