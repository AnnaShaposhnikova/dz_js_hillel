const maxSpendedTime = 100;
const trainingTime= 20;

const Astronauts = [
    {
        first_name: "Igor",
        timeSpended: 0,
        result: ''
    },
    {
        first_name: "Belka",
        timeSpended: 0,
        result: ''
    },
    {
        first_name: "Tereshkova",
        timeSpended: 0,
        result: ''
    }
]

function astroRace(astronauts){
    astronauts.forEach((astro,i)=> {
        training(astronauts, astro, i);           
    });
    console.log(astronauts);
}

function training(astronauts, astro, index){
    const a = new Promise((res,rej) => {
        setTimeout(()=>{
            
            if(Math.random() < 0.5) {
                astro.timeSpended += trainingTime;
                if(astro.timeSpended >= maxSpendedTime){
                    astro.result = "Failed one";

                }
                rej(astro);
            }else{
                astro.result = "Our hero";
                astro.timeSpended += trainingTime;
                res(astro)
            }
        },trainingTime)

        });
        a.then(r=>{
            astronauts[index] = r;
            // console.log('success',r)
        })
        .catch((astro) => {
            // console.log('failed', astro)
            if(astro.result === "Failed one"){
                astronauts[index] = astro;
            }else{
                training(astronauts, astro, index);
            }

        })
        .finally(r => console.log("FINALLY", Astronauts))
}

astroRace(Astronauts);