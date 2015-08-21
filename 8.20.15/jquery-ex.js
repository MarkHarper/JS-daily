//Remove children except h2 tag

var h2 = $('#target').find('h2').detach();
$('#target').empty().append(h2);

//Remove divs without children

$('div:empty').remove();
