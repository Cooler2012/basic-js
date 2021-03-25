const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let obj = {
    turns : 0,
    seconds : 0,
  };
    
  let val = 1;
    
  for (let i = 0; i < disksNumber; i++) {
    if (i > 0) {
      val *= 2; 
    };
    i === 0 ? obj.turns +=1 : obj.turns += val;
  }
  
  obj.seconds = Math.floor(3600/turnsSpeed * obj.turns)
  
  return obj;
  };