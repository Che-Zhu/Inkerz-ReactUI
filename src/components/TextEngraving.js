import React from 'react';

function TextEngraving(props) {
    return (
        <div>
            <div>
                <label htmlFor="text-to-engrave">
                    <p>What to engrave into case?</p>
                </label>
                <input
                    id="text-to-engrave"
                    onChange={props.onEngraveTextChange}
                    value={props.engraved} placeholder="Text to Engrave"
                />
            </div>
        </div>
    )

}

export default TextEngraving