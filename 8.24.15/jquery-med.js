// if yes, show again

var dialog = function () {
    if(confirm('yes')){
          dialog();
    }};

dialog();	