import React from 'react';
import PropTypes from 'prop-types';

class Plant extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
        <h4>{this.props.name} ({this.props.category})</h4>
        <p>Must be watered every {this.props.whenToWater} day(s)</p>
        <p>This plant was last watered {this.props.timeSinceWatered} ago [{this.props.timeWatered}]</p>
      </div>
    );
  }
}

Plant.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  whenToWater: PropTypes.number.isRequired,
  timeWatered: PropTypes.string,
  timeSinceWatered: PropTypes.string,
  addWater: PropTypes.func,
}

export default Plant;
