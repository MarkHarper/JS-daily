function AlphabetSoup(str) { 

  var split = str.split('');
  
  var sortedSplit = split.sort();
  
  var output = sortedSplit.join('');
  
  // code goes here  
  return output.toLowerCase(); 
         
}