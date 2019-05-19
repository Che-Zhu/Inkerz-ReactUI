/*This component controls the 3D export format selection and export action.
onChange={props.on3DFormatSelect} updates App.js chosen_export_3d_format value*/

/* Does not work properly !!!, needs rework*/

import React from 'react';
import { saveAs } from 'file-saver';

class ExportControl extends React.Component {

    clickHandler() {
        // if we had the file loaded from disk as base64 stream:
        // Not properly exporting,as this would require decode the file from base 64 stream 
        // back to obj file readable by 3D editing program, basically needs byte decoder
        if (this.props.app_states.chosen_phone_case.indexOf("base64") > 0) {
            var blob = new Blob([this.props.app_states.chosen_phone_case], { autoBom: true });
            saveAs(blob, "export.obj");
        }
        else {
            // if file was loaded from disk initially, we would ider need to read the changed file from server
            // or read the base64 stream as above
            // this just shows that we can read the file name from disk
            var file = new File(['assets/' + this.props.app_states.chosen_phone_case + '.obj'], { autoBom: true });
            saveAs(file, "export.txt")
        }
    }

    render() {
        return (
            <div className="export-control">
                <select className="select-3d" onChange={this.props.on3DFormatSelect}>
                    <option value="">Select Format</option>
                    {this.props.export_3d_formats.map((format) => (
                        <option key={format} value={format} >.{format}</option>
                    ))}
                </select>
                {/* function to export 3D model, call local function*/}
                <button ref="download" className="button-3d" onClick={() => this.clickHandler()}>Export 3D Model</button>
            </div>
        )
    }
}

export default ExportControl