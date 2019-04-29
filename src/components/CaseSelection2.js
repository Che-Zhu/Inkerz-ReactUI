import React, { Component } from 'react';

class CaseSelection2 extends Component {

    constructor(props) {
        super(props)

        /* App state*/
        this.state = {
            caseList: [],
            searchString: ''
        }
        // console.log("os", this.os)
        this.handleChange = this.handleChange.bind(this);
        this.resetSearch = this.resetSearch.bind(this)
    }

    componentDidMount() {
        this.setState({
            caseList: this.props.app_states.available_case_models
        });
        this.refs.search.focus();
    }

    handleChange() {
        /* reset the state to starting point before filtering
        this is important when searchString is being deleted (back space) */
        this.setState({
            caseList: this.props.app_states.available_case_models
        })

        /* set state of search String to changed value from input text*/
        this.setState({
            searchString: this.refs.search.value.trim(),

        })
        /* filter current state of caseList based on seach being present,
        showing only results matching the letter in case name*/
        this.setState((currentState) => {
            // console.log("search_this", currentState.searchString)
            if (currentState.searchString.length > 0) {
                return {
                    caseList: currentState.caseList.filter((phone_case) => phone_case.match(currentState.searchString))
                }

            }
            else {
                /* if there is no search tern, reset to original list of cases */
                return {
                    caseList: this.props.app_states.available_case_models
                }
            }
        })
    }

    resetSearch() {
        this.setState({
            searchString: '',
            caseList: this.props.app_states.available_case_models
        })
    }

    render() {

        return (
            <div>
                {/* {this.state.searchString} */}
                <div>
                    Search for:
                    <input type="text"
                        value={this.state.searchString}
                        ref="search"
                        onChange={this.handleChange}
                        placeholder="example: iphone">
                    </input>
                    <input type="button" onClick={this.resetSearch} value="Clear"></input>
                </div>
                {
                    this.state.caseList.map((phone_case) => (
                        <button className="displayCaseButton"
                            key={phone_case}
                            style={{ backgroundImage: `url(images/${phone_case}.png)` }}
                            value={phone_case}
                            onClick={this.props.onCaseSelect}>
                            <p>{phone_case}</p>
                        </button>
                    ))
                }
            </div >

            //<p>{casesAvailable} cases available (page {currentPageNumber} of {numberOfPages}({currentPageCases} this page))</p>
        )
    }
}

export default CaseSelection2
