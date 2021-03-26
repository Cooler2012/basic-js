const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options) {

  let resArr = [];
  let {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' } = options;
  
  if (typeof(str) !== 'string') {
    str += '';
  }
  
  if (typeof(addition) !== 'string') {
    addition += '';
  }
  
  for (let i = 0; i < repeatTimes; i++) {
    let prop;
    i > 0 ? prop = separator + str : prop = str;
    for (let j = 0; j < additionRepeatTimes; j++) {
         j == (additionRepeatTimes - 1) ? prop += addition : prop += addition + additionSeparator;
    }
  
    resArr.push(prop);
  }
  
      return resArr.join('')
  };

  
