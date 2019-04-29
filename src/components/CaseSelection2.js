import React, { Component } from 'react';

class CaseSelection2 extends Component {
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
        this.setState({
            /* load the caseList with all cases (from parent App) */
            // caseList: this.props.app_states.available_case_models
            caseList: []
        });
        /* focus on seach button when componenet loaded */
        this.refs.search.focus();
    }

    /* handles changes when user types the search */
    handleChange() {
        /* first, reset the state to starting point before filtering
        this is important when searchString is being deleted (back space) */
        this.setState({
            caseList: this.props.app_states.available_case_models
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
                /* if there is no search term typed, reset to original list of cases */
                return {
                    // caseList: this.props.app_states.available_case_models
                    caseList: []
                }
            }
        })
    }
    /* reset the search String */
    resetSearch() {
        this.setState({
            searchString: '',
            // caseList: this.props.app_states.available_case_models
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
                    {/* caseList - show cases with background photo and button name/value*/}
                </div>
                {
                    this.state.caseList.map((phone_case) => (
                        <button className="displayCaseButton"
                            key={phone_case}
                            style={{ backgroundImage: `url(images/${phone_case}.png)` }}
                            value={phone_case}
                            // onClick={this.props.onCaseSelect}>
                            onClick={() => { this.props.onCaseSelect(phone_case); this.resetSearch() }}>
                            <p>{phone_case}</p>
                        </button>
                    ))
                }
            </div >
        )
    }
}

export default CaseSelection2
