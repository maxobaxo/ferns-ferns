import React from 'react';
import Plant from '../models/plant';
import PropTypes from 'prop-types';
import { FormGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

class NewPlantForm extends React.Component {

  constructor(props) {
    super(props);
    this.addNewPlant = this.addNewPlant.bind(this);
  }

  addNewPlant(event) {
    event.preventDefault();
    const { _name, _category, _whenToWater } = this.refs;
    console.log(_name.value);
    console.log(_category.value);
    console.log(_whenToWater.value);
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
    var formInputStyles = {
      borderRadius: 5,
      margin: 10,
    }
    var buttonStyle = {
      marginLeft: 10,
    }

    return(
      <div className="well">
        <Form inline onSubmit={this.addNewPlant}>
          <input style={formInputStyles} id="name" ref="_name" placeholder="Name"/>
          <input style={formInputStyles} id="category" ref="_category" placeholder="Category"/>
            <select defaultValue="formTitle" id="whenToWater" ref="_whenToWater" required>
              <option disabled value="formTitle">Select Water Schedule</option>
              <option value="2">Every Other Day</option>
              <option value="4">Every Four Days</option>
              <option value="7">Every Week</option>
            </select>
          <Button style={buttonStyle} type="submit">Add Plant</Button>
        </Form>

      </div>
    );
  }
}

NewPlantForm.propTypes = {
  storePlant: PropTypes.func
}

export default NewPlantForm;
