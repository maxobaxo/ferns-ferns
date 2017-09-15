import React from 'react';
import Plant from '../models/plant';
import PropTypes from 'prop-types';

class NewPlantForm extends React.Component {

  constructor(props) {
    super(props);
    this.addNewPlant = this.addNewPlant.bind(this);
  }

  addNewPlant(event) {
    event.preventDefault();
    const { _name, _category, _whenToWater } = this.refs;
    var waterSchedule = parseInt(_whenToWater.value);
    
    if (waterSchedule) {
      var newPlant = new Plant(_name.value, _category.value, waterSchedule);
      this.props.storePlant(newPlant);
      _name.value = "";
      _category.value = "";
      _whenToWater.value = "formTitle";
    }
  }

  render() {
    return(
      <div>
        <form onSubmit={this.addNewPlant}>
          <input id="name" ref="_name" placeholder="Name"/>
          <input id="category" ref="_category" placeholder="Category"/>
          <select defaultValue="formTitle" id="whenToWater" ref="_whenToWater" required>
            <option value="formTitle" disabled>Must be watered...</option>
            <option value="1">Every Day</option>
            <option value="2">Every Other Day</option>
            <option value="7">Once a Week</option>
          </select>
          <button type="submit">Add Plant</button>
        </form>
      </div>
    );
  }
}

NewPlantForm.propTypes = {
  storePlant: PropTypes.func
}

export default NewPlantForm;
