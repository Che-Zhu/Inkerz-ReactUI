/*This component controls the 3D file loading. */

import React, { Component } from 'react'
import ReactFileReader from 'react-file-reader';

class LoadControl extends Component {

    state = {
        file: ""
    }
    handleFiles = file => {
        console.log(file.base64) /* remove just for logging */
        this.setState({
            file: file.base64
        })

        this.props.on3DFileLoad(this.state.file) /*load file upstream to App.js */
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