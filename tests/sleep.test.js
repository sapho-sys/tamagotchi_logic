
describe('Testing the Tamagotchi Sleep Routine', ()=>{
    it('The pet should be able to SLEEP and get some rest, the ENERGY bar should increase from default 100% to 150%', ()=>{
      let pet_nap = PetSleeps()
      pet_nap.SimulateSleep();
      assert.equal(150, pet_nap.UpEnergy())
    })
})