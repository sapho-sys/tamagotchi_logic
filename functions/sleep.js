const PetSleeps = () =>{
    let importedEnergy = PetDance();
    let energy = importedEnergy.Energy();
    let sleep = 50;
    const Sleep = ()=>{
        return (sleep/100) * 100;
    }
    const SimulateSleep = () =>{
        if(energy){
           energy += sleep;
        }else if( energy < 10){
            string
        }     
    }
    const UpEnergy = () =>{
        return energy;

    }
    return {
       UpEnergy,
        SimulateSleep,
        Sleep
    }
}