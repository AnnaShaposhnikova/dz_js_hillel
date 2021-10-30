const maxSpendedTime = 1000;
const trainingTime = 200;

const Astronauts = [
  {
    first_name: "Frensis Dreik",
    timeSpended: 0,
    result: "",
  },
  {
    first_name: "Henry Morgan",
    timeSpended: 0,
    result: "",
  },
  {
    first_name: "Ching Shih",
    timeSpended: 0,
    result: "",
  },
];

const arrOfPreparedAstronauts = [];
const arrOfLoosers = []; 

function astroRace(astronauts) {
  debugger
    const arrOfNotPreparedAstronaut = []; 
    const arrOfPromises = [];

  astronauts.forEach((astro) => {
    const p = trainAstro(astro);
    arrOfPromises.push(p);
  });

  Promise.allSettled(arrOfPromises).then((results) => {
  
   console.log(results)

    results.forEach((result) => {
    
      if (result.status === "fulfilled" && result.value.result === "Our hero") {
        const astro = result.value;
        arrOfPreparedAstronauts.push(astro);
      } else if(result.status === "rejected" ){ 
                
          const astro = result.reason;
            if (astro.result === "Failed one") {
                arrOfLoosers.push(astro);
            } else {
              if(astro.timeSpended < maxSpendedTime){
                arrOfNotPreparedAstronaut.push(astro);  
              }                         
            }      
        }
    })
  console.log("not prepared",arrOfNotPreparedAstronaut)
    // astroRace(arrOfNotPreparedAstronaut); 

    if (results.some((e) => e.status === 'rejected')) {
      throw new Error('One  is down....');
    }
    
    console.log("Heroes", arrOfPreparedAstronauts);
    console.log("loosers", arrOfLoosers);
  })
  .catch((e) => {
      console.log (e);    

 
//   console.log("Herros", arrOfPreparedAstronauts);
//   console.log("loosers", arrOfLoosers);
    })
}

function trainAstro(astro) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      
        console.log('setTimeout')
      if (Math.random() < 0.5) {
         
        astro.timeSpended += trainingTime;
        if (astro.timeSpended >= maxSpendedTime) {
          astro.result = "Failed one";
        }
        rej(astro);
      } else {
        astro.result = "Our hero";
        astro.timeSpended += trainingTime;
        res(astro);
      }
    }, trainingTime);
  });
}

function renderAstro(arrOfAstro, classOflabel){
  
  const labelHr = document.querySelector(classOflabel);
  const container = labelHr.nextElementSibling;
  arrOfAstro.forEach((astro) =>{
    
    const contentHr = document.createElement('div');
    contentHr.classList.add('content');
    const name = document.createElement('div');
    name.classList.add('content-name');
    name.textContent = astro.first_name;
    contentHr.append(name);
    const time = document.createElement('div');
    time.classList.add('content-time');
    time.textContent = astro.timeSpended;
    contentHr.append(time);
    container.append(contentHr);
  })  
}


astroRace(Astronauts);
setTimeout(() => {
    renderAstro(arrOfPreparedAstronauts,'.label-hr' );
    renderAstro(arrOfLoosers,'.label-loos' );
  
}, 2000);


