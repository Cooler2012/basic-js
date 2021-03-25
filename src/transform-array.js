const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(Array.isArray(arr) !== true) {
    return THROWN
  }
let array = [];

  for ( let i = 0; i < arr.length; i++) {
    let item = arr[i];

    if (item === '--discard-next') {
      i++;
      continue;
    } else if (item === '--discard-prev') {
      (array.length && arr[i - 2] !== '--discard-next') ? array.pop() : true;
    } else if (item === '--double-next') {
      (i < arr.length - 1) ? array.push(arr[i + 1]) : true;
    } else if (item === '--double-prev') {
      (i > 0 && arr[i - 2] !== '--discard-next') ? array.push(arr[i - 1]) : true;
    } else {
      array.push(item)
    }
  }
  return array
}
