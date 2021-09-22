const users = [
  {
    name: "Bob",
    age: 27,
    address: {
      country: "USA",
      city: "LA",
    },
    marks: [2, 3, 5, 4, 2, 3, 1, 5],
  },

  {
    name: "July",
    age: 21,
    address: {
      country: "Ukraine",
      city: "Kiev",
    },
    marks: [4, 4, 5, 4, 3, 4, 3, 5],
  },

  {
    name: "Monya",
    age: 15,
    address: {
      country: "Ukraine",
      city: "Odessa",
    },
    marks: [5, 1, 5, 1, 5, 1, 5, 1],
  },

  {
    name: "Vsevolod",
    age: 19,
    address: {
      country: "Ukraine",
      city: "Lviv",
    },
    marks: [3, 4, 5, 3, 1, 2, 4, 6],
  },
];

//   1.Cоздать переменную  isNotAdult и получить в неё обьект студента, который несовершеннолетний

const isNotAdult = users.find((user) => user.age < 18);

//   2 Создать переменную foreignStudent  и получить туда массив иногородних студентов (не из Украины)

const foreignStudents = users.filter(
  ({address}) => address.country !== "Ukraine"
);

//   3 Получить новый массив с юзерами у каждого юзера должно появится новое проперти isAdult:true | false.
//     Так же должно появиться новое поле averageMark содержащее среднюю оценку пользователя.

const newArrayOfStudents = users.map((user) => {
  user.isAdult = user.age >= 18;

  const sumOfElementsOfArray = user.marks.reduce(
    (acc, currentElement) => (acc += currentElement),
    0
  );

  user.averageMark = sumOfElementsOfArray / user.marks.length;

  return user;
});

//   4 Создать переменную averageMark и указать среднюю оценку по всем пользователям

const averageMark =
  users.reduce(
    (acc, currentElement) => (acc += currentElement.averageMark),
    0
  ) / users.length;

// 5 Создать новую переменную adresses  из массива пользователей вернуть в неё новый обьект который будет
//   в себе содержать два поля 1 . countries - массив стран пользователей и 2 citys  массив городов пользователей.

let addresses = {
  countries: [],
  cities: [],
};

users.forEach(({ address }) => {
  addresses.countries.push(address.country);
  addresses.cities.push(address.city);
});

// Так же, нужно создать 3 функции

// 1 Должна получать в виде аргумента любой массив обьектов и возвращать из себя новый массив объектов с двумя полями
// firstName, lastName, если каое-либо из полей не присутствует в обьекте, заменять это поле на общее для всех
// (пример lastName = 'Doe')

function newArrayOfObjects(arrayOfObjects) {
  if (!Array.isArray(arrayOfObjects)) {
    console.log("Parametr must be array");
    return;
  }
  for (let i = 0; i < arrayOfObjects.length; i++) {
    if (typeof arrayOfObjects[i] !== "object") {
      console.log("Parametr must be array of objects");
      return;
    }
    if (typeof arrayOfObjects[i] === "object") {
      if (Array.isArray(arrayOfObjects[i])) {
        console.log(
          "Parametr is array of arrays, but you must enter array of objects"
        );
        return;
      }
    }
  }

  return newArrayOfObjects = arrayOfObjects.map(({name, firstName,lastName}) => {

    return {
      firstName: firstName || name || "Doe",
      lastName: lastName || "Doe",
    };
    
  } )

}

// 2.Должна принимать массив любых обьектов и возращать новый массив с обьектами у которых больше 3х ключей
//  (обьект у которого только name, lastName не пройдет проверку)

function checkIfHasThreeKeys(arrayOfObjects) {
  if (!Array.isArray(arrayOfObjects)) {
    console.log("Parametr must be array");
    return;
  }
  for (let i = 0; i < arrayOfObjects.length; i++) {
    if (typeof arrayOfObjects[i] !== "object") {
      console.log("Parametr must be array of objects");
      return;
    }
    if (typeof arrayOfObjects[i] === "object") {
      if (Array.isArray(arrayOfObjects[i])) {
        console.log(
          "Parametr is array of arrays, but you must enter array of objects"
        );
        return;
      }
    }
  }

  //   return arrayOfObjects.reduce((acc, element) => {
  //     if (Object.keys(element).length >= 3) {
  //       acc.push(element);
  //     }
  //     return acc;
  //   }, []);
  // }
  return arrayOfObjects.filter((element) => {
    return Object.keys(element).length >= 3;
  });
}

// 3.Функиция принимает масив обьектов и вовращает новый массив только с теми обьектами, у которых в значении ключей есть
// и string и number (name:'Ivan', age:18)  такие обьекты должны пропускать

function checkIfHasStringAndNumberKeys(arrayOfObjects) {
  if (!Array.isArray(arrayOfObjects)) {
    console.log("Parametr must be array");
    return;
  }
  for (let i = 0; i < arrayOfObjects.length; i++) {
    if (typeof arrayOfObjects[i] !== "object") {
      console.log("Parametr must be array of objects");
      return;
    }
    if (typeof arrayOfObjects[i] === "object") {
      if (Array.isArray(arrayOfObjects[i])) {
        console.log(
          "Parametr is array of arrays, but you must enter array of objects"
        );
        return;
      }
    }
  }

  const isNumAndString = (valueArray) => {
    return (
      valueArray.some((el) => typeof el === "number") &&
      valueArray.some((el) => typeof el === "string")
    );
  };

  return arrayOfObjects.filter((element) => {
    return isNumAndString(Object.values(element));
  });
}

// console.log(isNotAdult)
// console.log(foreignStudents)
// console.log(newArrayOfStudents)
//  console.log(`Average mark is ${averageMark}`);
// console.log(addresses)

console.log(newArrayOfObjects(users))
// console.log(newArrayOfObjects('users'))
// console.log(newArrayOfObjects(['users']))
// console.log(newArrayOfObjects([['users']]))
const users1 = [
  {
    name: "Bob",
    age: 27,
  },

  {
    nameAndAge: ["Vasya", 19],
    address: {
      country: "Ukraine",
      city: "Kiev",
    },
    marks: [4, 4, 5, 4, 3, 4, 3, 5],
  },

  {
    name: "Monya",
    age: 15,
  },

  {
    name: "Vsevolod",
    age: 19,
    address: {
      country: "Ukraine",
      city: "Lviv",
    },
    marks: [3, 4, 5, 3, 1, 2, 4, 6],
  },
];
// console.log(checkIfHasThreeKeys(users1));
// console.log(checkIfHasStringAndNumberKeys(users1));
// getObjectWithNumAndString(users1);
