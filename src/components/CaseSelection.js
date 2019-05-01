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
            caseList: [],
            searchString: ''
        }
        /* local function bind to class local context */
        this.handleChange = this.handleChange.bind(this);
        this.resetSearch = this.resetSearch.bind(this)
    }
    /* lifecycle stage when component loaded */
    componentDidMount() {
        /* focus on seach button when componenet loaded */
        this.refs.search.focus();
    }

    /* handles changes when user types the search */
    handleChange() {
        /* first, reset the state to starting point before filtering (load all cases)
        this is important when searchString is being deleted (back space) */
        this.setState({
            caseList: this.props.case_list
        })

        /* set state of search String to changed value from input text*/
        this.setState({
            searchString: this.refs.search.value.trim(),

        })
        /* filter current state of caseList based on seach being present,
        showing only results matching the searched letters in case name*/
        this.setState((currentState) => {
            /* we only want to action (filter results) if someting is typed in to be searched */
            if (currentState.searchString.length > 0) {
                return {
                    /* updates (filters) caseList with only array elements matching the searchString value */
                    caseList: currentState.caseList.filter((phone_case) => phone_case.includes(currentState.searchString))
                }
            }
            else {
                /* if there is no search term typed, reset to empty list (hide)*/
                return {
                    caseList: []
                }
            }
        })
    }
    /* reset the search String and case list to none (nothing to view)*/
    resetSearch() {
        this.setState({
            searchString: '',
            caseList: []
        })
    }
    /* what getrs shown in the component (render) */
    render() {

        return (
            <div>
                {/* search text field */}
                <div>
                    Search for Phone Case to Model:
                     <input type="text"
                        className="search-3d"
                        value={this.state.searchString}
                        ref="search"
                        onChange={this.handleChange}
                        placeholder="example: iphone">
                    </input>
                    <input type="button" className="button-3d" onClick={this.resetSearch} value="Clear"></input>
                    {/* caseList - show/renders cases with background photo and button name/value*/}
                </div>
                {
                    this.state.caseList.map((phone_case) => (
                        <button className="displayCaseButton"
                            key={phone_case}
                            style={{ backgroundImage: `url(images/${phone_case}.png)` }}
                            value={phone_case}
                            /* onClick both updates the case selection and resets/clears the search (hides resuts)*/
                            onClick={() => { this.props.onCaseSelect(phone_case); this.resetSearch() }}>
                            <p>{phone_case}</p>
                        </button>
                    ))
                }
            </div >
        )
    }
}

export default CaseSelection
