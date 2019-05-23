/* This compoenet (a class) uses case list (available_case_models)
from App.js in building a searchable text input, for user to find
a case to model.

It uses states to manipulate case list array, for showing and filtering.

this.props.onCaseSelect(phone_case) function updates the chosen_phone_case
property in App.js (state)

*/

import React, { Component } from 'react';

class CaseSelection extends Component {
    /*class constructor */
    constructor(props) {
        super(props)

        /* App state*/
        this.state = {
            caseList: this.props.case_list,
            searchString: ''
        }
    }
    
    render() {
        return (
            <div>
                {/* caseList - show/renders cases with background photo and button name/value*/}
                {
                this.props.case_list.filter((phone_case) => phone_case.toLowerCase().includes(this.props.searched.toLowerCase())).map((phone_case) => (
                    <button className="displayCaseButton"
                    key={phone_case}
                    value={phone_case}
                    onClick={() => {this.props.onCaseSelect(phone_case); this.props.onClear("")}}>
                    <div className="cardBox">
                        <div className="card">
                            <div className="card-front">
                                <img src={'images/'+phone_case+'.png'} alt="" className="displayCaseImage"/>
                            </div>
                            <div className="card-back">
                                <p>{phone_case}</p> 
                            </div>
                        </div>
                    </div>
                    </button>
                    ))
                }
            </div >
        )
    }
}

export default CaseSelection
