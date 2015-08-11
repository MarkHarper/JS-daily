function ABCheck(str) { 
	
  var regex = /(a...b)/;
 
  if (str.match(regex)) {
    return true;
  }
  else {
    return false;
  }
        
}