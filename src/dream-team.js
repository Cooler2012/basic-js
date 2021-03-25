const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if( Array.isArray(arr) == false){
    return false
  } 
  let array = [];
  for ( let i = 0; i < arr.length; i++) {
    let item = arr[i]
    //item = item.toLowerCase();
    if (typeof(item) !== 'string') {
      continue
    } else {
      item = item.replace(/ /g, '')
      item = item.toLowerCase();
      array.push(item[0])
    }
  }
  return array.sort().join('').toUpperCase()
};
