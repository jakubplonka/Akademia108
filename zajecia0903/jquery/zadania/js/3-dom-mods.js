
$(document).ready(function () {
    
    let heading = $('.main-header');
    
    // mods
    
    $('.main-header').text('Nowa tresc naglowka')
    $('.main-header').html('Nowa trasc naglowka ze <span> spanem</span>');
    
    // appendy
    
    $('.main-header').append('Wewnatrz na koncu');
    $('.main-header').prepend('wewnatrz na poczatku');
    $('.main-header').before('na zewnatrz na poczatku');
    $('.main-header').after('na zewnatrz na koncu');
    
    $('p').before('<h3>Naglowek h3</h3');
    
    // usuwanie elementow
    
    //$('.main-header ').remove(); // lub empty();
    
    
    // modyfikacja wygladu
    
    // heading.css('color', 'red');
    
    heading.css({
        color: 'red',
        backgroundColor: 'green'
    })
    
    // dodawanie class
    
    $('p:nth-of-type(even)').addClass('bg-orange');
});