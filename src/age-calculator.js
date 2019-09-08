export class AgeOnPlanet {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }

  ageOnMercury() {
    return Math.round(this.age/0.24);
  }

  ageOnVenus() {
    return Math.round(this.age/.62);
  }

  ageOnEarth() {
    return Math.round(this.age);
  }

  ageOnMars() {
    return Math.round(this.age/1.88);
  }

  ageOnJupiter() {
    return Math.round(this.age/11.86);
  }

  ageOnSaturn() {
    return Math.round(this.age/30);
  }

  ageOnUranus() {
    return Math.round(12*(this.age/84));
  }

  timeLeftOnMercury() {
    const mercuryAge = Math.round(this.age/0.24);
    return (Math.round(this.lifeExpectancy/0.24)-mercuryAge);
  }

  timeLeftOnVenus() {
    const venusAge = Math.round(this.age/0.62);
    return (Math.round(this.lifeExpectancy/0.62)-venusAge);
  }

  timeLeftOnEarth() {
    return this.lifeExpectancy-this.age;
  }
}
