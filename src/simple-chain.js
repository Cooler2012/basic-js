const CustomError = require("../extensions/custom-error");

const chainMaker = {
  //let count = 0;
   arr : [],
  
  getLength() {
    return this.arr.length;
  },
  addLink(value = '') {
   if (value === '') {
     this.arr.push('( )')
   } else {
    this.arr.push(`( ${value} )`)
   }
    return this
  },
  removeLink(position) {
    if(isNaN(+position) ||
      position == '' ||
      this.arr[position] === undefined) {
      this.arr = [];
      throw new Error();
    }
    this.arr.splice(position - 1, 1);
    return this; 
  },
  reverseChain() { 
    this.arr.reverse();
    return this
  },
  finishChain() {
    let res = this.arr.join('~~');
    this.arr = [];
   return res
  }
}

module.exports = chainMaker;
