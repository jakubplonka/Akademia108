$(document).ready(function () {
    let imie = $('#imie');
    let nazwisko = $('#nazwisko');
    $('form').submit(function(e) {
        e.preventDefault();
        console.log(`Imie: ${imie.val()} Nazwisko: ${nazwisko.val()}`);

        
        
    })
});