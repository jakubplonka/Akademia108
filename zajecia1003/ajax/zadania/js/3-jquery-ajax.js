$(document).ready(function () {
    function getUserData(next){
        $.getJSON("https://jsonplaceholder.typicode.com/users/"+next,
            function (jsonUserData) {
                let ul = $('<ul></ul>').addClass('post');
                ul.append('<li>' + jsonUserData.name + '</li>')
                ul.append('<li>' + jsonUserData.phone + '</li>')
                ul.append('<li>' + jsonUserData.address.city + '</li>')
                $('#posts').append(ul);
            }
        );
    }
    getUserData(1);
    $('#get-new-data').click(function(){
        let x = $('.post').length;
        getUserData(x + 1);
    });
});