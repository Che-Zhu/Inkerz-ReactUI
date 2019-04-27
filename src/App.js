import React, { Component } from 'react';
import Header from './components/Header'
import LoadControl from './components/LoadControl'
import ExportControl from './components/ExportControl'
import ResetControl from './components/ResetControl'
import Main3DView from './components/Main3DView'
import PhoneSelection from './components/PhoneSelection'
import TextEngraving from './components/TextEngraving'
import CaseColourPicker from './components/CaseColourPicker'
import CaseSelection from './components/CaseSelection'

// import AppStateCheck from './components/AppStateCheck'

class App extends Component {
  /* Constructor */
  constructor(props) {
    super(props)

    /* App state*/
    this.state = {
      chosen_phone_os: '',
      chosen_phone_model: '',
      chosen_engraved_text: '',
      chosen_case_colour: '',
      chosen_phone_case: '',
      chosen_export_3d_format: '',
      available_case_colours: ['Red', 'Blue', 'Green', 'Orange', 'Teal', 'Black', '#ffd24d', '#8585ad', 'Brown'],
      available_phone_OS: ['AppleiOS', 'Android'],
      available_AppleiOS_phone_models: ['iPhone6', 'iPad2'],
      available_Android_phone_models: ['GalaxyS9', 'GooglePixel2XL'],
      available_export_3d_formats: ['STL', 'OBJ', 'AFM', '3FM'],
      displyed_phone_models: ['Please', 'Choose', 'Phone', 'OS', 'First'],
      available_iPhone6_cases: ['iphone6.1', 'iphone6.2', 'iphone6.3'],
      available_iPad2_cases: ['ipad2.1'],
      available_galaxyS9_cases: ['galaxyS9.1', 'galaxyS9.2'],
      available_pixel2XL_cases: ['pixel2XL.1'],
      available_case_models: ['iphone6.1', 'iphone6.2', 'iphone6.3', 'ipad2.1', 'galaxyS9.1', 'galaxyS9.2', 'pixel2XL.1']
    }

    /* section to bind functions to local class context */
    this.update3DExportFormat = this.update3DExportFormat.bind(this)
    this.resetApp = this.resetApp.bind(this)
    this.updatePhoneModelSelect = this.updatePhoneModelSelect.bind(this)
    this.updateDisplayedPhoneModels = this.updateDisplayedPhoneModels.bind(this)
    this.updateEngravingText = this.updateEngravingText.bind(this)
    this.updateCaseColour = this.updateCaseColour.bind(this)
    this.updateChosenCase = this.updateChosenCase.bind(this)
  }
  /* Updates chosen_export_3d_format App state property based on return 
  event target value*/
  update3DExportFormat(e) {
    this.setState({ chosen_export_3d_format: e.target.value })
  }
  /* Resets App to chosen default values (empty) */
  resetApp() {
    this.setState({
      chosen_phone_os: '',
      chosen_phone_model: '',
      chosen_engraved_text: '',
      chosen_case_colour: '',
      chosen_export_3d_format: '',
      displyed_phone_models: ['Choose', 'Phone', 'Make', 'Above']
    })
  }

  updatePhoneModelSelect(e) {
    this.setState({ chosen_phone_model: e.target.value })

  }
  /* NEED to FIGURE OUT HOW TO USE E TARGET as array name
  to be able to move arrays into state!!!!!!!*/
  updateDisplayedPhoneModels(e) {
    var target = e.target.value

    if (target === "AppleiOS") {
      this.setState({ chosen_phone_os: "iOS" })
      this.setState({ displyed_phone_models: this.state.available_AppleiOS_phone_models })
    }

    if (target === "Android") {
      this.setState({ chosen_phone_os: "Android" })
      this.setState({ displyed_phone_models: this.state.available_Android_phone_models })
    }

  }

  updateEngravingText(e) {
    this.setState({ chosen_engraved_text: e.target.value })
  }

  updateCaseColour(e) {
    this.setState({ chosen_case_colour: e.target.value })
  }

  updateChosenCase(e) {
    this.setState({ chosen_phone_case: e.target.value })
  }

  /* App JSX render section */
  render() {
    return (
      <div className="container" >
        <header>
          <Header />
        </header>
        <div className="top-controls">
          <div className="top-controls-flex">
            <LoadControl />
            <ResetControl onResetApp={this.resetApp} />
            <ExportControl
              export_3d_formats={this.state.available_export_3d_formats}
              chosen_3d_format={this.state.chosen_export_3d_format}
            />
          </div>
        </div>
        <main>
          <Main3DView app_states={this.state} />
          <div className="abottom" >
            <CaseSelection
              phone_case_selection={this.state.available_case_models}
              onCaseSelect={this.updateChosenCase}
              app_states={this.state}
            />
          </div>

        </main>

        <aside>
          <PhoneSelection
            phone_makes={this.state.available_phone_OS}
            chosen_model_list={this.state.displyed_phone_models}
            onPhoneMakeSelect={this.updateDisplayedPhoneModels}
            onPhoneModelSelect={this.updatePhoneModelSelect}
            model={this.state.chosen_phone_model}
          />
          <TextEngraving
            engraved={this.state.chosen_engraved_text}
            onEngraveTextChange={this.updateEngravingText}
          />
          <CaseColourPicker
            phone_case_colours={this.state.available_case_colours}
            onCaseColourSelect={this.updateCaseColour}
          />
        </aside>

        {/* !!! Remove AppStateCheck in final version !!! */}
        {/* <AppStateCheck app_states={this.state} /> */}
      </div>
    );
  }
}

/* Export App */
export default App;
