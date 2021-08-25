// Add your functions here
function map (array, func){
  let arr= []
  for (let i= 0; i< array.length; i++){
      arr.push(func(array[i]))
  }
    return arr
}




function reduce(array, func, startingPoint){
    let total //accumulator
  if (!startingPoint){
    total = array[0];
    for (let i =1; i < array.length; i++){
    total = func(array[i], total);
      } 
    } else {
        total = startingPoint
     for (let i =0; i < array.length; i++){
         total = func(array[i], total);
   }
  }
return total;

}