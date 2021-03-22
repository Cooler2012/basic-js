const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  throw new CustomError('Not implemented');
  for ( let key of arr) {
    let index = arr.indexOf(key);

    if (key === '--discard-next') {
      arr.splice(index,2)
    } else if (key === '--discard-prev') {
      arr.splice(index-1,2)
    } else if (key === '--double-next') {
      arr.splice(index, 1, arr[index+1])
    } else if (key === '--double-prev') {
      arr.splice(index, 1, arr[index-1])
    } 
    
  }
  return arr
};
