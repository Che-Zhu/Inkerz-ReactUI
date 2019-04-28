import React from 'react';

function PhoneSelection(props) {
    return (
        <div>
            <div>
                <p>Select Device OS:</p>
                {props.phone_makes.map((make_button) => (
                    <button
                        key={make_button}
                        style={{
                            backgroundImage: `url(images/${make_button}.png)`
                        }}
                        value={make_button}
                        className="button-phone-make"
                        onClick={props.onPhoneMakeSelect} >
                    </button>
                ))}
            </div>
            <div>
                <p>Select Model:</p>
                <select size="5" onChange={props.onPhoneModelSelect}>
                    {props.chosen_model_list.map((phone) => (
                        <option key={phone} value={phone} >{phone}</option>
                    ))}
                </select>
            </div>
        </div>
    )

}

export default PhoneSelection