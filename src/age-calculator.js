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
}
