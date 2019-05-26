// other components import
import React, { Component } from 'react';
import Header from './components/Header'
import LoadControl from './components/LoadControl'
import ExportControl from './components/ExportControl'
import ResetControl from './components/ResetControl'
import Main3DView from './components/Main3DView'
import TextEngraving from './components/TextEngraving'
import CaseColourPicker from './components/CaseColourPicker'
import CaseSelection from './components/CaseSelection'
import SearchControl from './components/SearchControl'

class App extends Component {
    /* Constructor */
    constructor(props) {
        super(props)

        /* App state*/
        this.state = {
            chosen_engraved_text: '',
            case_search_string: '',
            chosen_case_colour: '#44557E',
            chosen_phone_case: 'iPhone-X',
            chosen_export_3d_format: '',
            chosen_3d_file_extension: '',
            displayed_3d_model_rotation_x: 0,
            displayed_3d_model_rotation_y: 0,
            displayed_3d_model_zoom_level: 20,
            available_export_3d_formats: ['OBJ', 'GLB'],
            available_case_models: ['iPhone-X', 'iPhone-8-Plus', 'iPhone-7', 'iPad-9.7', 'Galaxy-S10', 'Galaxy-S5', 'Pixel2XL'],
        }

        /* section to bind functions to local class context */
        this.update3DExportFormat = this.update3DExportFormat.bind(this)
        this.updateEngravingText = this.updateEngravingText.bind(this)
        this.updateCaseColour = this.updateCaseColour.bind(this)
        this.updateChosenCase = this.updateChosenCase.bind(this)
        this.updateChosen3DFileToLoad = this.updateChosen3DFileToLoad.bind(this)
        this.resetApp = this.resetApp.bind(this)
        this.updateSearchString = this.updateSearchString.bind(this)
        this.clearSearchString = this.clearSearchString.bind(this)
        this.updateDisplayed3DModelRotationX = this.updateDisplayed3DModelRotationX.bind(this)
        this.updateDisplayed3DModelRotationY = this.updateDisplayed3DModelRotationY.bind(this)
        this.updateDisplayed3DModelZoom = this.updateDisplayed3DModelZoom.bind(this)

    }
    /* Updates chosen_export_3d_format App state property based on return
     event target value*/
    update3DExportFormat(e) {
        this.setState({ chosen_export_3d_format: e.target.value })
    }
    /* Resets App to chosen default values (empty) */
    resetApp() {
        this.setState({
            chosen_engraved_text: '',
            case_search_string: '',
            chosen_case_colour: '#44557E',
            chosen_export_3d_format: '',
            chosen_phone_case: 'iPhone-X',
            displayed_3d_model_rotation_x: 0,
            displayed_3d_model_rotation_y: 0,
            displayed_3d_model_zoom_level: 20,
        })
    }
    // updates engraved text state property, based on return event target value
    updateEngravingText(e) {
        this.setState({ chosen_engraved_text: e.target.value })
    }
    // updates case colour state proiperty, based on return event target value
    updateCaseColour(color) {
        this.setState({ chosen_case_colour: color.hex })
    }
    // updates chose case state property, based on return event target value
    updateChosenCase(e) {
        this.setState({ chosen_phone_case: e })
    }
    // updates loaded 3D file file and extention state property, based on return event target value
    updateChosen3DFileToLoad(file, fileExtension, color) {
        this.setState({ chosen_phone_case: file })
        this.setState({ chosen_3d_file_extension: fileExtension })
        if (color === '#GGGGGG') {

        }
        else {
            this.setState({ chosen_case_colour: color })
        }
    }
    // updates case search string, based on return event target value
    updateSearchString(e) {
        this.setState({ case_search_string: e.target.value })
    }
    // clears case search string, based on return event target value
    clearSearchString(e) {
        this.setState({ case_search_string: e })
    }
    // updates 3D model rotationX values
    updateDisplayed3DModelRotationX(value) {
        this.setState({
            displayed_3d_model_rotation_x: value
        })
    }
    // updates 3D model rotationY values
    updateDisplayed3DModelRotationY(value) {
        this.setState({
            displayed_3d_model_rotation_y: value
        })
    }
    // updates 3D model Zoom values
    updateDisplayed3DModelZoom(value) {
        this.setState({
            displayed_3d_model_zoom_level: value
        })
    }

    /* App JSX render section. Works together with index.css in
     producing a layout (based on grid css*/
    render() {
        return (
            <div className="app" >
                <Header />
                <div className="top-controls">
                    <LoadControl on3DFileLoad={this.updateChosen3DFileToLoad}
                        app_states={this.state}
                    />

                    <ExportControl
                        export_3d_formats={this.state.available_export_3d_formats}
                        chosen_3d_format={this.state.chosen_export_3d_format}
                        on3DFormatSelect={this.update3DExportFormat}
                        chosen_phone_case={this.state.chosen_phone_case}
                        chosen_case_colour={this.state.chosen_case_colour}
                    // app_states={this.state}
                    />

                    <ResetControl onResetApp={this.resetApp} />

                    <SearchControl
                        searched={this.state.case_search_string}
                        onCaseSearch={this.updateSearchString}
                        onClear={this.clearSearchString} />

                </div>
                <div className="view3d">
                    <CaseSelection
                        onCaseSelect={this.updateChosenCase}
                        case_list={this.state.available_case_models}
                        searched={this.state.case_search_string}
                        onClear={this.clearSearchString}
                    />

                    <Main3DView
                        app_states={this.state}
                        onRotationXChange={this.updateDisplayed3DModelRotationX}
                        onRotationYChange={this.updateDisplayed3DModelRotationY}
                        onZoomChange={this.updateDisplayed3DModelZoom} />
                </div>
                <div className="edit-controls">
                    <TextEngraving
                        engraved={this.state.chosen_engraved_text}
                        onEngraveTextChange={this.updateEngravingText}
                    />
                    <CaseColourPicker
                        onCaseColourSelect={this.updateCaseColour}
                        updated_case_colour={this.state.chosen_case_colour}
                    />
                </div>
            </div >
        );
    }
}

/* Export App */
export default App;
