// Сеть фастфудов предлагает несколько видов гамбургеров:

//     маленький (50 тугриков, 20 калорий)
//     средний (75 тугриковб 30 каллорий)
//     большой (100 тугриков, 40 калорий)

// Гамбургер может быть с одним из нескольких видов начинок:

//     сыром (+ 10 тугриков, + 20 калорий)
//     салатом (+ 20 тугриков, + 5 калорий)
//     картофелем (+ 15 тугриков, + 10 калорий)
//     посыпать приправой (+ 15 тугриков, 0 калорий)
//     полить майонезом (+ 20 тугриков, + 5 калорий).

// При этом начинок можно добавить несколько или не быть совсем

// Напишите программу, расчитывающую стоимость и калорийность гамбургера. 
// Используй ООП подход (подсказка: нужен класс Гамбургер, статические константы,
//   методы для выбора опций и рассчета нужных величин).



class Hamburger {
  size;
  topping = [];
 
  static SIZE_SMALL = {
    price: 50,
    callories: 20,
  };

  static SIZE_MIDDLE = {
    price: 75,
    callories: 30,
  };
  
  static SIZE_BIG = {
    price: 100,
    callories: 40,
  };
 
  static TOPPING_CHEESE = {
    price: 10,
    callories: 20,
  };

  static TOPPING_SALAD = {
    price: 20,
    callories: 5,
  };

  static TOPPING_POTATO = {
    price: 15,
    callories: 10,
  };

  static TOPPING_SPICE = {
    price: 15,
    callories: 0,
  };

  static TOPPING_MAYO = {
    price: 20,
    callories: 5,
  };

  constructor(size){

    this.size = size;
  }

  addTopping (topping) {
    this.topping.push(topping);
  }

  getPrice(){  
    let price = this.size.price;
    this.topping.forEach(element => {
      price += element.price;      
    });
    return price;
  }

   getCallories(){
    let callories = this.size.callories;
    this.topping.forEach(element => {
       callories += element.callories;      
    });
     return callories;
   }
}

const hamburger = new Hamburger(Hamburger.SIZE_BIG);
hamburger.addTopping(Hamburger.TOPPING_POTATO);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
console.log("Price with sause: " + hamburger.getPrice());
console.log("Callories with sauce: " + hamburger.getCallories());
// console.log(hamburger.topping);