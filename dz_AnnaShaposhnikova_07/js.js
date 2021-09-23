// 1.Создать функцию с замыканием, из который вернуть массив чисел [1,2,3,4,5,6,7];
// 2.Написать рекурсивную функцию, которая будет принимать как аргумент массив и индекс
//  ( индекс не должен быть больше, чем кол-во элементов массива, проверки пока упускаем) 
// 3.Функция должна считать сумму чисел элементов массива, началом будет индекс переданный как аргумент в данную функцию.
 //То есть, если мы передали индекс 4 то мы должны рекурсивно сложить 5 +4+3+2+1 

 
function returnArray () {
    const array = [1,2,3,4,5,6,7];
    return function() {
       return array;
    }
  }
  const functionArray = returnArray();
  const getArray =  functionArray();


function getSumOfArray(arr, index){ 
 
  if(index === 0){
    return arr[index];    
  }
  else{
    return arr[index] + getSumOfArray(arr,--index);      
  }  

  }

sum1 = getSumOfArray(getArray, 4);
console.log(sum1);




