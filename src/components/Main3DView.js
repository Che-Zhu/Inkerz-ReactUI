/*This compoinent is main ThreeJS viewer, displaying the 3D model and
updating any changes to said model */

import React from 'react';

function Main3DView(props) {
    return (
        <div>
            <p>Integrate Three.js Viewer TBA!</p>
            <p>Application State Checker (Troubleshooting/Remove in Final!)</p>
            <p>Chosen Engraved Text: {props.app_states.chosen_engraved_text}</p>
            <p>Chosen Case Colour: {props.app_states.chosen_case_colour}</p>
            <p>Chosen Phone Case: {props.app_states.chosen_phone_case}</p>
            <p>Chosen Save 3D Format: {props.app_states.chosen_export_3d_format}</p>

        </div>
    )

}

export default Main3DView