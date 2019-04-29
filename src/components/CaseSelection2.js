import React, { Component } from 'react';

class CaseSelection2 extends Component {

    constructor(props) {
        super(props)

        /* App state*/
        this.state = {
            caseList: this.props.app_states.available_case_models,
            searchString: ''
        }
        // console.log("os", this.os)
        this.handleChange = this.handleChange.bind(this);
        this.resetSearch = this.resetSearch.bind(this)
    }

    handleChange() {
        this.setState({
            searchString: this.refs.search.value.trim()

        })
        this.setState((currentState) => {
            if (currentState.searchString.length > 0) {
                return {
                    caseList: currentState.caseList.filter((phone_case) => phone_case.includes(currentState.searchString))
                }
            }
            else {
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
