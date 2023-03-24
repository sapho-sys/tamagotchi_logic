const PetPlays = () =>{
    let Happy = 15;
    let Play = 10;
    let string = "I don't want to play"
    const Playing = () =>{
        return (Happy/100) * 100;
    };

    const SimulatePlay = () =>{
        return Happy < 100 ? Happy += Play : string 
    };

    return {
        Playing,
        SimulatePlay
    }
}