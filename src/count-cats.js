const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let res = [];
    for ( let key of arr) {
      for(let i = 0; i < key.length; i++){
        if(key[i] === '^^') {
          res.push(key[i])
        }
      }
    }
    
    return res.length
  }
  