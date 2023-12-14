$('h1 span').html( $('li').length );
var lis = document.querySelectorAll('li');
var span = document.querySelector('h1 span');
span.innerHTML = lis.length;