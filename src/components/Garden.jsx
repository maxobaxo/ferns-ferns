import React from 'react';
import NewPlantForm from './NewPlantForm';

class Garden extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NewPlantForm/>
      </div>
    )
  }
}

export default Garden;
