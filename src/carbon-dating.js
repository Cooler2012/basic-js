const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(value) {

  let num = parseFloat(value);
 if(typeof(value) !== 'string' || !isFinite(value) || num <=0 || num > MODERN_ACTIVITY) {
   return false
 }
 if(Object.is(num , NaN)) {
    return false
 }

  return Math.ceil(
    Math.log(MODERN_ACTIVITY / num) /
      (0.693 / HALF_LIFE_PERIOD)
  );
};