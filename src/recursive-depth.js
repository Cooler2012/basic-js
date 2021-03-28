const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {    
    if(!Array.isArray(arr)) {
          return 1;
        }
    
        let max = 1;
        arr.forEach(item => {
          if(Array.isArray(item)) {
            const nest = this.calculateDepth(item) + 1;
            if(max < nest) {
              max = nest
            }
          }
        });
        
        return max;
    }
}