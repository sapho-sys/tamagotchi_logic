describe('Testing the Tamagotchi Play Routine', () =>{
    it('When the Pet PlAYS The HAPPINESS bar should increase', ()=>{
        let pet_plays = PetPlays();
        pet_plays.SimulatePlay();
        assert.equal(35, pet_plays.SimulatePlay())

    });
});