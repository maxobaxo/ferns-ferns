import React from 'react';
import NewPlantForm from './NewPlantForm';
import PlantList from './PlantList';

class Garden extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPlantList: [],
    }
    this.receiveNewPlant = this.receiveNewPlant.bind(this);
    this.resetTimeWatered = this.resetTimeWatered.bind(this);
  }

  componentDidMount() {
    this.timeSinceWateredChecker = setInterval(() =>
      this.updatePlantTimeSinceWatered(),
      5000
    );
  }

  componentWillUnMount() {
    clearInterval(this.timeSinceWateredChecker);
  }

  resetTimeWatered(plant) {
    let tempPlantList = this.state.masterPlantList.slice();
    for (var i = 0; i < tempPlantList.length; i++) {
      console.log(plant);
    }
  }

  updatePlantTimeSinceWatered() {
    let tempPlantList = this.state.masterPlantList.slice();
    tempPlantList.forEach((plant) => {
      plant.setTimeSinceWatered()
    });
    this.setState({masterPlantList: tempPlantList});
  }

  receiveNewPlant(newPlant) {
    let tempPlantList = this.state.masterPlantList.slice();
    tempPlantList.push(newPlant);
    this.setState({masterPlantList: tempPlantList});
  }

  render() {
    return (
      <div>
        <NewPlantForm storePlant={this.receiveNewPlant}/>
        <PlantList
          plantList={this.state.masterPlantList}
          waterPlant={this.resetTimeWatered}/>
      </div>
    )
  }
}

export default Garden;
