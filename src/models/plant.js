import Moment from 'moment';

class Plant {
  constructor(name, category, whenToWater) {
    this.name = name;
    this.category = category;
    this.whenToWater = whenToWater;
    this.timeWatered = new Moment();
    this.timeWateredStr = this.timeWatered.format('dddd, MMMM Do, h:mm:ss a');
    this.timeSinceWatered = "a few seconds";
  }

  setTimeSinceWatered() {
    this.timeSinceWatered = this.timeWatered.fromNow(true);
  }

  resetTimeWatered() {
    this.timeWatered = new Moment();
  }

  setTimeWateredStr() {
    this.timeWateredStr = this.timeWatered.format('dddd, MMMM Do, h:mm:ss a');
  }
}

export default Plant;
