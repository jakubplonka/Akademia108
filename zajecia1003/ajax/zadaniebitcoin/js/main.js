$(document).ready(function () {
    function count(){
        let currentPrice = parseFloat($('#current-exchange-price').text())
        console.log(currentPrice);
        $.getJSON("https://blockchain.info/pl/ticker",
        function (elements) {
            if(currentPrice > elements.PLN.last){
                $('#current-exchange-price').removeClass();
                $('#current-exchange-price').addClass('green');
            }else if(currentPrice < elements.PLN.last){
                $('#current-exchange-price').removeClass();
                $('#current-exchange-price').addClass('red');
            }else{
                $('#current-exchange-price').removeClass();
                $('#current-exchange-price').addClass('black');
            }
            $('#current-exchange-price').text(elements.PLN.last)
        })
    }
    count();
    let interval = setInterval(count, 1000);
    $('button').click(function () {
        let value = $(this).val();
        clearInterval(interval);
        console.log('zmiana interwalu');
        
        
        interval = setInterval(count, value);
    })
    
});