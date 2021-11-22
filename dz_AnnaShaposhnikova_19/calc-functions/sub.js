const {isNumber} = require("./validation");

module.exports = (a,b) => {
    if(!isNumber(a) || !isNumber(b)){
        throw new Error("To function sub enter only numbers!")
      }
    return a-b;
}