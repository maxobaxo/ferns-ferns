import React from 'react';
import NewPlantForm from './NewPlantForm';

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
      </div>
    )
  }
}

export default Garden;
