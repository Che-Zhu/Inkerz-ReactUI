import React from 'react';
//card view is based on this sample
//https://medium.com/flexbox-and-grids/how-to-create-horizontally-scrollable-sections-with-flexbox-60d860f539b2

function CaseSelection(props) {
    let os = props.app_states.chosen_phone_os;
    let model = props.app_states.chosen_phone_model;
    let caseList;

    //check os version iOS or Android
    if (os === "iOS") {
        //check device model
        if (model === "iPhone6") {
            caseList = props.app_states.available_iPhone6_cases
        } else if (model === "iPad2") {
            caseList = props.app_states.available_iPad2_cases
        } else {
            //connect all device model arrays together if no device model is selected
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
        //if neither os is selected then display all cases
        caseList = props.app_states.available_case_models
    }

    return (
        <div>
            <div>Search for: <input type="text" placeholder="example: iphone"></input></div>

            {
                caseList.map((phone_case) => (
                    <button className="displayCaseButton"
                        key={phone_case}
                        style={{ backgroundImage: `url(images/${phone_case}.png)` }}
                        value={phone_case}
                        onClick={props.onCaseSelect}>
                        <p>{phone_case}</p>
                    </button>
                ))
            }
        </div >

        //<p>{casesAvailable} cases available (page {currentPageNumber} of {numberOfPages}({currentPageCases} this page))</p>
    )
}

export default CaseSelection
