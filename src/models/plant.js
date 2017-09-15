import Moment from 'moment';

class Plant {
  constructor(name, category, whenToWater) {
    this.name = name;
    this.category = category;
    this.whenToWater = whenToWater;
    this.timeWatered = new Moment();
    this.timeSinceWatered = "a few seconds";
  }

  setTimeSinceWatered() {
    this.timeSinceWatered = this.timeWatered.fromNow(true);
  }
}

export default Plant;
