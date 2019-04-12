Array.prototype.uniq = function() {
  const result = [];
  this.forEach(function(el) {
    if (!result.includes(el)) {
      result.push(el);
    }
  });
  console.log(result);
}

// let arr = new Array(1,2,3,4,4,6,2,7)
// console.log(arr.uniq())


Array.prototype.twoSum = function() {
  const result = []; 

  // let i = 0; 
  // let j = 1;
  for (let i = 0; i < this.length-1; i++ ){
    for(let j = i+1; j < (this.length); j++){
      if(this[i]+this[j]===0) {
        result.push([i,j]);
      }
    } 
  }
  return result;
}

let arr1 = new Array(-1,1,2,-2,3,4,5,6,7,-6)

Array.prototype.transpose = function() {
  const result = [];
  for (let j = 0; j < this[0].length ; j++ ) {
    let temp = [];
    for (let i = 0; i < this.length; i++ ) {
      temp.push(this[i][j]);  
    }
    result.push(temp);
  }
  return result; 
}
let arr2 = [[1,2],[3,4],[5,6],[7,8]]

let arr3 = [[1,2,3,4],[5,6,7,8],[9,10,11,12]] 

