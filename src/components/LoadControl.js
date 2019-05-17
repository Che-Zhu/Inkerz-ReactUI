/*This component controls the 3D file loading. */

import React, { Component } from 'react'
import ReactFileReader from 'react-file-reader';

class LoadControl extends Component {

    state = {
        file: "",
        fileExtension: ""
    }
    handleFiles = file => {
        console.log(file.fileList[0].name.split('.').pop())
        console.log(file.base64) /* remove just for logging */
        this.setState({
            file: file.base64,
            fileExtension: file.fileList[0].name.split('.').pop()
        })

        this.props.on3DFileLoad(this.state.file, this.state.fileExtension) /*load file upstream to App.js */
    }

    render() {
        return (
            <div className="load-control">
                {/* NEEDS a function to load 3D model bound in App.js!!!! */}

                <ReactFileReader fileTypes={[".obj", ".json"]} base64={true} handleFiles={this.handleFiles}>
                    <button className="loadButton">Load 3D Model</button>
                </ReactFileReader>
            </div >
        )
    }
}

export default LoadControl
