


const maxSpendedTime = 1000;
const trainingTime = 200;
const Hero = "Our hero";
const Looser = "Looser"

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
  const heroes = [];
  const loosers = [];


function trainingAstro(astro) {
  
    if(Math.random() > 0.7){
      astro.timeSpended += trainingTime;
      astro.result = Hero;
    }else{
      astro.timeSpended += trainingTime;
      if(astro.timeSpended > maxSpendedTime){
        astro.result = Looser;       
      }else{
        trainingAstro(astro);
      }     
    }
    console.log(astro);
    return astro;      
}

function astroRace(astronauts){
 astronauts.forEach((astro) => {
   trainingAstro(astro);
   if(astro.result === Hero){
     heroes.push(astro);
   }else{
     loosers.push(astro);
   }
 })
 renderAstro(heroes, '.label-hr');
  renderAstro(loosers, '.label-loos')

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

