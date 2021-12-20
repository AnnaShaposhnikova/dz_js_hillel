function summ() {
  let summ = 0;
  for (let i = 0; i < arguments.length; i++) {
    summ += arguments[i];
  }
  return summ;
}

console.log(summ(1, 2));
console.log(summ(1, 2, 3, 4, 5));

function findUnique(arr){

  return new Set(arr);

}

function findUniqueIncludes(arr){
  const uniqueArr = [];
  for(let i = 0; i<arr.length; i++){
    if(!uniqueArr.includes(arr[i])){
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;

}
function findUniqueReduce(arr){
  
}

arr1 = ["a", "b", "c", "d", "a", "b"];
console.log(findUnique(arr1));
console.log(findUniqueIncludes(arr1));

function findMinimumValue(arr) {
  ///[-100...100]
  let result = arr[0];
  for (let i = 0; i < arr.length; i++) {
  
    if (result > arr[i]) {
      // result-i;
      result = arr[i];
    }
  }
  return result;
}

//функция ничего не возвращает

console.log(findMinimumValue([-1, -3, 6, -33, -25]));
console.log(findMinimumValue([1, 4, 6, 33, 25]));