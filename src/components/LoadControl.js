/*This component controls the 3D file loading. */

import React, { Component } from 'react'
import ReactFileReader from 'react-file-reader';

class LoadControl extends Component {
    state = {
        file : ""
      }
    handleFiles = files => {
        console.log(files.base64)  //This is  base64 token of the file user uploaded, you can think it as a binary file
        //DataFor3DView = files.base64  //The value of this variable needs to be passed to Main3DView.js
      }

render() {
    return (
        <div className="load-control">
            {/* NEEDS a function to load 3D model bound in App.js!!!! */}

        <ReactFileReader fileTypes={[".obj", ".json"]} base64={true} handleFiles={this.handleFiles}>
            <button className="button-3d">Load 3D Model</button>
        </ReactFileReader>
            
        </div >
    )
}
}

export default LoadControl