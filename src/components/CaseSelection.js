import React from 'react';
import App from '../App';

function CaseSelection(props) {
    const os = props.app_states.chosen_phone_os;
    const model = props.app_states.chosen_phone_model;
    var caseList;
    var casesAvailable;

    if (os === "iOS") {
        if (model === "iPhone6") {
             caseList = props.app_states.available_iPhone6_cases
        } else if (model === "iPad2") {
             caseList = props.app_states.available_iPad2_cases
        } else {
             caseList = props.app_states.available_iPhone6_cases.concat(props.app_states.available_iPad2_cases)
        }
    } else if (os === "Android") {
        if (model === "GalaxyS9") {
            caseList = props.app_states.available_galaxyS9_cases
        } else if (model === "GooglePixel2XL") {
            caseList = props.app_states.available_pixel2XL_cases
        } else {
            caseList = props.app_states.available_galaxyS9_cases.concat(props.app_states.available_pixel2XL_cases)
        }
    } else {
        caseList = props.app_states.available_case_models
    }

    casesAvailable = caseList.length

    
    var divisions = [];

    for (let i = 0; i < casesAvailable; i++) {
        divisions.push(
            <div className="displayCaseList">
        <button className="displayCaseButton">
        <img src={'images/'+caseList[i]+'.png'} alt="" className="displayCaseImage"/>
        </button>
            <p>{caseList[i]}</p>
        </div>
        )
    }

    return (
        <>
        <button className="previousPage">{"<"}</button>
        {divisions}
        <button className="nextPage">{">"}</button>
        </>
    )
}

export default CaseSelection
