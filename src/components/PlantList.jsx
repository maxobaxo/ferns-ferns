import React from 'react';
import PropTypes from 'prop-types';

function PlantList(props) {

  return(
    <div>
      {props.plantList.map((plant, index) =>
        <Plant
          name={plant.name}
          category={plant.category}
          whenToWater={plant.whenToWater}
          lastWatered={plant.lastWatered}
          key={index}/>
      )}
    </div>
  );
}

PlantList.propTypes = {
  plantList: PropTypes.array.isRequired
}

export default PlantList;
