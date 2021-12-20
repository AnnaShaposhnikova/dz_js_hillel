function summ(number) {

  let memoryArray = [];
    const initial = 5;
  function innerSum(number) {
     //debugger
     let ex = memoryArray.some((el) => {
        if (el === number) {
          return true;
        }
      })
    if (!ex) {     
      let sum = 0;
      memoryArray.push(number);
      sum = initial + number;
      console.log(sum) 
    } else {
      let sum = 0;
      sum = initial + number;
      console.log(`From memory ${sum}`) ;
    }
  }
  return innerSum;
  
}
const calc = summ();
calc(2);
calc(2)
