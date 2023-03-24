const PetFeeds = () =>{
    let Hunger = 90;
    let Feed = 5;
    let string = 'I am full';
    const Feeding = () =>{
        return (Hunger/100) * 100;
    }

    const SimulateFeed = () =>{
        return Hunger <= 90 ? Hunger -= Feed : string
    }

    const PetFed = () =>{
        return Hunger;
    }

    return {
        Feeding,
        SimulateFeed,
        PetFed
    }
}