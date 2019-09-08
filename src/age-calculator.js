export class AgeOnPlanet {
  constructor(age) {
    this.age = age;
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
}
