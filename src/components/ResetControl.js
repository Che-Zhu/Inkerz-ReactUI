import React from 'react';

function ResetControl(props) {
    return (

        <div>
            <button className="button-3d" onClick={props.onResetApp}>Reset</button>
        </div>
    )
}

export default ResetControl