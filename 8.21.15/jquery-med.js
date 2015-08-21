// sort option elements

var arr = [];
$('option').each(function () {
	arr.push(this.innerHTML);
});

arr.sort();

$('#target select').empty();

$(arr).each(function (x) {
	$('#target select').append($('<option></option>')
		.text(arr[x]));
});