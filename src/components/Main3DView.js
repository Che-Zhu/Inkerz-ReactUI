import React from 'react';
import DemoScene from './DemoScene';

class Main3DView extends React.Component {
    constructor(props) {
        super(props)

        /* App state*/
        this.state = {
            // caseColor: this.props.app_states.chosen_case_colour,
            caseSize: 20,
            rotationX: 0,
            rotationY: 0,
            // PhoneCase: "iPhone X",
        }
    }

    changeSize() {
        let value = document.getElementById("caseSizeRange").value
        this.setState({ caseSize: value })
    }

    changeRotationX() {
        let value = document.getElementById("rotationXRange").value
        this.setState({ rotationX: value })
    }

    changeRotationY() {
        let value = document.getElementById("rotationYRange").value
        this.setState({ rotationY: value })
    }

    render() {
        // this.state.caseColor = this.props.app_states.chosen_case_colour
        // this.state.PhoneCase = this.props.app_states.chosen_phone_case

        return (
            <div className="main3D">
            <br></br>
                <div className="fileViewerLine">
                <div className="caseSize">

                <p className="whiteText">

                    Z<br />
                    O<br />
                    O<br />
                    M<br />
                </p>

                <div className="rangeDiv">
                     <input type="range" id="caseSizeRange" min="1" max="50" step="1" defaultValue="20" onChange={() => this.changeSize()} />
                </div>
                </div>
                    <div className="fileViewer" style={{backgroundImage: "url(images/model-background.png)",backgroundRepeat: 'no-repeat'}}>

                        <DemoScene
                            // chosenCaseColor={this.state.caseColor}
                            chosenCaseColor={this.props.app_states.chosen_case_colour}
                            chosenCaseSize={this.state.caseSize}
                            chosenRotationX={this.state.rotationX}
                            chosenRotationY={this.state.rotationY}
                            // chosenPhoneCase={this.state.PhoneCase}
                            chosenPhoneCase={this.props.app_states.chosen_phone_case}
                        />
                    </div>

                    <div className="rotationX">

                    <div className="rangeDiv">
                        <input type="range" id="rotationXRange" min="-3" max="3" step="0.1" defaultValue="0" onChange={() => this.changeRotationX()} />
                    </div>
                    <p className="whiteText">

                        R<br />
                        O<br />
                        T<br />
                        A<br />
                        T<br />
                        E<br />
                    </p>
                </div>
                    
                </div>

                <div className="rotationY">
                <input type="range" id="rotationYRange" min="-3" max="3" step="0.1" defaultValue="0" onChange={() => this.changeRotationY()}></input>

                <p className="whiteText">ROTATE</p>
                </div>

            </div>
        );
    }
}

export default Main3DView
