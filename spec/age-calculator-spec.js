import { AgeOnPlanet } from './../src/age-calculator.js';

describe('AgeOnPlanet', function() {
  let age;

  beforeEach(function() {
    age = new AgeOnPlanet(30, 80);
  });

  it('should test the ageOnMercury prototype', function() {
    expect(age.ageOnMercury()).toEqual(125)
  });

  it('should test the ageOnVenus prototype', function() {
    expect(age.ageOnVenus()).toEqual(48)
  });

  it('should test the ageOnEarth prototype', function() {
    expect(age.ageOnEarth()).toEqual(30)
  });

  it('should test the ageOnMars prototype', function() {
    expect(age.ageOnMars()).toEqual(16)
  });

  it('should test the ageOnJupiter prototype', function() {
    expect(age.ageOnJupiter()).toEqual(3)
  });

  it('should test the ageOnSaturn prototype', function() {
    expect(age.ageOnSaturn()).toEqual(1)
  });

  it('should test the ageOnUranus prototype', function() {
    expect(age.ageOnUranus()).toEqual(4)
  });

  it('should test the timeLeftOnMercury prototype', function() {
    expect(age.timeLeftOnMercury()).toEqual(208)
  });

  it('should test the timeLeftOnVenus prototype', function() {
    expect(age.timeLeftOnVenus()).toEqual(81)
  });

  it('should test the timeLeftOnEarth prototype', function() {
    expect(age.timeLeftOnEarth()).toEqual(50)
  });

  it('should test the timeLeftOnMars prototype', function() {
    expect(age.timeLeftOnMars()).toEqual(27)
  });

  it('should test the timeLeftOnJupiter prototype', function() {
    expect(age.timeLeftOnJupiter()).toEqual(4)
  });
});
