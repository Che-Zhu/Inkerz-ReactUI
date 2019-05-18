/*This component controls the 3D export format selection and export action.
onChange={props.on3DFormatSelect} updates App.js chosen_export_3d_format value*/

import React from 'react';
import { saveAs } from 'file-saver';

class ExportControl extends React.Component {
    constructor(props) {
        super(props);
    }
    clickHandler() {
        var FileSaver = require('file-saver');
        console.log(this.props.app_states.chosen_phone_case)
        var file = new File([this.props.app_states.chosen_phone_case], "exported.obj", {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(file);
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
                {/* NEEDS a function to export 3D model bound in App.js!!!! */}
                <button ref="download" className="button-3d" onClick={() => this.clickHandler()}>Export 3D Model</button>
            </div>
        )
    }
}

export default ExportControl