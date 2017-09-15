import React from 'react';
import PropTypes from 'prop-types';

class WaterPlant extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      plant: this.props.plant
    }
    this.resetTimeWatered = this.resetTimeWatered.bind(this);
  }

  resetTimeWatered() {
    let tempPlant = this.state.plant;
    tempPlant.timeWatered = new Moment();
    this.setState({plant: tempPlant})
  }

  render() {

    return(
      <div>
        <button onClick={() => {this.props.plant.resetTimeWatered()}}>Water Me</button>
      </div>
    )
  }
}

WaterPlant.propTypes = {
  plant: PropTypes.object
}

export default WaterPlant;
