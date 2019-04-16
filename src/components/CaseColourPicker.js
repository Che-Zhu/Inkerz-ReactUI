import React from 'react';

function CaseColourPicker(props) {
    return (
        <div>
            <p>Pick Case Colour:</p>
            {props.phone_case_colours.map((case_colour) => (
                <button
                    key={case_colour}
                    style={{
                        backgroundColor: case_colour
                    }}
                    value={case_colour}
                    className="button-phone-case-colour"
                    onClick={props.onCaseColourSelect} >
                </button>
            ))}
        </div>
    )

}

export default CaseColourPicker