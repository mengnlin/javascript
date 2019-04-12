
function range(start,end){
  if (start===end) {return [start];}; 
  let result=[start];
  return result.concat(range((start+=1),end)); 
  
}

function sumRec(arr){
  if (arr.length===1){return arr[0];} 
  let sum = arr[0] 
  return sum+ sumRec(arr.slice(1,arr.length))
}

