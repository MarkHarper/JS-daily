//filtering for specific elements

$('.target:nth-child(2)').css('background-color','red');

//disable button

$('.target').find('button').prop('disabled', true);

//uncheck checkboxes

$('.target').find('input').attr('checked', false);

//move element to new parent

$('#child').appendTo('#parent2');

//set input to readonly

$('#target').find('input').prop('readonly',true);