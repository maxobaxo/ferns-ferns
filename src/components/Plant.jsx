import React from 'react';
import PropTypes from 'prop-types';
import WaterPlant from './WaterPlan';

function Plant(props) {

    return(
      <div>
        <h4>{props.name} ({props.category})</h4>
        <p>Must be watered every {props.whenToWater} day(s)</p>
        <p>This plant was last watered {props.timeSinceWatered} ago [{props.timeWatered}]</p>
        <WaterPlant/>
      </div>
    );
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
