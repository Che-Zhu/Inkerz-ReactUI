/* This componenet resets all the relevant values modified by the user
reseting the modifiable values in App.js (states) */

import React from 'react';

function ResetControl(props) {
    return (

        <div className="reset-control">
            <button className="resetButton" onClick={props.onResetApp} style={{backgroundImage: "url(images/reset-logo.png)",backgroundRepeat: 'no-repeat'}}>Reset</button>
        </div>
    )
}

export default ResetControl
