//Show alert after 1 second delay

setTimeout(function () {
alert('yay');
}, 1000);

//Count .child elements

var child = $('.child').length;
alert(child);

//animate double size

var w = $('#target').width();
var h = $('#target').height();

$('#target').animate({width: w*2, height: h*2});