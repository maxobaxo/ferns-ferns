class Plant {
  constructor(name, category, whenToWater) {
    this.name = name;
    this.category = category;
    this.whenToWater = whenToWater;
    this.lastWatered = null;
  }
}

export default Plant;
