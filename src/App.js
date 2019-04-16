import React, { Component } from 'react';
import Header from './components/Header'
import TopControls from './components/TopControls'
import Main3DView from './components/Main3DView'
import PhoneSelection from './components/PhoneSelection'
import TextEngraving from './components/TextEngraving'
import CaseColourPicker from './components/CaseColourPicker'
import AppStateCheck from './components/AppStateCheck'

class App extends Component {
  /* Constructor */
  constructor(props) {
    super(props)

    /* App state*/
    this.state = {
      chosen_phone_model: '',
      chosen_engraved_text: '',
      chosen_case_colour: '',
      chosen_export_3d_format: '',
      available_case_colours: ['Red', 'Blue', 'Green', 'Orange', 'Teal', 'Black', '#ffd24d', '#8585ad', 'Brown'],
      available_phone_OS: ['AppleiOS', 'Android'],
      available_AppleiOS_phone_models: ['iPhone6', 'iPad2'],
      available_Android_phone_models: ['GalaxyS9', 'GooglePixel2XL'],
      available_export_3d_formats: ['STL', 'OBJ', 'AFM', '3FM'],
      displyed_phone_models: ['Please', 'Choose', 'Phone', 'OS', 'First']
    }

    /* section to bind functions to local class context */
    this.update3DExportFormat = this.update3DExportFormat.bind(this)
    this.resetApp = this.resetApp.bind(this)
    this.updatePhoneModelSelect = this.updatePhoneModelSelect.bind(this)
    this.updateDisplayedPhoneModels = this.updateDisplayedPhoneModels.bind(this)
    this.updateEngravingText = this.updateEngravingText.bind(this)
    this.updateCaseColour = this.updateCaseColour.bind(this)

  }
  /* Updates chosen_export_3d_format App state property based on return 
  event target value*/
  update3DExportFormat(e) {
    this.setState({ chosen_export_3d_format: e.target.value })
  }
  /* Resets App to chosen default values (empty) */
  resetApp() {
    this.setState({
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

    if (target == "AppleiOS") {
      this.setState({ displyed_phone_models: this.state.available_AppleiOS_phone_models })
    }

    if (target == "Android") {
      this.setState({ displyed_phone_models: this.state.available_Android_phone_models })
    }

  }

  updateEngravingText(e) {
    this.setState({ chosen_engraved_text: e.target.value })
  }

  updateCaseColour(e) {
    this.setState({ chosen_case_colour: e.target.value })
  }

  /* App JSX render section */
  render() {
    return (
      <div className="container" >
        <header>
          <Header />
        </header>
        <TopControls
          export_3d_formats={this.state.available_export_3d_formats}
          chosen_3d_format={this.state.chosen_export_3d_format}
          on3DFormatSelect={this.update3DExportFormat}
          onResetApp={this.resetApp}
        />
        <main>
          <Main3DView app_states={this.state} />
        </main>
        <aside>
          <PhoneSelection
            phone_makes={this.state.available_phone_OS}
            chosen_model_list={this.state.displyed_phone_models}
            onPhoneMakeSelect={this.updateDisplayedPhoneModels}
            onPhoneModelSelect={this.updatePhoneModelSelect}
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
