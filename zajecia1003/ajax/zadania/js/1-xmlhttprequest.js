'use strict';



// definicja funkcji ajax
function ajax( method, url ) {
    
    
    // utworzenie obiektu
    var httpReq = new XMLHttpRequest();
    
    
    // otwarcie polaczenia - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open
    httpReq.open( method, url );
    
    
    
    // jesli status polaczenia zostal zmieniony -> httpReq.readyState
    // 0: połączenie nie nawiązane,
    // 1: połączenie nawiązane,
    // 2: żądanie odebrane,
    // 3: przetwarzanie,
    // 4: dane zwrócone i gotowe do użycia.
    httpReq.onreadystatechange = function() {
        
        // jeśli 4: dane zwrócone i gotowe do użycia
        if ( httpReq.readyState == 4 ) {
            
            // sprawdź kod statusu połączenia - https://pl.wikipedia.org/wiki/Kod_odpowiedzi_HTTP
            if ( httpReq.status == 200 ) {
                
                var returnData = httpReq.responseText;
                var jsonData = JSON.parse(returnData);
                var userDataContainer = document.getElementById('user-data');
                // var parFirst = document.createElement('p');
                // var parSec = document.createElement('p');
                // var parTrd = document.createElement('p');

                for (const prop in jsonData) {
                    if (jsonData.hasOwnProperty(prop)) {
                        const element = jsonData[prop];
                        var par = document.createElement('p');
                        par.innerText = element;
                        userDataContainer.appendChild(par);
                    }
                }

                // parFirst.innerText = jsonData.userName;
                // parSec.innerText = jsonData.userURL;
                // parTrd.innerText = jsonData.userId;
                // userDataContainer.appendChild(parFirst);
                // userDataContainer.appendChild(parSec);
                // userDataContainer.appendChild(parTrd);
                console.log(jsonData);
                // zeruj obiekt, aby nie utrzymywać nie potrzebnego już połączenia z serwerem
                httpReq = null;
                
            }
            
        }
    
    }


    // wysłanie danych do serwera
    httpReq.send();
}




document.getElementById('get-new-data').addEventListener('click', call);



// wywołujemy naszą funkcję ajax() :)    
function call() {
    ajax( "GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl" )
}




