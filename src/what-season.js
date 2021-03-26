const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (date === undefined) {
    return 'Unable to determine the time of year!'
  }

  const month = date.getMonth();

  if (month === null) {
    return THROWN
  }

   if (month >= 11) {
     return 'winter' 
   } else if (month >= 8) {
     return 'autumn'
   } else if (month >= 5) {
     return 'summer'
   } else if (month >= 2) {
     return 'spring'
   } else {
     return 'winter'
   }
   
   return THROWN
   
 };
