function sum(value){
  let currentSum = value;

  function cs(currentValue){
	currentSum +=currentValue;
	return cs;
  }
  
  cs.toString = function(){
	return currentSum;
  }

  return cs;
}