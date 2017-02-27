// var arr = document.querySelectorAll('h1');
// for (var i = 0; i < arr.length; i++) {
//     arr[i].innerHTML = 'Hello from VanillaJS';
// }

$(function() {
    $('h1').html('Hello from jQuery');  
    $('button').click(function() {
        $('h1').fadeToggle(3000);
    });
});




