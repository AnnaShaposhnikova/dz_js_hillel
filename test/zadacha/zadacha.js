//  8. напишите функцию add(1)(2) // ->3

function add(a) {
  return function inner(b) {
    return a + b;
  };
}
console.log(add(1)(2));

//9. Реализуйте '2'.add(2).minus(3) // -> 1



String.prototype.add = function(num){
  String.prototype.result = +this + num;//добавляем переменую в прототип
  return this;
}
String.prototype.minus = function(num){
  String.prototype.result = +this + num;
  return +this.result - num;
}


console.log("2".add(2).minus(3));

//10. Напишите функцию, которая будет принимать строку из скобок,
//и определять все ли они закрыты "()(({{[[}}{{[]]])"
//функция возвращает boolean
const brakes = "()(({{[[}}{{[]]])";
function isClosed(string){
 const store = {};


}



//11. Напишите функцию, принимает массив чисел
// возвращает массив только с четными числами - [2,1,34]-> [2,4]

function sortArray(arr){
  let newArr = [];
  for(let i=0; i<arr.length; i++){
    if(arr[i] % 2 === 0){
      newArr.push(arr[i]);
    }
  }
  return newArr
}

console.log(sortArray([2,1,34]))

//12 .Напишите функцию, которая определяет содержат ли
 // переданные ей слова одинаковый набор букв - some('kot', 'tok') -> true some('kot','lob') ->false

 function qqq(stringA, stringB){
   if(arr1.length !== arr2.length){
      return false;
   }
   return stringA.split('').join('') === stringB.split('').join('');
  //  const arr1 = stringA.split('');
  //  arr1.sort();
  //  const arr2 = stringB.split('');
  //  arr2.sort();
  // arr1.every((element, index){
  //    return element === arr2[index];
  //  })

   }
 
