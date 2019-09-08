import { AgeOnPlanet } from './../src/age-calculator.js';

describe('AgeOnPlanet', function() {

  it('should test whether the AgeOnPlanet class contains the key value pair of Mercury = .24', function() {
    let age = new AgeOnPlanet(30);
    expect(age.ageOnMercury()).toEqual(125)
  });
});
