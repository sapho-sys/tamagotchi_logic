const PetDrinks = () =>{
    let Thirst = 100;
    let drink = 5;

    let string = 'I am Thristy , can I have some Juice'

    const Thirsty = () =>{
        return (Thirst/100) * 100;
    };

    const SimulateDrink = () =>{
        return Thirst <= 90 ? Thirst += drink : Message();
    }

    const Message = () =>{
        return  Thirst <= 90 ? string : "I am not thirsty";
    }

    return {
        Thirsty,
        Message,
        SimulateDrink
    }

};