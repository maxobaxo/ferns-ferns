import React from 'react';
import Plant from './Plant';
import PropTypes from 'prop-types';

function PlantList(props) {

  return(
    <div>
      {props.plantList.map((plant, index) =>
        <Plant
          name={plant.name}
          category={plant.category}
          whenToWater={plant.whenToWater}
          key={index}/>
      )}
    </div>
  );
}

PlantList.propTypes = {
  plantList: PropTypes.array.isRequired
}

export default PlantList;
