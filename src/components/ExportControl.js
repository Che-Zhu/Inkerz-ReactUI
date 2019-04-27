import React from 'react';

function ExportControl(props) {
    return (
        <div className="export-control">
            <select className="select-3d" onChange={props.on3DFormatSelect}>
                <option value="">Select Format</option>
                {props.export_3d_formats.map((format) => (
                    <option key={format} value={format} >.{format}</option>
                ))}
            </select>
            <button className="button-3d">Export 3D Model</button>
        </div>
    )
}

export default ExportControl