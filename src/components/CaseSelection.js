import React from 'react';
//card view is based on this sample
//https://medium.com/flexbox-and-grids/how-to-create-horizontally-scrollable-sections-with-flexbox-60d860f539b2

function CaseSelection(props) {
    const os = props.app_states.chosen_phone_os;
    const model = props.app_states.chosen_phone_model;
    var caseList;
    var casesAvailable;

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

    //get number of elements in array
    casesAvailable = caseList.length

    var divisions = [];

    //loop build elements function
    for (var i = 0; i < casesAvailable; i++) {
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
        <section class="card">
            {divisions}
        </section>
        </>
        //<p>{casesAvailable} cases available (page {currentPageNumber} of {numberOfPages}({currentPageCases} this page))</p>
    )
}

export default CaseSelection
