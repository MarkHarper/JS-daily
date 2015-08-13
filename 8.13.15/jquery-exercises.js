//exercises from http://jqexercise.droppages.com/

//change background color of target element
$('#target').css('background-color', 'red');

//Change the text of child element
$('#target').find('span').text('yay');

//Create a clone of a child element and place it after that element
var span = $('#target').find('span:first');
span.clone().insertAfter(span);