import React from 'react';

function NewPlantForm(props) {

  return(
    <div>
      <form>
        <input placeholder="Name"/>
        <input placeholder="Description"/>
        <input placeholder="Category"/>
        <select>
          <option value="1">Every Day</option>
          <option value="2">Every Other Day</option>
          <option value="7">Once a Week</option>
        </select>
        <button type="submit" class="btn">Add Plant</button>
      </form>
    </div>
  )
}

export default NewPlantForm;
