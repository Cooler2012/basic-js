const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here

  let str = arr.join('');
  let res = 0;
  let pos = str.indexOf('^^');
 while (pos > 0) {
   res += 1;
   pos = str.indexOf('^^', pos + 1);
 }
  return resж
};
