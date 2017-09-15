import React from 'react';
import PropTypes from 'prop-types';

function Plant(props) {

  return(
    <div>
      <h4>{props.name}</h4>
      <p>{props.category}</p>
      <ul>
        <li>Must be watered every {props.whenToWater} day(s)</li>
      </ul>
    </div>
  );
}

Plant.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  whenToWater: PropTypes.number.isRequired,
}

export default Plant;
