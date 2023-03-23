const PetDrinks = () =>{
    let PetEnergy = PetDance();
    let Energy = PetEnergy.Energy();
    let Thirst = 100;
    let drink = 5;

    const Thirsty = () =>{
        return (Thirst/100) * 100;
    };

    return {
        Thirsty
    }

};