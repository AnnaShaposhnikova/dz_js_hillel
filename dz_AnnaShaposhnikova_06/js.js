const user = {

  name:'Bob',
  age: 34,
  id:1,
  address:{
      city:'Odessa',
      country:'Ukraine'
  },

  books:[
      {
          name:'red one',
          id:35,
          author: {
              name:'Some Author',
              id:277
          },
          tags:['history', 'roman']
      }
  ]
}

function copyObject(obj){

  let newObj ={};
  for (let key in obj){   
    const value = obj[key];

    if(typeof value !== "object"){

      newObj[key] = value;    
    } 

    else if(typeof value === "object" && !Array.isArray(value)){     
      
      newObj[key] = copyObject(value);
    }   
    
    else if(typeof value === "object" && Array.isArray(value)) {
      
      function newArr(arr){ 
        let newArr = [];
        for(let el of arr){
          if(typeof el !== "object"){
            newArr.push(el);
          }
          else if(typeof el === "object" && Array.isArray(el)){
            newArr.push(newArr(el));            
          }
          else if(typeof el === "object" && !Array.isArray(el)){
            newArr.push(copyObject(el));
          }                  
        }
        return newArr;
    }

    newObj[key] = newArr(value);

  }
 } 
  return newObj;
}







// const copy = copyObject(user)

// user.name = "aaa"
// user.address.city = 'errror'
// console.log(copy);
// console.log(user);
