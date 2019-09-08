import { AgeOnPlanet } from './../src/age-calculator.js';

describe('AgeOnPlanet', function() {
  let age;

  beforeEach(function() {
    age = new AgeOnPlanet(30);
  });

  it('should test the ageOnMercury prototype', function() {
    expect(age.ageOnMercury()).toEqual(125)
  });
});
