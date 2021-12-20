function User(name){
    this.name = name,
    this.age =18,
    this.sayHi = function(){
        console.log(`from  user ${this.name}`)
    }
}

const vasya = new User();

const sayHello = vasya.sayHi;

// const irina = new User('Irina');
const irina = {
    name:'Irina'
}

// vasya.sayHi();
// irina.sayHi();

// sayHello(); 
irina.sayHi = sayHello;
irina.sayHi();