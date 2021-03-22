const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let array = [];
  for ( let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (typeof(item) !== 'string') {
      continue
    } else {
      array.push(item[0])
    }
  }
  return array.sort().join('')
};
