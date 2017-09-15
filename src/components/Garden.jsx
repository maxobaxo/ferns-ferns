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
          plantList={this.state.masterPlantList}/>
      </div>
    )
  }
}

export default Garden;
