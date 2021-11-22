const {isNumber} = require("./validation");

module.exports = (a,b)=>{
    if(!isNumber(a) || !isNumber(b)){
        throw new Error("To function div nter only numbers!")
      }
    if(b === 0){
        throw new Error("You can not divide by zero");        
    }
   return  a/b;
}