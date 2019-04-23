import React from 'react';
import { SketchPicker } from 'react-color'

  function CaseColourPicker(props) {
    const handleColorChange = ({ hex }) => console.log(hex)

    return (
      <div>
          <p>Pick Case Colour: </p>
        <SketchPicker
          color="#4A90E2"
          onChangeComplete={ handleColorChange }
        />
      </div>
    )
  }

export default CaseColourPicker
