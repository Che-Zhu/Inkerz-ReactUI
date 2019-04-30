/*This component controls the 3D file loading. */

import React from 'react';

function LoadControl(props) {
    return (
        <div className="load-control">
            {/* NEEDS a function to load 3D model bound in App.js!!!! */}
            <button className="button-3d">Load 3D Model</button>
        </div >
    )
}

export default LoadControl