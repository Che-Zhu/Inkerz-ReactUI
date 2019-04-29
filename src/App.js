import React, { Component } from 'react';
import Header from './components/Header'
import LoadControl from './components/LoadControl'
import ExportControl from './components/ExportControl'
import ResetControl from './components/ResetControl'
import Main3DView from './components/Main3DView'
import TextEngraving from './components/TextEngraving'
import CaseColourPicker from './components/CaseColourPicker'
import CaseSelection from './components/CaseSelection'

class App extends Component {
  /* Constructor */
  constructor(props) {
    super(props)

    /* App state*/
    this.state = {
      chosen_engraved_text: '',
      chosen_case_colour: '',
      chosen_phone_case: '',
      chosen_export_3d_format: '',
      available_export_3d_formats: ['STL', 'OBJ', 'AFM', '3FM'],
      available_case_models: ['iphone6.1', 'iphone6.2', 'iphone6.3', 'ipad2.1', 'galaxyS9.1', 'galaxyS9.2', 'pixel2XL.1'],
    }

    /* section to bind functions to local class context */
    this.update3DExportFormat = this.update3DExportFormat.bind(this)
    this.updateEngravingText = this.updateEngravingText.bind(this)
    this.updateCaseColour = this.updateCaseColour.bind(this)
    this.updateChosenCase = this.updateChosenCase.bind(this)
    this.resetApp = this.resetApp.bind(this)
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
      chosen_case_colour: '',
      chosen_export_3d_format: '',
      chosen_phone_case: '',
    })
  }

  updateEngravingText(e) {
    this.setState({ chosen_engraved_text: e.target.value })
  }

  updateCaseColour(color) {
    this.setState({ chosen_case_colour: color.hex })
  }

  updateChosenCase(e) {
    this.setState({ chosen_phone_case: e })
  }

  /* App JSX render section */
  render() {
    return (
      <div className="app" >
        <Header />
        <div className="top-controls">
          <LoadControl />
          <ResetControl onResetApp={this.resetApp} />
          <ExportControl
            export_3d_formats={this.state.available_export_3d_formats}
            chosen_3d_format={this.state.chosen_export_3d_format}
            on3DFormatSelect={this.update3DExportFormat}
          />
        </div>
        <div className="view3d">
          <CaseSelection
            onCaseSelect={this.updateChosenCase}
            app_states={this.state}
          />
          <Main3DView app_states={this.state} />
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
