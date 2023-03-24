describe('Testing the Tamagotchi EAT Routine', ()=>{
    it('When the PET is fed , the HUNGER bar should decrease', ()=>{
        let pet_eats = PetFeeds()
        pet_eats.SimulateFeed()
        assert.equal(80, pet_eats.SimulateFeed())
    })
})