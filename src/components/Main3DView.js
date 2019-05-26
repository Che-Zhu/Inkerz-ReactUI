/* This compoenet (a class) is used as wrapping control section for rotation
and zooming 3D object controls.

It paseses the required states from App.js to DemoScene.js (component)
to render the 3D object

*/

import React from 'react';
import DemoScene from './DemoScene';

class Main3DView extends React.Component {

    changeSize() {
        let value = document.getElementById("caseSizeRange").value
        this.props.onZoomChange(value)
    }

    changeRotationX() {
        let value = document.getElementById("rotationXRange").value
        this.props.onRotationXChange(value)
    }

    changeRotationY() {
        let value = document.getElementById("rotationYRange").value
        this.props.onRotationYChange(value)
    }

    render() {
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
                            <input type="range" id="caseSizeRange" min="1" max="50" step="1" value={this.props.app_states.displayed_3d_model_zoom_level} onChange={() => this.changeSize()} />
                        </div>
                    </div>
                    <div className="fileViewer" style={{ backgroundImage: "url(images/model-background.png)", backgroundRepeat: 'no-repeat' }}>

                        <DemoScene
                            chosenCaseColor={this.props.app_states.chosen_case_colour}
                            chosenCaseSize={this.props.app_states.displayed_3d_model_zoom_level}
                            chosenRotationX={this.props.app_states.displayed_3d_model_rotation_x}
                            chosenRotationY={this.props.app_states.displayed_3d_model_rotation_y}
                            chosenPhoneCase={this.props.app_states.chosen_phone_case}
                        />
                    </div>

                    <div className="rotationX">

                        <div className="rangeDiv">
                            <input type="range" id="rotationXRange" min="-3" max="3" step="0.1" value={this.props.app_states.displayed_3d_model_rotation_x} onChange={() => this.changeRotationX()} />
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
                    <input type="range" id="rotationYRange" min="-3" max="3" step="0.1" value={this.props.app_states.displayed_3d_model_rotation_y} onChange={() => this.changeRotationY()}></input>

                    <p className="whiteText">ROTATE</p>
                </div>

            </div>
        );
    }
}

export default Main3DView
