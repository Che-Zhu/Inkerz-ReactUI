import React from 'react';
import { SketchPicker } from 'react-color'

function CaseColourPicker(props) {
  return (
    <div>
      <p>Pick Case Colour: </p>
      <SketchPicker
        disableAlpha={true}
        width={190}
        color={props.updated_case_colour}
        onChangeComplete={props.onCaseColourSelect}
      />
    </div>
  )
}

export default CaseColourPicker
