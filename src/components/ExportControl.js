/*This component controls the 3D export format selection and export action.
onChange={props.on3DFormatSelect} updates App.js chosen_export_3d_format value*/

/* Does not work properly !!!, needs rework*/

import React from 'react';
import { saveAs } from 'file-saver';

class ExportControl extends React.Component {

    dataURItoObjectSaveFile(dataURI) {
        /* convert the object data URI to blob (file object)
            this is a file decoder, taking the URI (wuthout type preamble) and reading the 
            string part of it to converty the String Buffer into byteString. 
            It is then converted back to blob (object) and saved
            ref: https://stackoverflow.com/questions/38263325/convert-url-to-file-object-with-javascript */
        const byteString = atob(dataURI.split(',')[1]);
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([ia], { autoBom: true });
        const file = new File([blob], "export.obj");
        saveAs(file);
    }

    clickHandler() {
        // is user selected object (.obj) export file
        if (this.props.chosen_3d_format === "OBJ")
            // if file is a base64 stream (DataURI ecoded)
            if (this.props.chosen_phone_case.indexOf("base64") > 0) {
                //we convert it back to object (blob) and save
                this.dataURItoObjectSaveFile(this.props.chosen_phone_case)
            }
            else {
                /* if user did not upload the file, we have loaded it from server.
                This is a security problem/browser restriction */
                alert("Unable to export a local .obj file from server.\nPlease load the file from your disk!")

            }
        else {
            // if the user selected format is not supported, alert!
            alert("You have either not slected an export format\nor selected format is currently experimental\nand not supported!")
        }
    }

    render() {
        return (
            <div className="export-control">
                <select className="select-3d" onChange={this.props.on3DFormatSelect} style={{backgroundImage: "url(images/select-arrow.png)",
            backgroundRepeat: 'no-repeat'}}>
                    <option value="">Select Format</option>
                    {this.props.export_3d_formats.map((format) => (
                        <option key={format} value={format} >.{format}</option>
                    ))}
                </select>
                {/* function to export 3D model, call local function*/}
                <button ref="download" className="exportButton" onClick={() => this.clickHandler()}>Export 3D Model</button>
            </div>
        )
    }
}

export default ExportControl
