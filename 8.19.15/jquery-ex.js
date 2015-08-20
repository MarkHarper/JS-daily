//alternate option colors
$('#target').find('select option:odd').css('color', 'red');
$('#target').find('select option:even').css('color', 'blue');

//replace h2 tag with h3

$('#target').find('h2').replaceWith("<h3>"+$('#target').find('h2').text()+"</h3>");

//replace all instances of cat with dog

$('#target').html($('#target').html().replace(/cat/g,'dog'));

