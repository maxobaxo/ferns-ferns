import React from 'react';
import Plant from '../models/plant';

class NewPlantForm extends React.Component {

  constructor(props) {
    super(props);
    this.addNewPlant = this.addNewPlant.bind(this);
  }

  addNewPlant(event) {
    event.preventDefault();
    const { _name, _description, _category, _whenToWater } = this.refs;
    var newPlant = new Plant(_name.value, _description.value, _category.value, _whenToWater.value);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.addNewPlant}>
          <input id="name" ref="_name" placeholder="Name"/>
          <input id="description" ref="_description" placeholder="Description"/>
          <input id="category" ref="_category" placeholder="Category"/>
          <select id="whenToWater" ref="_whenToWater">
            <option value="1">Every Day</option>
            <option value="2">Every Other Day</option>
            <option value="7">Once a Week</option>
          </select>
          <button type="submit" class="btn">Add Plant</button>
        </form>
      </div>
    );
  }
}

export default NewPlantForm;
