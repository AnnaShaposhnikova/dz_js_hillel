const users = [
    {  
      name: 'Bob',  
      age: 27,  
      address:{  
          country:'USA',  
          city:'LA'  
      },  
      marks:[2,3,5,4,2,3,1,5]  
    },

    {  
      name: 'July',  
      age: 21,  
      address:{  
          country:'Ukraine',  
          city:'Kiev'  
      },  
      marks:[4,4,5,4,3,4,3,5]  
    },
  
    {  
      name: 'Monya',  
      age: 15,  
      address:{  
          country:'Ukraine',  
          city:'Odessa'  
      },  
      marks:[5,1,5,1,5,1,5,1]  
    },
  
    {  
      name: 'Vsevolod',  
      age: 19,  
      address:{  
          country:'Ukraine',  
          city:'Lviv'  
      },  
      marks:[3,4,5,3,1,2,4,6]  
    },  
  ];

//   1.Cоздать переменную  isNotAdult и получить в неё обьект студента, который несовершеннолетний

  const isNotAdult = users.find(function(user){      
    return user.age < 18;    
  })

//   2 Создать переменную foreignStudent  и получить туда массив иногородних студентов (не из Украины)

  const foreignStudents = users.filter(function(user){
      return user.address.country !== 'Ukraine'
  })

//   3 Получить новый массив с юзерами у каждого юзера должно появится новое проперти isAdult:true | false. 
//     Так же должно появиться новое поле averageMark содержащее среднюю оценку пользователя.

  const newArrayOfStudents = users.map(function(user){
        
      user.isAdult = user.age >= 18;

      const sumOfElementsOfArray = user.marks.reduce(function(acc,currentElement, index,currentArray){
        return acc += currentElement;
       
        }, 0)
         user.averageMark = sumOfElementsOfArray / user.marks.length;
    return user;
  })
//   4 Создать переменную averageMark и указать среднюю оценку по всем пользователям 

const averageMark = users.reduce(function(acc,currentElement){
        return acc += currentElement.averageMark;
}, 0) / users.length;

// 5 Создать новую переменную adresses  из массива пользователей вернуть в неё новый обьект который будет 
//   в себе содержать два поля 1 . countries - массив стран пользователей и 2 citys  массив городов пользователей.

const addresses = users.reduce (function(acc, currentUser){
    if(!Object.keys(acc).length){
        acc['countries'] = [];
        acc['cities'] = [];
        }

        acc.countries.push(currentUser.address.country);
        acc.cities.push(currentUser.address.city);   
    
     return acc; 
        
},[]);


// console.log(isNotAdult)
// console.log(foreignStudents)
// console.log(newArrayOfStudents)
//  console.log(`Average mark is ${averageMark}`);
// console.log(addresses)