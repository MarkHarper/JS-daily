//Select second option

$('#target').find('select option:eq(1)').attr('selected',true);

//Double element size

var w = $('#target').width();
var h = $('#target').height();
$('#target').css('width',w*2);
$('#target').css('height',h*2);

//remove all children and text

$('#target').children().remove();
$('#target').text('');