const PetSleeps = () =>{
    let importedEnergy = PetDance();
    let energy = importedEnergy.Energy();
    let sleep = 50;
    let string = 'I am hungry , can you feed me'
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
    const Message2 = () =>{
        return string;
    }
    const UpEnergy = () =>{
        return energy;

    }
    return {
       UpEnergy,
        SimulateSleep,
        Sleep,
        Message2
    }
}