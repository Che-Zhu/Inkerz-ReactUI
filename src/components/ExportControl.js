/*This component controls the 3D export format selection and export action.
onChange={props.on3DFormatSelect} updates App.js chosen_export_3d_format value*/

import React from 'react';

function ExportControl(props) {
    return (
        <div className="export-control">
            <select 
            className="select-3d" 
            onChange={props.on3DFormatSelect}
            style={{backgroundImage: "url(images/select-arrow.png)",
            backgroundRepeat: 'no-repeat'}}
            >
                <option value="">Select Format</option>
                {props.export_3d_formats.map((format) => (
                    <option key={format} value={format} >.{format}</option>
                ))}
            </select>
            {/* NEEDS a function to export 3D model bound in App.js!!!! */}
            <button className="exportButton">Export 3D Model</button>
        </div>
    )
}

export default ExportControl
