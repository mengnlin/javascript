
Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
}

const times = function timesTwo(num) {
  return num * 2;
}

let arr4 = [1, 2, 3, 4, 5]



Array.prototype.myMap = function (hollaBack) {
  const result = [];
  this.myEach(function (el) {
    result.push(hollaBack(el));
  })
  return result;
}
function proc(num) {
  return num * num;
}

// const mapMore = myMap();


// Array.prototype.reduce = function(callback, initialValue) {
//   let i = 0;
//   let accum = 0;
//   if (initialValue) { 
//     i = 0;
//     accum = initialValue;
//   } else {
//     accum = 0;
//   }
//   while (i < this.length) {
//     accum += callback(this[i]);
//     i++;
//   }
//   return accum;
// }


Array.prototype.reduce = function (callback, initialValue) {
  // let i = 0;
  let accum = 0;
  let temp = []
  if (initialValue) {
    accum = initialValue;
    temp = this;
  } else {
    temp = this.slice(1);
    accum = this[0];
  }
  temp.myEach(function (element) {
    accum += callback(element);
  });
  return accum;
}
