/*This component embeds the colour wheen into the page (color-picker module). 
onChangeComplete={props.onCaseColourSelect} updates the chosen_case_colour state*/

import React from 'react';
import { SketchPicker } from 'react-color'

function CaseColourPicker(props) {
    return (
        <div>
            {/* Colour Picker section */}
            <p>Pick Case Colour: </p>
            <SketchPicker
                disableAlpha={true}
                width={190}
                color={props.updated_case_colour}
                onChangeComplete={props.onCaseColourSelect} /* updated App.js state of chosen_case_colour */
            />
        </div>
    )
}

export default CaseColourPicker