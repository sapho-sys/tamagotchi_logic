const PetSleeps = () =>{
    let importedEnergy = PetDance();
    let energy = importedEnergy.Energy();
    let sleep = 50;

    let string = 'I want to sleep, I need some rest'
    const Sleep = ()=>{
        return (sleep/100) * 100;
    }
    const SimulateSleep = () =>{
        return energy > 40 ? "I am not tired" : energy < 40 ? energy += sleep : string; 
    }
    return {
        SimulateSleep,
        Sleep
    }
}