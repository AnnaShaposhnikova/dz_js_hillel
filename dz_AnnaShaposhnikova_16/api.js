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
  // debugger

  const arrOfPromises = [];

  astronauts.forEach((astro, index) => {
    const p = trainingAstro(astro, index);
    arrOfPromises.push(p);
  });

  Promise.allSettled(arrOfPromises)
    .then((results) => {
      console.log(results);

      if (results.some((e) => e.status === "rejected")) {
        throw new Error("One  is down....");
      }

      renderAstro(arrOfPreparedAstronauts, ".label-hr");
  renderAstro(arrOfLoosers, ".label-loos");
    })
    .catch((e) => {
      console.log(e);
    });
}

function trainingAstro(astro, index) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
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
  })
    .then((astro) => {
 
      console.log(astro, index);
      if (astro.result === "Our hero") {
          arrOfPreparedAstronauts.push(astro);
          return astro;
      }
   
   })
   .catch((astro)=>{
      if(astro.result === "Failed one"){
        arrOfLoosers.push(astro);
        return astro;
      }
      if (astro.timeSpended < maxSpendedTime) {
        return trainingAstro(astro, index);
      }
   })  
}

function renderAstro(arrOfAstro, classOflabel) {
  const labelHr = document.querySelector(classOflabel);
  const container = labelHr.nextElementSibling;
  arrOfAstro.forEach((astro) => {
    const contentHr = document.createElement("div");
    contentHr.classList.add("content");
    const name = document.createElement("div");
    name.classList.add("content-name");
    name.textContent = astro.first_name;
    contentHr.append(name);
    const time = document.createElement("div");
    time.classList.add("content-time");
    time.textContent = astro.timeSpended;
    contentHr.append(time);
    container.append(contentHr);
  });
}

astroRace(Astronauts);

