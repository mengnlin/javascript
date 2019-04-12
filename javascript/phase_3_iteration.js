Array.prototype.bubbleSort = function() {
  let sorted= false;  
  while (!sorted){
    sorted = true; 
    for ( i = 0; i < this.length - 1; i++ ){
      if (this[i] > this[(i + 1)]){
        sorted = false;
        [this[i], this[i + 1]] = [this[i + 1], this[i]];
      }
    }
  }
  console.log(this);
}

let arr1 = [6,5,7,1,8,9,2,7,4,9,8,1,5,6,1,2] 

Array.prototype.substrings = function() {
  let result = [];
  for (i = 0; i < this.length; i++ ){
    result.push(this[i]);
    for (j = (i + 1); j <= this.length; j++) {
      result.push(this.slice(i,j));
    }
  }
  return result;
}

let arr2 = [1,2,3,4,5,6,7,8]

