export class AgeOnPlanet {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy
  }

  ageOnMercury() {
    return Math.round(this.age/0.24)
  }

  ageOnVenus() {
    return Math.round(this.age/.62)
  }

  ageOnEarth() {
    return Math.round(this.age)
  }

  ageOnMars() {
    return Math.round(this.age/1.88)
  }

  ageOnJupiter() {
    return Math.round(this.age/11.86)
  }

  ageOnSaturn() {
    return Math.round(this.age/30)
  }

  ageOnUranus() {
    return Math.round(12*(this.age/84))
  }
}
