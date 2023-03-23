const PetDance = () =>{
    let energy = 100;
    let dance = 10;
    let string = 'I want to sleep, I have ran out of energy...'
    const Energy = () =>{
        return (energy/100) * 100;
    };
    const Dance = () => {
        return (dance/100) * 100;
    };
    const SimulateDance = () => {
        if(energy > 10){
            energy -= dance;
        }else if (energy < 10){
            string
        };
    }
    const Message = () => {
        return string;
    }
    return{
        Energy,
        Dance,
        SimulateDance,
        Message
    }
}