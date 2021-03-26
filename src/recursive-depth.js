const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {    
    let count = 0;
    let array = [];
    
    function foo (arr) {
       for ( let item of arr) {
          if (Array.isArray(item)) {
              count += 1;
              array.push(count);
              foo(item);
             } else {
                array.push(count);
                count = 1;
            
          }
        }
          return array;
    }
        ///                                    Не окончен!
        
      if (Array.isArray(arr)) {
          count += 1;
          foo (arr)
      } else {
          return false
      };
    
    return array.reduce((a,b) => Math.max(a , b));
  };
    

};